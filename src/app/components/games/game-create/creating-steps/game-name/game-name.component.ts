import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../../../services/games.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-game-name',
  templateUrl: './game-name.component.html',
  styleUrls: ['./game-name.component.css']
})
export class GameNameComponent implements OnInit {

  gameOptions: Array<Object> = [
    {
      option: 'Standard',
      description: 'Description 1'
    },
    {
      option: 'Detailed',
      description: 'Description 2'
    },
    {
      option: 'Dynamic',
      description: 'Description 3'
    }
  ]

  constructor(private gamesService: GamesService, private router:Router, private authService: AuthService) { }

  ngOnInit() {
  
  }


  onSubmit(form: NgForm) {
    //create game
    let game = {
      name: form.value.name,
      type: form.value.type,
      secretCode: form.value.secretCode,
      description: form.value.description
    }
    //TODO: make authentication with interceptors
    let token = this.authService.getToken()
    if(token){
      this.gamesService.createNewGame(game, token).subscribe((response) => {
        console.log(response)
        this.router.navigate(['/competitions'])
      }, (error) =>{
        console.log(error)
      })
      
    }
    else {
      this.router.navigate(['/login'])
    }
    
  }
}
