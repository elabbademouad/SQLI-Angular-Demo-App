import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/Model/login';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
import { isNullOrUndefined } from 'util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  login:Login
  constructor(public authService:AuthenticationService,
              public messageService:MessageService,
              public userService:UserService, 
              public route:ActivatedRoute,) { 
    this.login=new Login();
  }

  handleLoginClick(){
    let user=this.authService.login(this.login);
     if(user){
      this.userService.setCurrentUser(user)
       this.messageService.setMessage({message:"success",status:"success"});
     }else{
      this.userService.setCurrentUser(null);
      this.messageService.setMessage({message:"error",status:"error"});
     }
  }

}
