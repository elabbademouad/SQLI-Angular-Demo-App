import { Injectable } from '@angular/core';
import { Login } from '../Model/login';
import { User } from '../Model/user';
import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {

  constructor(public userService:UserService) { }
  login(login:Login):User{
    let user= this.userService.getUserByUserName(login.userName);
    return user;
  }

  register(user:User){
    
  }
  disconnect(){
    this.userService.setCurrentUser(null);
  }
}
