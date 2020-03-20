import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PresentTenseWorksheet3RoutingModule } from './std01-present-tense-worksheet3-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01PresentTenseWorksheet3Component } from './std01-present-tense-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PresentTenseWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01PresentTenseWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PresentTenseWorksheet3Module { }
