import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionsService } from '../../../../../services/competition.service';

@Component({
  selector: 'app-choose-competitions',
  templateUrl: './choose-competitions.component.html',
  styleUrls: ['./choose-competitions.component.css']
})
export class ChooseCompetitionsComponent implements OnInit {

  constructor(private gamesService: GamesService, private competitionsService: CompetitionsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.competitionsService.getCompetitions()
  }
}
