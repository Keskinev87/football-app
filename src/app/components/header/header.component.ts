import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducers'
import * as AuthActions from '../auth/auth-store/auth.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  authState: Observable<{isAuthenticated: boolean}>
  showMenu: boolean = false

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth')
  }

  onLogout() {
    this.store.dispatch(new AuthActions.TryLogout())
    this.toggleMenu()
  }

  toggleMenu() {
    this.showMenu = !this.showMenu
  }

}
