import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  constructor(public authService:AuthenticationService) { 
    this.user=new User();
  }
  confirmPass:string;
  ngOnInit() {
  }

  register(){
    this.authService.register(this.user);
  }

}
