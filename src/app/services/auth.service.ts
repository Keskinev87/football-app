import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../components/models/user.model'
import { Router } from '../../../node_modules/@angular/router';

@Injectable()
export class AuthService {
    
    constructor( private httpClient: HttpClient, private router: Router) {
        
    }

    signupUser(user: User ) {
        return this.httpClient.post('http://localhost:3000/user/register', user, {observe:'body'})

        // const req = new HttpRequest<any>('POST', 'http://localhost:3000/user/register', user)
        // return this.httpClient.request(req)
    }

    loginUser(user: User) {
        return this.httpClient.post('http://localhost:3000/user/login', user, {observe:'body'})
    }

    saveToken(token: string) {
        localStorage.setItem('token', token)
    }

    getToken() {
        let token:string = localStorage.getItem('token')
        return token
    }

    isAuthenticated() {
        if (this.getToken() != null) return true
        else return false
    }

    logout() {
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
    }
}