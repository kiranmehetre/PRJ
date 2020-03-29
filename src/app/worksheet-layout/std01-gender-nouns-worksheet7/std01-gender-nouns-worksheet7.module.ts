import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsWorksheet7RoutingModule } from './std01-gender-nouns-worksheet7-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsWorksheet7Component } from './std01-gender-nouns-worksheet7.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01GenderNounsWorksheet7Component
    }
];

@NgModule({
    declarations: [Std01GenderNounsWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01GenderNounsWorksheet7Module { }
