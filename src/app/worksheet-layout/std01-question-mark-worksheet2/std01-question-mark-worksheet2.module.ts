import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01QuestionMarkWorksheet2RoutingModule } from './std01-question-mark-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01QuestionMarkWorksheet2Component } from './std01-question-mark-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01QuestionMarkWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01QuestionMarkWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01QuestionMarkWorksheet2Module { }
