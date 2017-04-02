import { Component, OnInit } from '@angular/core';
import { IPost } from './post';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  moduleId: module.id,
  templateUrl: 'post-detail.component.html'
})

export class PostDetailComponent implements OnInit {
  pageTitle: string = 'Post Detail';
  post: IPost;

  constructor(private _route: ActivatedRoute,
    private _router: Router) {

  }



  ngOnInit(): void {
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this._router.navigate(['/posts']);
  }
}
