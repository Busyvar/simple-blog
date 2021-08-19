import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList:Array<Post> = [
    new Post("article premier", "lorem ipsum dolor sic amet consecendur...", new Date().toString())
  ];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts(){
    this.postSubject.next(this.postList);
  }
  savePost(post:Post){
    this.postList.push(post);
    this.emitPosts();
  }

  updateOneLoveIt(i:number, val:number){
    this.postList[i].loveIt = val;
    this.emitPosts();
  }
}
