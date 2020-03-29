import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedPunctuationWorksheet3RoutingModule } from './std01-mixed-punctuation-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedPunctuationWorksheet3Component } from './std01-mixed-punctuation-worksheet3.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01MixedPunctuationWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01MixedPunctuationWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01MixedPunctuationWorksheet3Module { }
