import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-forex-provider',
  templateUrl: './register-forex-provider.component.html',

  styleUrls: ['./register-forex-provider.component.css']
})
export class RegisterForexProviderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onclick(){
      alert("Registraion Successful!!!");
      window.location.href = "./login-fx";
  }

}
