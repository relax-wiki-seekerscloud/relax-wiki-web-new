import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-property-box',
  templateUrl: './select-property-box.component.html',
  styleUrls: ['./select-property-box.component.scss']
})
export class SelectPropertyBoxComponent implements OnInit {
  @Input() name: string = "";
  @Input() imagePath:string="";
  @Input() listPage:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
