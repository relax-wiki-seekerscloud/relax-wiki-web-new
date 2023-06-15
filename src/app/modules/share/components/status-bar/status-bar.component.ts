import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  constructor() { }
  @Input() currentStep: number;
  @Input() totalSteps: number;

  steps: number[];

  ngOnInit() {
    this.steps = Array(this.totalSteps).fill(0).map((x, i) => i);
  }

  getPercentage(): string {
    return ((this.currentStep / (this.totalSteps-1)) * 100) + '%';
  }


}
