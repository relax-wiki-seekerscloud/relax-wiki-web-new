import {GuestUser} from "./guest-user";
import {ChatUser} from "./chat-user";

export class ChatIdInfo {

  chatID:number;
  userInfo:GuestUser;
  hotelInfo:ChatUser;

  constructor(chatID: number, userInfo: GuestUser, hotelInfo: ChatUser) {
    this.chatID = chatID;
    this.userInfo = userInfo;
    this.hotelInfo = hotelInfo;
  }
}
