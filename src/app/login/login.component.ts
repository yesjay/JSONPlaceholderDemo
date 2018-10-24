import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService, CookieService } from '../shared/service';
import { Login } from '../shared/model/login.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: Login;
  formData: FormGroup;
  item: Observable<any[]>;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      account: new FormControl(''),
      password: new FormControl(''),
    })
  }

  onSubmit() {
    this.model = this.formData.value;
    this.authService.login(this.model).subscribe(res => {
      this.cookieService.set('token', res);
      window.location.reload();
    })
  }
}
