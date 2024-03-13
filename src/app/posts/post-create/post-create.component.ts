import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['post-create.component.css'],
})
export class PostCreateComponent {
  constructor(public postsService: PostService) {
  }


  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
        id: 'jhyfgvuj',
        title: form.value.title,
        content: form.value.content
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
