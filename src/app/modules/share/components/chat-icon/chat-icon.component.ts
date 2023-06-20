import { Component, OnInit } from '@angular/core';
import {UserChatComponent} from "../user-chat/user-chat.component";
import {MatDialog} from "@angular/material/dialog";
import {ChatUserListComponent} from "../../../console/components/chat/chat-user-list.component";

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
    this.dialog.open(ChatUserListComponent, {
      width: '80vw',
    });
  }

}
