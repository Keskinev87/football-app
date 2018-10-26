import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducers'
import * as fromAuth from '../auth/auth-store/auth.reducers'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  authState: Observable<fromAuth.State>
  menuClicked: boolean = false

  constructor(private authService: AuthService, private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth')
  }

  onLogout() {
    this.authService.logout()
  }

  openMenu() {
    this.menuClicked = !this.menuClicked
  }

}
