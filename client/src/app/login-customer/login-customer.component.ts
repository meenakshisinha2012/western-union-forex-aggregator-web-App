import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  loginCustomerData = {};

  constructor(private _auth: AuthServiceService, private _router: Router) { }

  ngOnInit() {
  }

  loginCustomer() {
    this._auth.loginCustomer(this.loginCustomerData).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.token)
      alert('Login Successfull');
      this._router.navigate(['/customer-dashboard'])
    }
    )
  }

}
