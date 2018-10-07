import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}
  
  success: boolean = false
  error: boolean = false
  successMsg: String = ''
  errorMsg: String = ''
  

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    let user = new User(form.value.email, form.value.password)
    this.authService.loginUser(user).subscribe(
      (response: any) => {
        if (response.error) {
          this.error = true
          this.errorMsg = response.error
          //TODO: Make it dissapear with animation
        }
        else if (response.success) {
          if (this.error) this.error = false //if the user made a mistake and then secceeded, we remove the error msg
          this.success = true //show success message
          this.successMsg = response.success
          this.authService.saveToken(response.token) //save the token to local memory
          this.router.navigate(['/pending-matches'])
        }
        else {
          this.error = true
          this.errorMsg = response.error
        }
      },
      (error) => {
        this.error = true
        this.errorMsg = error.error
      }
    )
  }

}
