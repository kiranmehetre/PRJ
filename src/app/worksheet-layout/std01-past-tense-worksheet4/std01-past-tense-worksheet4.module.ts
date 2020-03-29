import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PastTenseWorksheet4RoutingModule } from './std01-past-tense-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PastTenseWorksheet4Component } from './std01-past-tense-worksheet4.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PastTenseWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01PastTenseWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PastTenseWorksheet4Module { }
