import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  constructor(private http:HttpClient) {
  

   }
   public doSignUp(user){
     //TO DO change latter
     user.role = 'member'
     return this.http.post("http://localhost:8080/createUser", user,{responseType:'text' as 'json'});
   }
  }
