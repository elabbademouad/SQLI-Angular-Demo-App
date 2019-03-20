import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/services/user.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:Post;
  user:User
  constructor(public userService:UserService,public postsService:PostsService) { 
    this.user=new User();
  }
  like(){debugger
    this.postsService.likePost(this.post);
  }
  ngOnInit(){
    this.user=this.userService.getUserByUserName(this.post.userName);
  }

}
