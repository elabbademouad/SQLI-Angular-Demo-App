import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usersApi:string="assets/data/users.json";
  private postsApi:string="assets/data/posts.json";

  constructor(public _http:HttpClient) { }
  async initData(){
    if(isNullOrUndefined(localStorage.getItem("users"))){
      let users=await this._http.get(this.usersApi).toPromise();
      localStorage.setItem("users",JSON.stringify(users));
    }
    if(isNullOrUndefined(localStorage.getItem("posts"))){
      let posts=await this._http.get(this.postsApi).toPromise();
      localStorage.setItem("posts",JSON.stringify(posts));
    }
  }
}
