import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SuffixWorksheet5RoutingModule } from './std03-suffix-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SuffixWorksheet5Component } from './std03-suffix-worksheet5.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03SuffixWorksheet5Component
    }
];

@NgModule({
    declarations: [Std03SuffixWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SuffixWorksheet5Module { }
