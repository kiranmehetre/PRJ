import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03QuestionMarkWorksheet2RoutingModule } from './std03-question-mark-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03QuestionMarkWorksheet2Component } from './std03-question-mark-worksheet2.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03QuestionMarkWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03QuestionMarkWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03QuestionMarkWorksheet2Module { }
