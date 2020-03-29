import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01QuestionMarkWorksheet3RoutingModule } from './std01-question-mark-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01QuestionMarkWorksheet3Component } from './std01-question-mark-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01QuestionMarkWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01QuestionMarkWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01QuestionMarkWorksheet3Module { }
