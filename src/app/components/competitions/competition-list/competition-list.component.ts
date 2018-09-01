import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from '../../../services/competition.service';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  public competitions = []

  constructor(private competitionsService: CompetitionsService) { }

  ngOnInit() {
    this.competitions = this.competitionsService.getCompetitions();
  }

}
