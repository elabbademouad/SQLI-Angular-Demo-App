import { Injectable } from '@angular/core';
import { Post } from '../Model/post';
import { UserService } from './user.service';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  currentUser:User;
  constructor(public userService:UserService) {
    this.userService.getCurrentUser().subscribe((user:User)=>{
        this.currentUser=user;
    });
  }
  getAllPosts():Array<Post>{
    let posts:Array<Post>=JSON.parse(localStorage.getItem("posts"));
    return posts;
  }
  likePost(post:Post){
    if(post.likes.indexOf(this.currentUser.userName) === -1){
      post.likes.push(this.currentUser.userName);
      this.update(post);
    }
  }
  update(post:Post){
     let posts=this.getAllPosts();
     let postIndex= posts.findIndex((item)=>{
       return item.title===post.title && item.userName===post.userName;
     });
     posts[postIndex]=post;
     localStorage.setItem("posts",JSON.stringify(posts));
  }

}
