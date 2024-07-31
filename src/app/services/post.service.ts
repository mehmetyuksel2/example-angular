import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url: string ='https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url).pipe(retry(3),
      catchError(this.handleError)//hata mesajı aldıktan sonra 3 kez dene
    )
  }
  createPost(post:object){
    return this.http.post(this.url,JSON.stringify(post))//postu string formatına çevir
  }

  updatePost(post: any){
    return this.http.put(this.url+'/'+post.id, JSON.stringify(post));//postu güncelle
  }

  deletePost(post:any){
    return this.http.delete(this.url+"/"+post.id);//id li postu sil
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //client error
      console.log("client error"+ error.error.message);

    }else{
      //backend error
      console.log(`backend error: status code ${error.status}' error: ${error.error}`)
    }

    return throwError('bilinmeyen bir hata oluştu')
  }

}
