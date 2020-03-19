import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HomophonesWorksheet6RoutingModule } from './std01-homophones-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01HomophonesWorksheet6Component } from './std01-homophones-worksheet6.component';

const routes: Routes = [
    {
        path: "",
        component: Std01HomophonesWorksheet6Component
    }
];

@NgModule({
    declarations: [Std01HomophonesWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HomophonesWorksheet6Module { }
