import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-selection-box',
  templateUrl: './form-selection-box.component.html',
  styleUrls: ['./form-selection-box.component.scss']
})
export class FormSelectionBoxComponent implements OnInit {
  @Input() titleName:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
