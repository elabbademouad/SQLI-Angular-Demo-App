import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserFilter } from 'src/app/Model/userFilter';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-usersfilter',
  templateUrl: './usersfilter.component.html',
  styleUrls: ['./usersfilter.component.css']
})
export class UsersfilterComponent implements OnInit {

  filter:UserFilter;
  @Output()
  filterChanged:EventEmitter<UserFilter>=new EventEmitter<UserFilter>();
  constructor() {
    this.filter=new UserFilter(); 
  }

  ngOnInit() {
  }
  filterClick(){
    this.filterChanged.emit(this.filter);
  }

}
