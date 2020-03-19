import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedTenseWorksheet4RoutingModule } from './std01-mixed-tense-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedTenseWorksheet4Component } from './std01-mixed-tense-worksheet4.component';


const routes: Routes = [
    {
        path: "",
        component: Std01MixedTenseWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01MixedTenseWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01MixedTenseWorksheet4Module { }
