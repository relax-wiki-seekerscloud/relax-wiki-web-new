import { Component, OnInit } from '@angular/core';
import {UserChatComponent} from "../user-chat/user-chat.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-chat-icon',
  templateUrl: './chat-icon.component.html',
  styleUrls: ['./chat-icon.component.scss']
})
export class ChatIconComponent implements OnInit {

  constructor(public dialog: MatDialog) {}


  ngOnInit(): void {
  }

  openChatUiPopUp(){
    this.dialog.open(UserChatComponent, {
      width: '80vw',
    });
  }

}
