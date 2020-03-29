import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsWorksheet3RoutingModule } from './std01-gender-nouns-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsWorksheet3Component } from './std01-gender-nouns-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01GenderNounsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01GenderNounsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01GenderNounsWorksheet3Module { }
