import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('password')
  private passwd: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(mail: any): void {
    console.log(mail);
    console.log(this.passwd.nativeElement.value);
  }

}
