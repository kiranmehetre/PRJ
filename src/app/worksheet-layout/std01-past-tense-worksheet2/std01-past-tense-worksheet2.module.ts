import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PastTenseWorksheet2RoutingModule } from './std01-past-tense-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PastTenseWorksheet2Component } from './std01-past-tense-worksheet2.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PastTenseWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01PastTenseWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PastTenseWorksheet2Module { }
