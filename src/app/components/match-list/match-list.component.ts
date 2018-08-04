import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matches = [{id:1, leagueName:'Champions league', stage:'perliminary', dateStart:'2018-08-05', dateEnd: '2018-08-05', homeTeam:'Barcelona', awayTeam:'Real Madrid', homeTeamResult:null,
  awayTeamResult: null, scorer: null}, {id:2, leagueName:'Champions league', stage:'perliminary', dateStart:'2018-08-05', dateEnd: '2018-08-05', homeTeam:'Juventus', awayTeam:'Bayern Munich', homeTeamResult:null,
  awayTeamResult: null, scorer: null}]
  constructor() { }

  ngOnInit() {
  }

}
