import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Album, Post, Todo } from '../interfaces/appInter.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

private apiUrl: string ='https://jsonplaceholder.typicode.com';



  constructor(private http: HttpClient, private http2: HttpClient, private http3: HttpClient) {     
  }

getAlbums(): Observable <Album[]>{

  const url =  `${this.apiUrl}/albums` ;
  return this.http.get<Album[]>( url );
}

getPost():Observable<Post[]>{

  const url = `${this.apiUrl}/posts`;
  return this.http2.get<Post[]>( url );
}

getTodo(): Observable<Todo[]>{
  const url = `${this.apiUrl}/todos`;
  return this.http3.get<Todo[]>( url );
}

}
