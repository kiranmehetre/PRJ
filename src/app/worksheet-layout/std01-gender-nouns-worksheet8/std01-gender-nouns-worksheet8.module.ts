import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsWorksheet8RoutingModule } from './std01-gender-nouns-worksheet8-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsWorksheet8Component } from './std01-gender-nouns-worksheet8.component';

const routes: Routes = [
    {
        path: "",
        component: Std01GenderNounsWorksheet8Component
    }
];

@NgModule({
    declarations: [Std01GenderNounsWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01GenderNounsWorksheet8Module { }
