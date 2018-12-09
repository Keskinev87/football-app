import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/components/models/game.model';

@Component({
  selector: 'app-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.css']
})
export class GameRulesComponent implements OnInit {

  @Input() game: Game

  constructor() { }

  ngOnInit() {
  }

}
