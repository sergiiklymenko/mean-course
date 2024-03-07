import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
    @Input() posts: Post[] =[];
//   posts = [
//       {title: 'First Post', content: 'This is the first content'},
//       {title: 'Sesond Post', content: 'This is the second content'},
//       {title: 'Third Post', content: 'This is the third content'}
//   ]
  
}
