import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HomophonesWorksheet3RoutingModule } from './std01-homophones-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01HomophonesWorksheet3Component } from './std01-homophones-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std01HomophonesWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01HomophonesWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01HomophonesWorksheet3Module { }
