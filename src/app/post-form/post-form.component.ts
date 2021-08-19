import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass']
})
export class PostFormComponent implements OnInit {
  postForm : any = [];
  

  constructor(private router:Router, private postService: PostService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initPostForm();
  }

  initPostForm(){
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    })
  }
  onSubmit(){
    const post:Post = new Post(
      this.postForm.get("title").value,
      this.postForm.get("content").value,
      new Date().toString()
    )
    this.postService.savePost(post);
    this.router.navigate(["/posts"]);

  }

}
