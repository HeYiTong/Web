import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

import { account } from './account';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './heroes.component.css' ],
})
export class LoginComponent implements OnInit {

  Log_account: account ={
    id: '1 ',
    password:'1 ',
    name: 'sb 95',
    email: ' '
  }
  Online_account: account;
  //登录
  Login(Account: account):void{
    this.Online_account = Account;
  }
  constructor(private heroService: HeroService) { };
  ngOnInit(): void {
  this.heroService.getHeroes();
  }
}
