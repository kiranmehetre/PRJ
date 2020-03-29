import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedVerbWorksheet1RoutingModule } from './std01-mixed-verb-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedVerbWorksheet1Component } from './std01-mixed-verb-worksheet1.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01MixedVerbWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01MixedVerbWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01MixedVerbWorksheet1Module { }
