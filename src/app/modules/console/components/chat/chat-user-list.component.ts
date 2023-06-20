import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatUserService} from "./chat-user.service";
import {ChatUser} from "./Entities/chat-user";
import {Chat} from "./Entities/chat";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.css']
})
export class ChatUserListComponent implements OnInit{

  MyUserId = 0;
  currentSelectedHotel = 1;
  prevoiusSelectedHotel = 1;


  // @ts-ignore
  hotelName :String;

  listData: ChatUser[] = [];   // chat List
  ChatData:Chat[] = [];        // chat data

  // @ts-ignore
  messageText: string;

  // @ts-ignore
  firstChatData:Chat;


  constructor(private chatUserService:ChatUserService) {}


  ngOnInit(): void {

    // const randomUsername = this.generateRandomUsername(8);

    this.chatUserService.registerGuestAndGetId("GuestUser").subscribe(data =>{
      this.MyUserId = data;
    })

    this.subscribeToDataChanges();
  }

  // generateRandomUsername(length: number): string {
  //   let result = '';
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   const charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // }

  subscribeToDataChanges(): void {

    this.chatUserService.getUpdatedChatListData().subscribe(data => {
      this.listData = data;
    });
  }

  private chatDataSubscription: Subscription | undefined;

  getChat(MyUserId: number, hotelId: number, hotelName: String) {
    this.prevoiusSelectedHotel = this.currentSelectedHotel;
    this.currentSelectedHotel = hotelId;
    this.hotelName = hotelName;

    // Unsubscribe from the previous subscription if it exists
    if (this.chatDataSubscription) {
      this.chatDataSubscription.unsubscribe();
    }

    // Subscribe to the updated chat data
    this.chatDataSubscription = this.chatUserService
      .getUpdatedChatData(this.MyUserId, this.currentSelectedHotel)
      .subscribe((data) => {
        if (this.currentSelectedHotel === this.prevoiusSelectedHotel) {
          if (this.ChatData !== data) {
            this.ChatData = data;
            this.firstChatData = this.ChatData[0];
          }
        } else {
          this.ChatData = data;
          this.firstChatData = this.ChatData[0];
        }
      });
  }


  sendMessage() {
    console.log(this.messageText);
    if(this.messageText!=''){
      console.log(this.firstChatData.chatIDsInfo);
      this.chatUserService.sendMessage(this.firstChatData.chatIDsInfo,this.messageText,this.MyUserId);
    }
    this.messageText = '';
    this.scrollToBottom();
    this.scrollToBottom();
  }

  scrollToBottom() {
    var chatBody = document.getElementById('chatBody');
    // @ts-ignore
    chatBody.scrollTop = chatBody.scrollHeight;
  }

}
