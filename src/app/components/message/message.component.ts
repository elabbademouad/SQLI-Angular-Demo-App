import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/app/Model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent  {

  display:boolean
  constructor(public messageServic:MessageService) { 
    this.display=false;
    this.messageServic.getMessage().subscribe((message:Message)=>{
      this.message=message;
      this.display=true;
      setTimeout(()=>{this.display=false;},3000);
    })
  }
  message:Message;


}
