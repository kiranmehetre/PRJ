import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,    
    FormsModule,RouterModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
