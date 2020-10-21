import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: UserModel = null;

  @ViewChild('password')
  private passwd: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('USER'));
  }

  onLogin(mail: any): void {
    console.log(mail);
    console.log(this.passwd.nativeElement.value);
    //appel serveur

    this.user = { login: mail };
    sessionStorage.setItem('USER', JSON.stringify(this.user));
  }

  onLogout(): void {
    sessionStorage.removeItem('USER');
    this.user = null;
  }

}
