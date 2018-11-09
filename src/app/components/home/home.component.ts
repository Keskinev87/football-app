import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as fromAuth from '../auth/auth-store/auth.reducers'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onLogin() {
    this.router.navigate(['/login'])
  }

}
