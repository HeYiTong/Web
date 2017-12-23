import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from './album';
import {Hero } from './hero';
import { Photo } from './photo';

import { ALBUMS } from './mock-albums';
import { PHOTO_Y } from './mock-photos';
import { Injectable } from '@angular/core';

import { account } from './account';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlbumService {     
  
  constructor(private http: HttpClient) {}

  getAlbums(): Promise<Album[]> {
    return Promise.resolve(ALBUMS);            //返回指定用户所有相册
  }

//   getHeroesSlowly(): Promise<Hero[]> {
//     return new Promise(resolve => {
//       // Simulate server latency with 2 second delay
//       setTimeout(() => resolve(this.getHeroes()), 2000);
//     });
//   }

  getAlbum(id: number): Promise<Album> {          //通过ID打开相册
    return this.getAlbums()
               .then(albums => albums.find(album => album.id === id));
  }


  getPhotos(): Promise<Photo[]> {             //返回指定相册所有图片
    return Promise.resolve(PHOTO_Y);
  }
  getPhoto(photo_id: number): Promise<Photo> {          //通过ID打开图片
    return this.getPhotos()
               .then(photos => photos.find(photo => photo.photoid === photo_id));
  }
  updateAlbum(userid:string): Observable<any> {
    const userinfo = new HttpParams().set('userid', userid);
    return this.http.post('http://localhost:8080/albums',userinfo);
  }
  updatePhoto(albumid:number): Observable<any> {
    const userinfo = new HttpParams().set('albumid', albumid.toString());
    return this.http.post('http://localhost:8080/pics',userinfo);
  }
  
}
