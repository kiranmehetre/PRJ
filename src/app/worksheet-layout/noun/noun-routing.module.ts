import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { NounComponent } from 'src/app/worksheet-layout/noun/noun.component';

const routes: Routes = [
  {
    'path': '',
    component: NounComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class NounRoutingModule { }
