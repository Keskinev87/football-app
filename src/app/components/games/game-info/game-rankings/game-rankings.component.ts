import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/components/models/game.model';

@Component({
  selector: 'app-game-rankings',
  templateUrl: './game-rankings.component.html',
  styleUrls: ['./game-rankings.component.css']
})
export class GameRankingsComponent implements OnInit {

  @Input() game: Game
  
  constructor() { }

  ngOnInit() {
  }

}
