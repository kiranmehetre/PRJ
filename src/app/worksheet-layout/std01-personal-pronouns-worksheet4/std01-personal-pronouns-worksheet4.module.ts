import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PersonalPronounsWorksheet4RoutingModule } from './std01-personal-pronouns-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PersonalPronounsWorksheet4Component } from './std01-personal-pronouns-worksheet4.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PersonalPronounsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01PersonalPronounsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PersonalPronounsWorksheet4Module { }
