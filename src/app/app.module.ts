import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { LoginComponent } from './login.component';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './album/dashboard.component';
import {AListComponent}    from './album-new/album-list.component'   ;      //相册仪表盘

import { HeroDetailComponent }  from './hero-detail.component';
import { AlbumDetailComponent }  from './album-new/album-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { AlbumService }          from './album.service';

import {ADashboardComponent} from './album-new/a-dashboard.component';

import { AppRoutingModule }     from './app-routing.module';
import { UserService } from '../Service/user.service';
import { SigninComponent } from './signin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    LoginComponent,    //登录组件
    DashboardComponent,
    AppComponent,
    SigninComponent,
    AListComponent,
    HeroDetailComponent,
    HeroesComponent,
    AlbumDetailComponent,
    ADashboardComponent,
  ],
  providers: [ 
    HeroService,
    AlbumService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
