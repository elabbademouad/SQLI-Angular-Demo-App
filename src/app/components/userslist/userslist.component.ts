import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';
import { UserFilter } from 'src/app/Model/userFilter';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  editMode:boolean=false;
  users:Array<UserRow>=[];
  constructor(public userService:UserService) { 
    let users=this.userService.getAllUsers();
    users.forEach(element => {
        this.users.push({
          user:element,
          editMode:false
        })
    });
  }

  ngOnInit() {
  }
  handleFilterChanged(filter:UserFilter){
      let users=this.userService.getAllUsers().filter((item)=>{debugger
        let ff=!isNullOrUndefined(filter.firstName);
        let conditionCount=0;
        let conditionTrueCount=0;
        let exists=true;
        if(!isNullOrUndefined(filter.firstName) ){
          conditionCount++;
           if(item.firstName.includes(filter.firstName)){
              conditionTrueCount++;
           }
        }
        if(!isNullOrUndefined(filter.lastName) ){
          conditionCount++;
           if(item.lastName.includes(filter.lastName)){
              conditionTrueCount++;
           }
        }
        if(!isNullOrUndefined(filter.userName) ){
          conditionCount++;
           if(item.userName.includes(filter.userName)){
              conditionTrueCount++;
           }
        }
        if(!isNullOrUndefined(filter.role) ){
          conditionCount++;
           if(item.role.includes(filter.role)){
              conditionTrueCount++;
           }
        }
        if(!isNullOrUndefined(filter.active) ){
          conditionCount++;
           if(item.active===JSON.parse( filter.active.toString())){
              conditionTrueCount++;
           }
        }
        return conditionCount===conditionTrueCount;
      });
      this.users=[];
      users.forEach(element => {
        this.users.push({user:element,editMode:false});
      });
  }
  edit(user:UserRow){
    if(user.editMode){
      let users= this.userService.getAllUsers();
      users.forEach(element => {
        if(element.userName===user.user.userName){
          element.firstName=user.user.firstName;
          element.lastName=user.user.lastName;
        }
      });
      localStorage.setItem("users",JSON.stringify(users));
    }
    user.editMode=!user.editMode;
  }

}
class UserRow{
  user:User;
  editMode:boolean;
}
