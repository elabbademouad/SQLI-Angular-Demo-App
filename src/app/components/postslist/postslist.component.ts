import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Model/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent implements OnInit {

  constructor(public postsService:PostsService) { }
  posts:Array<Post>;
  ngOnInit() {
    this.posts=this.postsService.getAllPosts();
  }

}
