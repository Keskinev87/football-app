import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as fromApp from '../../app.reducers'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authState: Observable<any>
  userState: Observable<any>

  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth')
    this.userState = this.store.select('users')
  }
  
 

  onNavigate(path) {
    this.router.navigate([path])
  }
 
}
