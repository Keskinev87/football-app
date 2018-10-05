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
    let user = new User(form.value.fullName, form.value.password, form.value.email)
    this.authService.signupUser(user).subscribe(
      (response: any) => {
        if (response.Error) {
          this.error = true
          this.errorMsg = response.Error
          //TODO: Make it dissapear with animation
        }
        else if (response.Success) {
          this.success = true
          this.successMsg = response.Success
        }
        else {
          this.error = true
          this.errorMsg = 'Could not create user. Please contact support!'
        }
      },
      (error) => console.log(error)
    )
  }

}
