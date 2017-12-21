import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Album } from '../album';
import { HeroService } from '../hero.service';
import {AlbumService} from '../album.service';

@Component({
  selector: 'my-album',
  templateUrl: './album-list.component.html',
  styleUrls: [ './album.component.css' ]
})
export class AListComponent implements OnInit {        //相册导航

  albums: Album[] ;
  
  selectedAlbum: Album;
  constructor(
    private albumService: AlbumService ,
    private router: Router,) {}      //相册服务类
    
  getAlbums(): void {
      this.albumService.getAlbums().then(albums => this.albums = albums);
    }
  ngOnInit(): void {
    this.getAlbums();     //显示相册
  }

  onSelect(album: Album): void {
    this.selectedAlbum = album;
  }

  gotoAlbum(): void {
    this.router.navigate(['/adashboard', this.selectedAlbum.id]);
  }
}
