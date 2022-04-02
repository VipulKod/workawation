import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';
import { HttpClient } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
