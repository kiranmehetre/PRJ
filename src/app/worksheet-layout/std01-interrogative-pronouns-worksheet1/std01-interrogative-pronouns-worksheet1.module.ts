import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";
import { Std01InterrogativePronounsWorksheet1Component } from './std01-interrogative-pronouns-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01InterrogativePronounsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01InterrogativePronounsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01InterrogativePronounsWorksheet1Module { }
