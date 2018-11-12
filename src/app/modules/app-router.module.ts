import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from '.././components/home/home.component'
import { GameListComponent } from '.././components/games/game-list/game-list.component';
import { GameViewComponent } from '.././components/games/game-view/game-view.component';
import { HeaderComponent } from '.././components/header/header.component';
import { MatchListItemComponent } from '.././components/matches/match-list-item/match-list-item.component';
import { MatchListComponent } from '.././components/matches/match-list/match-list.component';
import { MatchPredictionItemComponent } from '.././components/matches/match-prediction-list/match-prediction-game/match-prediction-item/match-prediction-item.component';
import { MatchPredictionListComponent } from '.././components/matches/match-prediction-list/match-prediction-list.component';
import { UserLoginComponent } from '.././components/auth/user-login/user-login.component';
import { UserSignupComponent } from '.././components/auth/user-signup/user-signup.component';
import { UserListItemComponent } from '.././components/users/user-list-item/user-list-item.component';
import { UserListComponent } from '.././components/users/user-list/user-list.component';
import { GameListItemComponent } from '.././components/games/game-list-item/game-list-item.component';
import { GameNameComponent } from '../components/games/game-create/creating-steps/game-name/game-name.component';
import { EditGameCompetitionsComponent} from '../components/games/game-create/creating-steps/edit-game-competitions/edit-game-competitions.component'
import { ChooseMatchesComponent } from '../components/games/game-create/creating-steps/choose-matches/choose-matches.component';
import { ScoreRulesComponent } from '../components/games/game-create/creating-steps/score-rules/score-rules.component';
import { CompetitionListComponent } from '../components/competitions/competition-list/competition-list.component';
import { AuthGuard } from '../services/authGuard.service';


const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch:'full'},
    {path: 'pending-matches', component: MatchPredictionListComponent, canActivate:[AuthGuard]},
    {path: 'users-list', component: UserListComponent},
    {path: 'games', canActivate:[AuthGuard], children:[
        {path: '', component: GameListComponent, canActivate:[AuthGuard]},
        {path: 'create', children:[
            {path: 'choose-name', component: GameNameComponent},
            {path: 'competitions', component: EditGameCompetitionsComponent},
            {path: 'matches', component: ChooseMatchesComponent},
            {path: 'score-rules', component: ScoreRulesComponent}
        ]},
        {path: 'edit/:gameid', component: GameNameComponent, children:[
            {path: 'competitions', component: CompetitionListComponent},
            {path: 'matches', component: ChooseMatchesComponent},
            {path: 'score-rules', component: ScoreRulesComponent}
        ]}
    ]},
    {path: 'competitions', component: CompetitionListComponent},
    {path: 'login', component: UserLoginComponent},
    {path: 'signup', component: UserSignupComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}