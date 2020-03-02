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


const routes: Routes = [
  {
    path: '',
    component: WorksheetFrontendComponent,
    children:[
      { path: '', component: MainComponent },
      { path: 'home', component: MainComponent },
      { path: 'signup', component: SignupComponent},
      { path: 'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/:grade', component: DashboardComponent },
      { path: 'change-password', component: ChangePasswordComponent},
      { path: 'topic/:id', component: TopicComponent},
      { path: 'subtopic/:id/:subtopic_id', component: SubtopicComponent},
      { path: 'update-details', component: UpdateDetailsComponent}
    ]
  }
];    


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class WorksheetFrontendRoutingModule { }
