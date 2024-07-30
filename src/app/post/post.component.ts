
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { title } from 'process';
import { json } from 'stream/consumers';
import { PostService } from '../services/post.service';
import { error } from 'console';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  posts!: [any];
  error!: Error;
  
  constructor(private postService: PostService){ }
  ngOnInit(): void {
    
    this.postService.getPosts()
    .subscribe(response =>//subscribe metodu response döndüğü anda tetiklenir
      {
        this.posts = <[any]>response
      },error=>console.log(error));
  }

  createPost(input:HTMLInputElement){
    const post = {title: input.value};
    this.postService.createPost(post)
    .subscribe(response => {
      //post['id'] = response['id'],
      this.posts.splice(0,0,post)
      console.log(response)
    })
  }

  updatePost(post: any){
    post.title='updated';//formdan gönderilen post objesinin başlığı güncellenir

    this.postService.updatePost(post).subscribe(response=>{
      console.log(response);//apiden dönen response console da gösterilir
    })//objenin tamamı gönderilir ve güncellenir
    // this.http.patch(this.url+'/'+post.id, JSON.stringify({//patch ile objenin bi kısmı güncellenebilir
    //   title:'updated'
    // }))
  }

  deletePost(post: any){
    this.postService.deletePost(post).subscribe(response => {
      console.log(response);
      let index = this.posts.indexOf(post); // parametre olarak gönderilen postun index numarasını sini öğreniyoruz
      this.posts.splice(index,1);
    }, error => this.error = error)
  }

}
