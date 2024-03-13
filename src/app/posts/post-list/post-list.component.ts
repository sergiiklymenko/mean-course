import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy{
    posts: Post[] =[];
    private subscription: Subscription = new Subscription;

    constructor(public postService: PostService) {

    }

    ngOnInit(): void {
      this.postService.getPosts();
      this.postService.getPostUpdateListener()
      .subscribe((posts: Post [])=> {
        this.posts = posts;
      })
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
  
}
