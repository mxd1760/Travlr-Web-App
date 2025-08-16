import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Authentication } from "../services/authentication";
import { User } from "../models/user";


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  public formError: string = '';
  submitted = false;

  credentials = {
    name: '',
    email: '',
    password: '',
  }

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) { }
  ngOnInit(): void { }

  public onLoginSubmit(): void {
    this.formError = "";
    if (!this.credentials.email || !this.credentials.password || !this.credentials.name) {
      this.formError = "all fields are required, please try again";
      this.router.navigateByUrl("@");
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    let newUser = {
      name: this.credentials.name,
      email: this.credentials.email
    } as User;

    this.authenticationService.login(newUser,
      this.credentials.password);

    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate([""]);
    } else {
      var timer = setTimeout(() => {
        if (this.authenticationService.isLoggedIn()) {
          this.router.navigate([""]);
        }
      }, 3000);
    }
  }


}
