import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../Model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { 
    this.messageSubject=new Subject<Message>();
    this.setMessage(null);
  }
  messageSubject:Subject<Message>;
  getMessage(){
    return this.messageSubject.asObservable();
  }
  setMessage(message:Message){
    this.messageSubject.next(message);
  }


}
