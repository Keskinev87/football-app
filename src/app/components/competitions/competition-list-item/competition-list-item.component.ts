import { Component, OnInit, Input } from '@angular/core';
import { Competition } from '../../models/competition.model'

@Component({
  selector: 'app-competition-list-item',
  templateUrl: './competition-list-item.component.html',
  styleUrls: ['./competition-list-item.component.css']
})
export class CompetitionListItemComponent implements OnInit {

  @Input() competition: Competition

  constructor() { }

  ngOnInit() {
  }

}
