import {Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';


@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent {
  @Input() file: File | undefined;
  @Output() readyUrl = new EventEmitter<string>();
  @Output() deleteUrl  = new EventEmitter<any>();
  task: AngularFireUploadTask | undefined;

  percentage: Observable<number> | undefined;
  snapshot: Observable<any> | undefined;
  downloadURL: string | undefined;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    this.startUpload();
  }
  emitUrl(){
    this.readyUrl.emit(this.downloadURL);
  }

  startUpload() {

    // The storage path
    const path = `images/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.emitUrl();
      }),
    );
  }

  isActive(snapshot:any) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
  deletePhoto(downloadURL: string) {
    if (downloadURL) {
      // Delete the file from Firebase Storage
      const storageRef = this.storage.refFromURL(downloadURL);
      storageRef.delete().subscribe(
        () => {
          this.deleteUrl.emit({file:this.file,url:this.downloadURL});
          this.downloadURL = null; // Remove the deleted photo from `downloadURL`
        },
        (error) => {
          console.error('Error deleting file:', error);
        }
      );

    }
  }

}
