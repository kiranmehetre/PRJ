import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsWorksheet4RoutingModule } from './std01-gender-nouns-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsWorksheet4Component } from './std01-gender-nouns-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std01GenderNounsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01GenderNounsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01GenderNounsWorksheet4Module { }
