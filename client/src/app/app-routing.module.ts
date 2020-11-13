import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OurPredictionPageComponent } from './our-prediction-page/our-prediction-page.component';
import { FxDashboardComponent } from './fx-dashboard/fx-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { RegisterForexProviderComponent } from './register-forex-provider/register-forex-provider.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { LoginForexProviderComponent } from './login-forex-provider/login-forex-provider.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';


const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent},
  { path: 'login-fx', component: LoginForexProviderComponent},
  { path: 'login-customer', component: LoginCustomerComponent},
  { path: 'register-customer', component: RegisterCustomerComponent},
  { path: 'register-fx', component: RegisterForexProviderComponent},
  { path: 'customer-dashboard', component: CustomerDashboardComponent},
  { path: 'fx-dashboard', component: FxDashboardComponent},
  { path: 'our-prediction-page', component: OurPredictionPageComponent},
  { path: 'home-page', component: HomePageComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
