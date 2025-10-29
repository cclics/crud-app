import { Component } from '@angular/core';

import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})


export class IndexComponent {

  posts: Post[] = [];

  constructor(public postService: PostService) {}

  /**
   * Write code on Method 
   * 
   * @ return response()
   */

  ngOnInit(): void {
    this.postService.getAll().subscribe((data: Post[])=> {
      this.posts = data;
      console.log(this.posts);
    })
  }

  /**
   * Write code on Method 
   * 
   * @ return response()
   */
  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
      this.posts = this.posts.filter(item => item.id !== id);
      console.log('Post deleted succesfully!');
    })
  }
 
}

