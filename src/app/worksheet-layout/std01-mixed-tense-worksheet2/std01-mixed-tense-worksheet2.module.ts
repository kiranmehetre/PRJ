import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedTenseWorksheet2RoutingModule } from './std01-mixed-tense-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedTenseWorksheet2Component } from './std01-mixed-tense-worksheet2.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01MixedTenseWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01MixedTenseWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01MixedTenseWorksheet2Module { }
