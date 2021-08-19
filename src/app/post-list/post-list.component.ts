import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit, OnDestroy{
  postSub: Subscription = new Subscription();
  posts: Array<Post> = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postSub = this.postService.postSubject.subscribe((posts:Post[])=>{
      this.posts = posts;
    });
    this.postService.emitPosts();
  }

  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
