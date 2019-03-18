import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser:User
  title:string="ngular Demo";
  logUrl:string ="assets/pictures/ng-logo.png"
  constructor(public userService:UserService,
              public authService:AuthenticationService) {
      userService.getCurrentUser().subscribe((user:User)=>{
        this.currentUser=user;
      });
   }

  ngOnInit() {
  }
  handleClickDisconnect(){
    this.authService.disconnect();
  }

}
