import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../services/games.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})


export class GameCreateComponent implements OnInit {

  constructor(gamesService: GamesService, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
