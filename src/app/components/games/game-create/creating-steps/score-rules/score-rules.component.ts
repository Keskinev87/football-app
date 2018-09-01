import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-score-rules',
  templateUrl: './score-rules.component.html',
  styleUrls: ['./score-rules.component.css']
})
export class ScoreRulesComponent implements OnInit {

  constructor(private gamesService: GamesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

}
