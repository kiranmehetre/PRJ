import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HomophonesWorksheet8RoutingModule } from './std01-homophones-worksheet8-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01HomophonesWorksheet8Component } from './std01-homophones-worksheet8.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01HomophonesWorksheet8Component
    }
];

@NgModule({
    declarations: [Std01HomophonesWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HomophonesWorksheet8Module { }
