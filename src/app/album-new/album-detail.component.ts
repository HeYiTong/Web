import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Album }         from '../album';
import { AlbumService }  from '../album.service';
@Component({
  selector: 'album-detail',
  templateUrl: '../hero-detail.component.html',
  styleUrls: [ '../hero-detail.component.css' ]
})
export class AlbumDetailComponent implements OnInit {
  album: Album;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.albumService.getAlbum(+params.get('id')))
      .subscribe(album => this.album = album);
  }

  goBack(): void {
    this.location.back();
  }
}
