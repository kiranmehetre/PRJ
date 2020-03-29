import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsWorksheet2RoutingModule } from './std01-gender-nouns-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsWorksheet2Component } from './std01-gender-nouns-worksheet2.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01GenderNounsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01GenderNounsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01GenderNounsWorksheet2Module { }
