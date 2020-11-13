import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginForexProviderComponent } from './login-forex-provider/login-forex-provider.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterForexProviderComponent } from './register-forex-provider/register-forex-provider.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { FxDashboardComponent } from './fx-dashboard/fx-dashboard.component';
import { OurPredictionPageComponent } from './our-prediction-page/our-prediction-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginCustomerComponent,
    LoginForexProviderComponent,
    RegisterCustomerComponent,
    RegisterForexProviderComponent,
    CustomerDashboardComponent,
    FxDashboardComponent,
    OurPredictionPageComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
