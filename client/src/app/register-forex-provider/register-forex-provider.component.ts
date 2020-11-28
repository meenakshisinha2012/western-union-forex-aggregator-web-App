import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-register-forex-provider',
  templateUrl: './register-forex-provider.component.html',

  styleUrls: ['./register-forex-provider.component.css']
})
export class RegisterForexProviderComponent implements OnInit {
  registerFxData = {}
  constructor(private _auth:AuthServiceService, private _router: Router) { }

  ngOnInit() {
  }

  registerFxProvider() {

    console.log('Gota click' );
    this._auth.registerFxProvider(this.registerFxData).subscribe(res => {

      console.log('Res', res);
      localStorage.setItem('token', res.token);
      alert("Registration Successfull");
      this._router.navigate(['/fx-dashboard'])
    }),


      err =>{
        
        console.log(err);
      }
  }
}
