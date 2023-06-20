import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {
  EntertainmentListingService
} from "../../../../../../share/services/entertainment/entertainment-listing.service";

@Component({
  selector: 'app-entertainment-photos',
  templateUrl: './entertainment-photos.component.html',
  styleUrls: ['./entertainment-photos.component.scss']
})
export class EntertainmentPhotosComponent implements OnInit {
  entertainmentPhotos: string[] = [];
  constructor(private entertainmentListingService: EntertainmentListingService,private router:Router) { }

  isHovering: boolean = false;

  files: File[] = [];

  addPhoto(url: string) {
    this.entertainmentPhotos.push(url);
    console.log(this.entertainmentPhotos);
  }
  removePhoto(data:any) {
    this.entertainmentPhotos = this.entertainmentPhotos.filter(item => item !== data.url);
    this.files = this.files.filter(item => item !== data.file);
  }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
  ngOnInit(): void {
  }

  addPhotosToEntertainment(){
    this.entertainmentListingService.addPhotosToEntertainment(this.entertainmentPhotos);
    console.log(this.entertainmentListingService.entertainmentListDTO);
    this.router.navigate(['/console/entertainment-management/entertainment-registration/entertainment-policies']).then();
  }

}
