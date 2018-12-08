import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'

import { Match } from '../../models/match.model';
import { MatchesService } from '../../../services/matches.service';


@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matches: Match[]
  private subscription: Subscription;

  constructor(private matchService: MatchesService) {}

  ngOnInit() {
  
  }

}
