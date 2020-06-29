import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AccountComponent } from "./account/account.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { HardwareComponent } from "./hardware/hardware.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SoftwareComponent } from "./software/software.component";

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'hardware', component: HardwareComponent },
  { path: 'software', component: SoftwareComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
