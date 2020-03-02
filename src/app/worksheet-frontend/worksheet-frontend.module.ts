import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksheetFrontendRoutingModule } from './worksheet-frontend-routing.module';
import { WorksheetFrontendComponent } from 'src/app/worksheet-frontend/worksheet-frontend.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TopicComponent } from './topic/topic.component';
import { SubtopicComponent } from './subtopic/subtopic.component';
import { LoginComponent } from './login/login.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

@NgModule({
  declarations: [WorksheetFrontendComponent, SignupComponent, MainComponent, DashboardComponent, ChangePasswordComponent, TopicComponent, SubtopicComponent, LoginComponent, UpdateDetailsComponent],
  imports: [
    CommonModule,
    WorksheetFrontendRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WorksheetFrontendModule { }
