import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03ProperNounWorksheet1RoutingModule } from './std03-proper-noun-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03ProperNounWorksheet1Component } from './std03-proper-noun-worksheet1.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03ProperNounWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03ProperNounWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03ProperNounWorksheet1Module { }
