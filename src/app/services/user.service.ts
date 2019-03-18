import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserSubject:Subject<User>=new Subject<User>();
  constructor() { }

  getAllUsers():Array<User>{
    let users:Array<User>= JSON.parse(localStorage.getItem("users"));
    return users;
  }
  getUserByUserName(userName:string):User{
     let user=this.getAllUsers().filter((user)=>{
        return user.userName===userName;
     });
     if(user.length===1){
       return user[0];
     }else{
       return null;
     }
  }
  getCurrentUser(){
    return this.currentUserSubject.asObservable();
  }
  setCurrentUser(user:User){
    this.currentUserSubject.next(user);
  }
}
