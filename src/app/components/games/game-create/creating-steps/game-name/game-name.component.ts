import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../../services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-name',
  templateUrl: './game-name.component.html',
  styleUrls: ['./game-name.component.css']
})
export class GameNameComponent implements OnInit {

  constructor(private gamesService: GamesService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  
  }

  nextStep(){
    this.router.navigate([this.gamesService.navigateForward(this.route.snapshot.routeConfig.path)])
  }
}
