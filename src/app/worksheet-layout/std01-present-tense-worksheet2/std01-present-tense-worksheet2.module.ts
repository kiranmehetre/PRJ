import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from "@angular/router";
import { Std01PresentTenseWorksheet2Component } from './std01-present-tense-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PresentTenseWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01PresentTenseWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PresentTenseWorksheet2Module { }
