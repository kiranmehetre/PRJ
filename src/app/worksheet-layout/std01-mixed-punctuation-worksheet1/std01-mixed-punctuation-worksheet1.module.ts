import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedPunctuationWorksheet1RoutingModule } from './std01-mixed-punctuation-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedPunctuationWorksheet1Component } from './std01-mixed-punctuation-worksheet1.component';


const routes: Routes = [
    {
        path: "",
        component: Std01MixedPunctuationWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01MixedPunctuationWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01MixedPunctuationWorksheet1Module { }
