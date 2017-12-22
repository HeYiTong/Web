import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './album/dashboard.component';
import { AListComponent }   from './album-new/album-list.component';

import { HeroesComponent }      from './heroes.component';
import { LoginComponent }      from './login.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { AlbumDetailComponent }  from './album-new/album-detail.component';
import { ADashboardComponent }  from './album-new/a-dashboard.component';
import { SigninComponent } from './signin.component';




//定义路由（路径链接）
//Path: 路由器会用它来匹配浏览器地址栏中的地址，如heroes。
//Component: 导航到此路由时，路由器需要创建的组件（HeroesComponent）。

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },  //登录
  { path: 'signin',  component: SigninComponent },  //登录
  { path: 'album',  component: AListComponent },          
  { path: 'adashboard/:id', component: ADashboardComponent },
  { path: 'dashboard',  component: DashboardComponent },          
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
