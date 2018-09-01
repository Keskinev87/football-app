import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../../services/games.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-game-name',
  templateUrl: './game-name.component.html',
  styleUrls: ['./game-name.component.css']
})
export class GameNameComponent implements OnInit {

  constructor(private gamesService: GamesService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  
  }


  onSubmit(form: NgForm) {
    this.gamesService.createNewGame(form.value.name, form.value.secretCode, form.value.description)
    this.router.navigate(['/games-list'])
  }
}
