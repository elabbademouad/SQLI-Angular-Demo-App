import { Injectable } from '@angular/core';
import { Login } from '../Model/login';
import { User } from '../Model/user';
import { UserService } from './user.service';
import { MessageService } from './message.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(public userService:UserService,public messageService:MessageService,public router:Router) { }
  login(login:Login):User{
    let user= this.userService.getUserByUserName(login.userName);
    return user;
  }

  register(user:User){
    if(this.userService.addUser(user)){
      this.messageService.setMessage({message:"Registration with success ",status:"success"});
      this.router.navigate(["login"]);
    }else{
      this.messageService.setMessage({message:"Registration Errors username already taken!",status:"error"});
    }
  }
  disconnect(){
    this.userService.setCurrentUser(null);
  }
}
