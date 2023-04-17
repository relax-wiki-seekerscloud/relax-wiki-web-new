import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  page: number | undefined = 0;
  pageSize: number | undefined = 3;
  pageSizeOptions = [3, 10, 20, 30, 50, 80, 100];
  dataCount = 0;
  pageEvent: PageEvent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
    console.log(event);
    // this.getAllPrograms();
  }

}
