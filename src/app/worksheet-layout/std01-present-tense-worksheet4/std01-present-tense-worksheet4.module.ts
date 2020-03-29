import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PresentTenseWorksheet4RoutingModule } from './std01-present-tense-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PresentTenseWorksheet4Component } from './std01-present-tense-worksheet4.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PresentTenseWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01PresentTenseWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PresentTenseWorksheet4Module { }
