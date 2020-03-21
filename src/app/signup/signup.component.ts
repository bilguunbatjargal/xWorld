import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserSignupService} from '../user-signup.service';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  message: any;
  myForm;

  constructor(private service: UserSignupService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', Validators.email),
      password: new FormControl(''),
    });
  }

  public signUp() {
    const response = this.service.doSignUp(this.myForm.value);
    response.subscribe((data) => this.message = data);
  }

}
