import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { User } from './Model/user';
import { Post } from './Model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  constructor(public _dataService:DataService){
    //Init data in localStorage
    this._dataService.initData();
  }
}
