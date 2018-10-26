import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-choose-matches',
  templateUrl: './choose-matches.component.html',
  styleUrls: ['./choose-matches.component.css']
})
export class ChooseMatchesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

}
