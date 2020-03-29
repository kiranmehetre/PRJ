import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01QuestionMarkWorksheet1RoutingModule } from './std01-question-mark-worksheet1-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01QuestionMarkWorksheet1Component } from './std01-question-mark-worksheet1.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01QuestionMarkWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01QuestionMarkWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01QuestionMarkWorksheet1Module { }
