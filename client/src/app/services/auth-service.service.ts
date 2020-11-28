import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private _api = "http://localhost:3000";

  private _registerCustomerUrl = this._api + "/customer/signup";
  private _registerFxProviderUrl = this._api + "/fx-provider/signup";
  private _loginCustomerUrl = this._api + "/customer/login";
  private _loginFxProviderUrl = this._api + "/fx-provider/login";

  constructor(private http: HttpClient, private _router: Router) { }
  // Customer Auth
  registerCustomer(customer) {
    return this.http.post<any>(this._registerCustomerUrl, customer);
  }


  loginCustomer(customer) {
    return this.http.post<any>(this._loginCustomerUrl, customer);
  }

  logoutCustomer() {
    localStorage.removeItem('token');
    this._router.navigate(['/home-page']);
  }

  // Fx- Provider Auth
  registerFxProvider(fxProvider) {
    return this.http.post<any>(this._registerFxProviderUrl, fxProvider);
  }

  loginFxProvider(fxProvider) {
    return this.http.post<any>(this._loginFxProviderUrl, fxProvider)
  }

  logoutFxProvider() {
    localStorage.removeItem('token');
    this._router.navigate(['/home-page']);
  }

  // logged in check
  isloggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
