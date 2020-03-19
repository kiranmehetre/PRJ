import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsWorksheet5RoutingModule } from './std01-gender-nouns-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsWorksheet5Component } from './std01-gender-nouns-worksheet5.component';

const routes: Routes = [
    {
        path: "",
        component: Std01GenderNounsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std01GenderNounsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01GenderNounsWorksheet5Module { }
