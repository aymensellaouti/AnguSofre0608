import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorCredentials = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(user) {
      this.authService.login(user).subscribe(
        (response) => {
          localStorage.setItem('token', response.id);
          this.router.navigate(['']);
        },
        (error) => {
          this.errorCredentials = true;
          console.log(error);
        }
      );
  }

}
