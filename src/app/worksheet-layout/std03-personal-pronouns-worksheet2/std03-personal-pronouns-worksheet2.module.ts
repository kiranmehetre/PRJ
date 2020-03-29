import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PersonalPronounsWorksheet2RoutingModule } from './std03-personal-pronouns-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PersonalPronounsWorksheet2Component } from './std03-personal-pronouns-worksheet2.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PersonalPronounsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03PersonalPronounsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PersonalPronounsWorksheet2Module { }
