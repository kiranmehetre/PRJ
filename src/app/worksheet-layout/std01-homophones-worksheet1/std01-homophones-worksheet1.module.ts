import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HomophonesWorksheet1RoutingModule } from './std01-homophones-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01HomophonesWorksheet1Component } from './std01-homophones-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01HomophonesWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01HomophonesWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01HomophonesWorksheet1Module { }
