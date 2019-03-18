import { Component, ViewChild } from '@angular/core';
import { DataService } from './services/data.service';
import { User } from './Model/user';
import { Post } from './Model/post';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  constructor(public _dataService:DataService,public http:HttpClient){
    //Init data in localStorage
    this._dataService.initData();
  }
  ngOnInit(){
  }

}
