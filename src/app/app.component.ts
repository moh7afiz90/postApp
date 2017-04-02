import { Component } from '@angular/core';
import { PostService } from './posts/post.service'

@Component({
  selector: 'pm-app',
  template: `
  <div>
    <nav class='navbar navbar-default'>
      <div class='container-fluid'>
        <a class='navbar-brand'>{{pageTitle}}</a>
          <div class='navbar-collapse collapse'>
            <ul clas='nav navbar-nav pull-right'>
              <li class="active"><a [routerLink]="['/welcome']">Home</a></li>
              <li><a [routerLink]="['/posts']">Post List</a></li>
            </ul>
          </div>
      </div>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  providers: [PostService]
})
export class AppComponent {
  pageTitle = 'Post Management App';
}
