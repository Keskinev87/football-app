import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-score-rules',
  templateUrl: './score-rules.component.html',
  styleUrls: ['./score-rules.component.css']
})
export class ScoreRulesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

}
