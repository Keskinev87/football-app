import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { GameCreateComponent } from './components/game-create/game-create.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameViewComponent } from './components/game-view/game-view.component';
import { HeaderComponent } from './components/header/header.component';
import { LeagueViewComponent } from './components/league-view/league-view.component';
import { MatchListItemComponent } from './components/match-list-item/match-list-item.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchPredictionItemComponent } from './components/match-prediction-item/match-prediction-item.component';
import { MatchPredictionListComponent } from './components/match-prediction-list/match-prediction-list.component';
import { UserLoginComponent } from './components/auth/user-login/user-login.component';
import { UserSignupComponent } from './components/auth/user-signup/user-signup.component';
import { UserListItemComponent } from './components/users/user-list-item/user-list-item.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { GameListItemComponent } from './components/game-list-item/game-list-item.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'games-list', component: GameListComponent},
  {path: 'users-list', component: UserListComponent},
  {path: 'game-create', component: GameCreateComponent},
  {path: 'users', component: UserListComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'signup', component: UserSignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchListItemComponent,
    MatchListComponent,
    MatchPredictionItemComponent,
    LeagueViewComponent,
    HeaderComponent,
    GameViewComponent,
    GameListComponent,
    UserLoginComponent,
    UserSignupComponent,
    GameCreateComponent,
    MatchPredictionListComponent,
    UserListItemComponent,
    UserListComponent,
    GameListItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
