import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-choose-competitions',
  templateUrl: './choose-competitions.component.html',
  styleUrls: ['./choose-competitions.component.css']
})
export class ChooseCompetitionsComponent implements OnInit {

  constructor(private gamesService: GamesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

  nextStep(){
    this.router.navigate([this.gamesService.navigateForward(this.route.snapshot.routeConfig.path)])
  }

  previousStep(){
    this.router.navigate([this.gamesService.navigateBackwards(this.route.snapshot.routeConfig.path)])
  }
}
