import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from '../../../services/competition.service';
import { Competition } from '../../models/competition.model'

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  public competitions: Competition[]

  constructor(private competitionService: CompetitionsService) { }

  ngOnInit() {
    this.competitionService.getCompetitions()
      .subscribe(
        (response: any) => this.competitions = response.competitions,
        (error) => console.log(error)
      );
  }

}
