import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-choose-matches',
  templateUrl: './choose-matches.component.html',
  styleUrls: ['./choose-matches.component.css']
})
export class ChooseMatchesComponent implements OnInit {

  constructor(private gamesService: GamesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

}
