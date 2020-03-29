import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PersonalPronounsWorksheet5RoutingModule } from './std01-personal-pronouns-worksheet5-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01PersonalPronounsWorksheet5Component } from './std01-personal-pronouns-worksheet5.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PersonalPronounsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std01PersonalPronounsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PersonalPronounsWorksheet5Module { }
