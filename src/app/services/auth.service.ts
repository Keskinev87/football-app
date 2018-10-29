import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../components/models/user.model'
import { Router } from '../../../node_modules/@angular/router';
import * as jwt_decode from 'jwt-decode'

@Injectable()
export class AuthService {
    
    constructor( private httpClient: HttpClient, private router: Router) {
        
    }

    isTokenExpired(token: string) {
        if(!token) return true;
        const date = this.getTokenExpirationDate(token);
        if(date === undefined) return false;
        return !(date.valueOf() > new Date().valueOf());
    }

    getTokenExpirationDate(token: string): Date {
        console.log("here I am")
        const decoded = jwt_decode(token);
        console.log(decoded)
        if (decoded.exp === undefined) return null;

        const date = new Date(0); 
        date.setUTCSeconds(decoded.exp);
        return date;
    }
}