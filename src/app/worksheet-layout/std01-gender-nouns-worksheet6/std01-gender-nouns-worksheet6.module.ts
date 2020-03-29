import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsWorksheet6RoutingModule } from './std01-gender-nouns-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsWorksheet6Component } from './std01-gender-nouns-worksheet6.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01GenderNounsWorksheet6Component
    }
];

@NgModule({
    declarations: [Std01GenderNounsWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01GenderNounsWorksheet6Module { }
