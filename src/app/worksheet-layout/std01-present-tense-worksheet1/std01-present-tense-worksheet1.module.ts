import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PresentTenseWorksheet1RoutingModule } from './std01-present-tense-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PresentTenseWorksheet1Component } from './std01-present-tense-worksheet1.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PresentTenseWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01PresentTenseWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PresentTenseWorksheet1Module { }
