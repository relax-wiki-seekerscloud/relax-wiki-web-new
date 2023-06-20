import {ChatIdInfo} from "./chat-id-info";

export class Chat {
  chatIndex:number;
  chatIDsInfo:ChatIdInfo;
  message : string;
  messageOwnerId:number;

  constructor(chatIndex: number, chatIDsInfo: ChatIdInfo, message: string, messageOwnerId: number) {
    this.chatIndex = chatIndex;
    this.chatIDsInfo = chatIDsInfo;
    this.message = message;
    this.messageOwnerId = messageOwnerId;
  }

}
