import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hotel-category-container-box',
  templateUrl: './hotel-category-container-box.component.html',
  styleUrls: ['./hotel-category-container-box.component.scss']
})
export class HotelCategoryContainerBoxComponent implements OnInit {
  @Input() imgSrc: string | undefined;
  @Input() innerTitle: string = "";
  @Input() description: string = "";
  @Input() imageUrl:string="";

  constructor() {
  }

  ngOnInit(): void {
  }

}
