import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedTenseWorksheet1RoutingModule } from './std01-mixed-tense-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedTenseWorksheet1Component } from './std01-mixed-tense-worksheet1.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01MixedTenseWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01MixedTenseWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01MixedTenseWorksheet1Module { }
