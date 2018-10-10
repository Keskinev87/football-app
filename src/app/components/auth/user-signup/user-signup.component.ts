import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}
  
  success: boolean = false
  error: boolean = false
  successMsg: String = ''
  errorMsg: String = ''
  

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    let user = new User(form.value.email, form.value.password, form.value.fullName)
    this.authService.signupUser(user).subscribe(
      (response: any) => {
        if (response.error) {
          if (this.success==true) this.success=false
          this.error = true
          this.errorMsg = response.error
          //TODO: Make it dissapear with animation
        }
        else if (response.success) {
          if (this.error) this.error = false //if the user made an error and then succeeded, we should make the error message dissapear
          this.success = true // show success message
          this.successMsg = response.success
          this.router.navigate(['/login'])
        }
        else {
          if (this.success==true) this.success=false
          this.error = true
          this.errorMsg = response.error
        }
      },
      (error) => {
        if (this.success==true) this.success=false
        this.error = true
        if(!error.error.error) {
          this.errorMsg = "No connection with the server"
        }
        else {
          this.errorMsg = error.error.error      //yes - this is correct. The error message from the server is double nested. At this point it was easier to fixit like this. 
        }
        
      }
    )
  }

}
