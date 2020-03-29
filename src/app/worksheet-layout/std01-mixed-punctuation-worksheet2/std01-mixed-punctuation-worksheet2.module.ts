import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedPunctuationWorksheet2RoutingModule } from './std01-mixed-punctuation-worksheet2-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01MixedPunctuationWorksheet2Component } from './std01-mixed-punctuation-worksheet2.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01MixedPunctuationWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01MixedPunctuationWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01MixedPunctuationWorksheet2Module { }
