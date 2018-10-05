import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private authService: AuthService) {}
  
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
        console.log(response)
        if (response.error) {
          if (this.success==true) this.success=false
          this.error = true
          this.errorMsg = response.error
          //TODO: Make it dissapear with animation
        }
        else if (response.success) {
          if (this.error) this.error = false
          this.success = true
          this.successMsg = response.success
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
        this.errorMsg = error.error
      }
    )
  }

}
