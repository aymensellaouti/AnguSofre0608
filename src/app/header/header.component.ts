import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show = false;

  constructor(
    public authService: AuthService
  ) { }
  showNavbar() {
    this.show = !this.show;
  }
  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }

}
