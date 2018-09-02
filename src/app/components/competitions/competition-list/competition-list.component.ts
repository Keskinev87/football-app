import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from '../../../services/competition.service';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  public competitions: any

  constructor(private competitionService: CompetitionsService) { }

  ngOnInit() {
    this.competitionService.getCompetitions()
      .subscribe(
        (response) => this.competitions = response.competitions,
        (error) => console.log(error)
      );
  }

}
