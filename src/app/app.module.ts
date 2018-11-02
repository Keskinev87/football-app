import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
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
import { AppRouterModule } from './modules/app-router.module';
import { GameNameComponent } from './components/games/game-create/creating-steps/game-name/game-name.component';
import { ChooseMatchesComponent } from './components/games/game-create/creating-steps/choose-matches/choose-matches.component';
import { ScoreRulesComponent } from './components/games/game-create/creating-steps/score-rules/score-rules.component';
import { CompetitionsService } from './services/competition.service';
import { CompetitionListItemComponent } from './components/competitions/competition-list-item/competition-list-item.component';
import { CompetitionListComponent } from './components/competitions/competition-list/competition-list.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/authGuard.service';
import { DropDownDirective } from './directives/dropdown.directive';
import { AuthInterceptor } from './services/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { EffectsModule } from "@ngrx/effects"
import { AuthEffects } from "./components/auth/auth-store/auth.effects"
import { GameEffects } from './components/games/games-store/games.effect';
import { LoaderComponentComponent } from './components/shared/loader-component/loader-component.component';
import { SmallLoaderComponentComponent } from './components/shared/small-loader-component/small-loader-component.component';
import { EditGameCompetitionsComponent } from './components/games/game-create/creating-steps/edit-game-competitions/edit-game-competitions.component';
import { CompetitionsEffects } from "./components/competitions/competitions-store/competitions.effects"


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
    MatchPredictionListComponent,
    UserListItemComponent,
    UserListComponent,
    GameListItemComponent,
    GameNameComponent,
    ChooseMatchesComponent,
    ScoreRulesComponent,
    CompetitionListItemComponent,
    CompetitionListComponent,
    DropDownDirective,
    LoaderComponentComponent,
    SmallLoaderComponentComponent,
    EditGameCompetitionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, GameEffects, CompetitionsEffects])
  ],
  providers: [
    MatchesService,
    CompetitionsService, 
    AuthService, 
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
