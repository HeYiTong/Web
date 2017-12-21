import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Album }         from '../album';
import { Photo }         from '../photo';
import { AlbumService }  from '../album.service';




@Component({
  selector: 'album-dashboard',
  templateUrl: './a-dashboard.component.html',
  styleUrls: [ './a-dashboard.component.css' ]
})
export class ADashboardComponent implements OnInit {
  album: Album;
  photos: Photo[] = [];
  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.albumService.getAlbum(+params.get('id')))
      .subscribe(album => this.album = album);
    this.albumService.getPhotos()
      .then(photos => this.photos = photos);
  }

  goBack(): void {
    this.location.back();
  }



  
}
