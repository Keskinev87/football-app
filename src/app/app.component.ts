import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from './app.reducers'
import * as AuthActions from './components/auth/auth-store/auth.actions'
import * as UsersActions from './components/users/users-store/users.actions'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    let token = localStorage.getItem('token')
    //check if there is a token in the local storage
    if (token) {
      //if token exists, set it in the auth state
      this.store.dispatch(new AuthActions.SetToken(token))
      //check if the token is valid (if valid, the request to the server will receive user as an answer. If not, the user has to login.) 
      this.store.dispatch(new UsersActions.TryGetUser())
      // this.store.dispatch(new AuthActions.CheckStatus()) - this is the old way. It did not check if the token is actually valid 
    }
      
    
  }

}

