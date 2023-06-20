import { Component } from '@angular/core';


@Component({
  selector: 'app-console-default',
  templateUrl: './console-default.component.html',
  styleUrls: ['./console-default.component.scss']
})
export class ConsoleDefaultComponent {

 chat_trigger=true;

  chat_view() {
    if(!this.chat_trigger){
      this.chat_trigger = true;
    }

  }

}
