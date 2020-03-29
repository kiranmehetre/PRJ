import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PersonalPronounsWorksheet4RoutingModule } from './std03-personal-pronouns-worksheet4-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std03PersonalPronounsWorksheet4Component } from './std03-personal-pronouns-worksheet4.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PersonalPronounsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03PersonalPronounsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PersonalPronounsWorksheet4Module { }
