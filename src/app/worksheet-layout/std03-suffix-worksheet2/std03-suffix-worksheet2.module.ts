import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SuffixWorksheet2RoutingModule } from './std03-suffix-worksheet2-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std03SuffixWorksheet2Component } from './std03-suffix-worksheet2.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03SuffixWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03SuffixWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SuffixWorksheet2Module { }
