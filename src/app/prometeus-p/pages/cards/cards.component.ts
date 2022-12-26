import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/allServices.service';
import { Album, Post } from '../../interfaces/appInter.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: []
})
export class CardsComponent implements OnInit {

  albums: Album[] = [];
  post: Post[] = [];
  albumFoot: string = 'Album';
  postFoot: string = 'Post';
  
  constructor(private albumServices : ServicesService, private postServices: ServicesService) { 
  }

  ngOnInit(): void {
    this.albumServicesInyected();
    this.postServicesInyected();
  }

  albumServicesInyected(){
    this.albumServices.getAlbums().subscribe(( resp ) =>{
      return this.albums = resp;
    });
  }

  postServicesInyected(){
    this.postServices.getPost().subscribe((resp) => {
      return this.post = resp;
    });
  }

  changeToPost(index: number){

    return  this.albums[index].showBoolean = !this.albums[index].showBoolean;
    
  }
}
