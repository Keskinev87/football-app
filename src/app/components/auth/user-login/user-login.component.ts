import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { Observable } from 'rxjs';
import * as fromApp from '../../../app.reducers'
import { Store } from '@ngrx/store';
import * as AuthActions from '../auth-store/auth.actions'



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) {}
  
  signinState: Observable<{
    success: boolean,
    error: boolean,
    errorMsg: string
  }>
  

  ngOnInit() {
    this.signinState = this.store.select('auth')
  }

  onLogin(form: NgForm) {
    let user = new User(form.value.email, form.value.password)
    this.store.dispatch(new AuthActions.TrySignin(user))
    // this.authService.loginUser(user).subscribe(
    //   (response: any) => {
    //     if (response.success) {
    //       if (this.error) this.error = false //if the user made a mistake and then secceeded, we remove the error msg
    //       this.success = true //show success message
    //       this.successMsg = response.success

    //       if(response.token){
    //         this.authService.saveToken(response.token) //Check if token was sent and save it to local memory
    //         this.router.navigate(['/pending-matches'])
    //       } else {
    //         this.router.navigate(['/login'])
    //       }
          
    //     } else if (response.error) {
    //       this.error = true
    //       this.errorMsg = response.error
    //       //TODO: Make it dissapear with animation
    //     } else {
    //       this.error = true
    //       this.errorMsg = response.error
    //     }
    //   },
    //   (error) => {
    //     if (this.success==true) this.success=false
    //     this.error = true
    //     if(!error.error.error) {
    //       this.errorMsg = "No connection with the server"
    //     }
    //     else {
    //       this.errorMsg = error.error.error      //yes - this is correct. The error message from the server is double nested. At this point it was easier to fixit like this. 
    //     }
    //   }
    // )
  }

}
