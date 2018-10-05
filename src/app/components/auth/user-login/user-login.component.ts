import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model'
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService) {}
  
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
        console.log(response)
        if (response.error) {
          this.error = true
          this.errorMsg = response.error
          //TODO: Make it dissapear with animation
        }
        else if (response.success) {
          if (this.error) this.error = false
          this.success = true
          this.successMsg = response.success
          this.authService.saveToken(response.token)
          console.log("tuk sam")
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
