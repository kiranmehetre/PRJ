import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HomophonesWorksheet4RoutingModule } from './std01-homophones-worksheet4-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01HomophonesWorksheet4Component } from './std01-homophones-worksheet4.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01HomophonesWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01HomophonesWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01HomophonesWorksheet4Module { }
