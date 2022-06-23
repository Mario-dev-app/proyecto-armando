import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any = {
    usuario: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginData.usuario.trim() === 'admin' && this.loginData.password.trim() === '123456'){
      this.router.navigateByUrl('/inicio');
    }
  }

}
