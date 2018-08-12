import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { GameCreateComponent } from './components/games/game-create/game-create.component';
import { GameListComponent } from './components/games/game-list/game-list.component';
import { GameViewComponent } from './components/games/game-view/game-view.component';
import { HeaderComponent } from './components/header/header.component';
import { MatchListItemComponent } from './components/matches/match-list-item/match-list-item.component';
import { MatchListComponent } from './components/matches/match-list/match-list.component';
import { MatchPredictionItemComponent } from './components/matches/match-prediction-item/match-prediction-item.component';
import { MatchPredictionListComponent } from './components/matches/match-prediction-list/match-prediction-list.component';
import { UserLoginComponent } from './components/auth/user-login/user-login.component';
import { UserSignupComponent } from './components/auth/user-signup/user-signup.component';
import { UserListItemComponent } from './components/users/user-list-item/user-list-item.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { GameListItemComponent } from './components/games/game-list-item/game-list-item.component';

import { MatchesService } from './services/matches.service'
import { GamesService } from './services/games.service'



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pending-matches', component: MatchPredictionListComponent},
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
  providers: [MatchesService, GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
