import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03QuotationMarksWorksheet1RoutingModule } from './std03-quotation-marks-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03QuotationMarksWorksheet1Component } from './std03-quotation-marks-worksheet1.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03QuotationMarksWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03QuotationMarksWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03QuotationMarksWorksheet1Module { }
