import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HomophonesWorksheet5RoutingModule } from './std01-homophones-worksheet5-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01HomophonesWorksheet5Component } from './std01-homophones-worksheet5.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01HomophonesWorksheet5Component
    }
];

@NgModule({
    declarations: [Std01HomophonesWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01HomophonesWorksheet5Module { }
