import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedTenseWorksheet3RoutingModule } from './std01-mixed-tense-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedTenseWorksheet3Component } from './std01-mixed-tense-worksheet3.component';


const routes: Routes = [
    {
        path: "",
        component: Std01MixedTenseWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01MixedTenseWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01MixedTenseWorksheet3Module { }
