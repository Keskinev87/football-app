import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../models/game.model'

@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.css']
})
export class GameListItemComponent implements OnInit {
  @Input() game: Game

  constructor() { }

  ngOnInit() {
  }

}