import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorksheetFrontendComponent } from 'src/app/worksheet-frontend/worksheet-frontend.component';
import { SignupComponent } from 'src/app/worksheet-frontend/signup/signup.component';
import { MainComponent } from 'src/app/worksheet-frontend/main/main.component';
import { DashboardComponent } from 'src/app/worksheet-frontend/dashboard/dashboard.component';
import { ChangePasswordComponent } from 'src/app/worksheet-frontend/change-password/change-password.component';
import { TopicComponent } from 'src/app/worksheet-frontend/topic/topic.component';
import { SubtopicComponent } from 'src/app/worksheet-frontend/subtopic/subtopic.component';
import { LoginComponent } from 'src/app/worksheet-frontend/login/login.component';
import { UpdateDetailsComponent } from 'src/app/worksheet-frontend/update-details/update-details.component';
import { MainAuth } from './mainAuth';

const routes: Routes = [
  {
    path: '',
    component: WorksheetFrontendComponent,
    children: [
      { path: '', canActivate: [MainAuth], component: MainComponent },
      { path: 'home', canActivate: [MainAuth], component: MainComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', canActivate: [MainAuth], component: DashboardComponent },
      { path: 'dashboard/:grade', canActivate: [MainAuth], component: DashboardComponent },
      { path: 'change-password', canActivate: [MainAuth], component: ChangePasswordComponent },
      { path: 'topic/:id', canActivate: [MainAuth], component: TopicComponent },
      { path: 'subtopic/:id/:subtopic_id', canActivate: [MainAuth], component: SubtopicComponent },
      { path: 'update-details', canActivate: [MainAuth], component: UpdateDetailsComponent }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WorksheetFrontendRoutingModule { }
