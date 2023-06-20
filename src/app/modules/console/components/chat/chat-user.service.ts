import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import {Chat} from "./Entities/chat";
import {ChatIdInfo} from "./Entities/chat-id-info";

@Injectable({
  providedIn: 'root'
})
export class ChatUserService {

  private baseURL= "http://localhost:8080";
  private chatListUrl= "http://localhost:8080/hotelInfo/getAllHotels";
  private chatContentUrl= "http://localhost:8080/chatIdInfo/requestChat";
  private refreshIntervalforchatlist = 1000; // Refresh interval in milliseconds
  private refreshIntervalforchas = 500; // Refresh interval in milliseconds


  constructor(private http: HttpClient) {}

  getUpdatedChatListData(): Observable<any> {
    return interval(this.refreshIntervalforchatlist).pipe(
      startWith(0),
      switchMap(() => this.http.get<any>(this.chatListUrl))
    );
  }

  getUpdatedChatData(UserId:number,HotelId:number): Observable<any> {
    return interval(this.refreshIntervalforchas).pipe(
      startWith(0),
      switchMap(() => this.http.get<any>(`${this.chatContentUrl}/${UserId}/${HotelId}`))
    );
  }

  registerGuestAndGetId(GuestUser:string):Observable<number>{
    this.http.post(`${this.baseURL}/UserController/Register`, {"userName":"GST"+GuestUser}).subscribe();
    return this.http.get<number>(`${this.baseURL}/UserController/getUserIdByUserName/GST${GuestUser}`)
  }

  sendMessage(chatIDsInfo: ChatIdInfo, messageText: string, mychatId: number) {
    this.http.post(`http://localhost:8080/chat/saveChat`,{
      "chatIDsInfo":{
        "chatID":chatIDsInfo.chatID
      },
      "message":messageText,
      "messageOwnerId":mychatId,
      "timeStamp":null,
    }).subscribe();
  }


}
