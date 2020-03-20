import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsWorksheet1RoutingModule } from './std01-gender-nouns-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsWorksheet1Component } from './std01-gender-nouns-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01GenderNounsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01GenderNounsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01GenderNounsWorksheet1Module { }
