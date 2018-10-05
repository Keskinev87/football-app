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
    let user = new User(form.value.password, form.value.email)
    this.authService.loginUser(user).subscribe(
      (response: any) => {
        console.log(response)
        // if (response.Error) {
        //   this.error = true
        //   this.errorMsg = response.Error
        //   //TODO: Make it dissapear with animation
        // }
        // else if (response.Success) {
        //   this.success = true
        //   this.successMsg = response.Success
        // }
        // else {
        //   this.error = true
        //   this.errorMsg = 'Could not create user. Please contact support!'
        // }
      },
      (error) => console.log(error)
    )
  }

}
