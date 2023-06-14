import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-box-border',
  templateUrl: './content-box-border.component.html',
  styleUrls: ['./content-box-border.component.scss']
})
export class ContentBoxBorderComponent implements OnInit {
  @Input() boxName:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
