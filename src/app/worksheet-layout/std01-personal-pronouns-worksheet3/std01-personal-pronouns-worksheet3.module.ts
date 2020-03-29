import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PersonalPronounsWorksheet3RoutingModule } from './std01-personal-pronouns-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PersonalPronounsWorksheet3Component } from './std01-personal-pronouns-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PersonalPronounsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01PersonalPronounsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PersonalPronounsWorksheet3Module { }
