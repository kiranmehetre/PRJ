import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HomophonesWorksheet7RoutingModule } from './std01-homophones-worksheet7-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01HomophonesWorksheet7Component } from './std01-homophones-worksheet7.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01HomophonesWorksheet7Component
    }
];

@NgModule({
    declarations: [Std01HomophonesWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01HomophonesWorksheet7Module { }
