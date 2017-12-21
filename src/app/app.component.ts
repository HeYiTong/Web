import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    
    <nav>
      <a routerLink="/login" routerLinkActive="active">Login</a>               
  
      <a routerLink="/album" routerLinkActive="active">Album</a> 
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>           
  `,
  //<router-outlet></router-outlet>显示激活的组件
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '在线相册';
}
