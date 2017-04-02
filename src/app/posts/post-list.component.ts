import { Component, OnInit } from '@angular/core';
import { IPost } from './post';
import { PostService } from './post.service';

@Component({
  moduleId: module.id,
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css']
})


export class PostListComponent implements OnInit {
  pageTitle: string = 'Post List';
  searchList: string;
  errorMessage: string;
  posts: IPost[];

  constructor(private _postService: PostService) {

  }

  ngOnInit(): void {
    this._postService.getPosts()
      .subscribe(
      posts => this.posts = posts,
      error => this.errorMessage = <any>error);
  }

}
