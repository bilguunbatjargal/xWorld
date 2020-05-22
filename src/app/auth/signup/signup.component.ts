import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  faFacebook: any;
  faInstagram: any;
  faYoutube: any;
  message: any;
  myForm;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });

    this.faFacebook = faFacebook;
    this.faInstagram = faInstagram;
    this.faYoutube = faYoutube;

  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPass').value;
    return pass === confirmPass ? null : { notSame: true }     
}


  public signUp() {
    const response = this.authService.register(this.myForm.value);
    console.log(response);
    
    response.subscribe((data) => this.message = data);
    // this.router.navigateByUrl('/home');

  }
  

}
