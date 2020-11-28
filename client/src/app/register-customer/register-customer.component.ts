import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  registerCustomerData = {}
  constructor(private _auth: AuthServiceService, private _router: Router) { }

  ngOnInit() {
  }
  registerCustomer() {

    console.log('Gota click' );
    this._auth.registerCustomer(this.registerCustomerData).subscribe(res => {

      console.log('Res', res);
      localStorage.setItem('token', res.token);
      alert("Registration Successfull");
      this._router.navigate(['/customer-dashboard'])
    }),
      err => console.log(err);

  }

  onclick() {
    alert("Registraion Successful!!!");
    window.location.href = "./login-customer";
  }

}
