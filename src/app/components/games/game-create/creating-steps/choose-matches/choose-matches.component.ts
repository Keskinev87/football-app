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

  nextStep(){
    this.router.navigate([this.gamesService.navigateForward(this.route.snapshot.routeConfig.path)])
  }

  previousStep(){
    this.router.navigate([this.gamesService.navigateBackwards(this.route.snapshot.routeConfig.path)])
  }

}
