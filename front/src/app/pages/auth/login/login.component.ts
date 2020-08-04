import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;

  constructor(public formbuilder: FormBuilder, private router: Router) {
    //validate form
    this.LoginForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  saveLogin() {
    if (this.LoginForm.valid) {
      localStorage.setItem('data', JSON.stringify(this.LoginForm.value));
      this.router.navigate(['/dashboard']);
    }
  }
  get username() { return this.LoginForm.get('username'); }
  get password() { return this.LoginForm.get('password'); }
}
