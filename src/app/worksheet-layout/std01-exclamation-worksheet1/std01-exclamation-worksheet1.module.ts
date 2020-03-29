import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ExclamationWorksheet1RoutingModule } from './std01-exclamation-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01ExclamationWorksheet1Component } from './std01-exclamation-worksheet1.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01ExclamationWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01ExclamationWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01ExclamationWorksheet1Module { }
