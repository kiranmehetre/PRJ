import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03QuestionMarkWorksheet1RoutingModule } from './std03-question-mark-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03QuestionMarkWorksheet1Component } from './std03-question-mark-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std03QuestionMarkWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03QuestionMarkWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03QuestionMarkWorksheet1Module { }
