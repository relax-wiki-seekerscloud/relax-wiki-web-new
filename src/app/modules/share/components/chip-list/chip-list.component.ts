import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent, MatChipList} from "@angular/material/chips";

export interface Chip {
  value: string;
  selected?: boolean;
}
@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss']
})
export class ChipListComponent implements AfterViewInit {

  @Input() chips: Chip[] = [];
  @Input() color: string = 'primary';
  @Output() chipsChange = new EventEmitter<Chip[]>();
  newChipValue: string = '';
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  addOnBlur = true;

  @ViewChild(MatChipList) chipList!: MatChipList;

  constructor() { }

  ngAfterViewInit() {
    // Initialize the chipList property here
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      const chip: Chip = { value };
      this.chips.push(chip);
      this.newChipValue = '';
      this.chipsChange.emit(this.chips);
    }
    event.chipInput!.clear();
  }


  remove(chip: Chip): void {
    const index = this.chips.indexOf(chip);
    if (index >= 0) {
      this.chips.splice(index, 1);
      this.chipsChange.emit(this.chips);
    }
  }
}
