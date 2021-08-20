import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})

export class PostComponent implements OnInit {
@Input() index: number = 0
@Input() title: string = ""
@Input() content: string = ""
@Input() date: string = ""
@Input() loveIt: number = 0

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  like(){
    console.log("yeah!");
    this.loveIt += 1;
    this.postService.updateOneLoveIt(this.index, this.loveIt);
  }
  dislike(){
    console.log("booh!");
    this.loveIt -= 1;
    this.postService.updateOneLoveIt(this.index, this.loveIt);
  }
  removePost(){
    this.postService.deletePost(this.index);
  }
}
