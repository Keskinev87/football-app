import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'

import { Match } from '../models/match.model';
import { MatchesService } from '../../services/matches.service';


@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'],
  providers: [MatchesService]
})
export class MatchListComponent implements OnInit {

  matches: Match[]
  private subscription: Subscription;

  constructor(private matchService: MatchesService) {}

  ngOnInit() {
    this.matches = this.matchService.getMatches();
    this.subscription = this.matchService.matchesChanged
      .subscribe(
        (matches: Match[]) => {
          this.matches = matches
        }
      )
  }

}
