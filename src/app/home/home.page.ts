import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  users = [
    {name:'tolu', revenue: 234}, 
    {name:'mary', revenue: 333},
    {name:'billy', revenue: 555}
  ];

  constructor(){
  }

  ngOnInit(){
      
  }
}