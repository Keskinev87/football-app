import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games = [{id: 1,name: "Yavor's game", shareableUrl:'http://join.me', secretCode: 123456, leagues:[2000, 2001], matches:[101, 102], users:[{id:1, name:'Yavor Keskinev'},{id:2, name:'Vladi Getzov'}],
  description:'This is a test game. Just to see how it looks, you know', creator:{id:1, name: 'Yavor Keskinev'}, admin:{id:3, name:'Admin Yavor'}},
  {id: 2, name:"Ender's Game", shareableUrl:'http://join.me', secretCode: 234567, leagues:[2000, 2001, 2002], matches:[101, 102, 103], users:[{id:1, name:'Yavor Keskinev'},{id:2, name:'Pavel Getov'}],
  description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', creator:{id:1, name: 'Yavor Keskinev'}, admin:{id:3, name:'Admin Yavor'}}]
  constructor() { }

  ngOnInit() {
  }

}

