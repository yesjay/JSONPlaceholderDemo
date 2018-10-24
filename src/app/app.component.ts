import { Component, OnInit } from '@angular/core';
import { AuthService, CookieService } from './shared/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  token;
  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.token = this.cookieService.get('token');
  }

  logOut() {
    this.authService.logout().subscribe(() => {
      this.cookieService.remove('token');
      window.location.reload();
    });
  }
}
