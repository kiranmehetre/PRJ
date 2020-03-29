import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03ProperNounWorksheet3RoutingModule } from './std03-proper-noun-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03ProperNounWorksheet3Component } from './std03-proper-noun-worksheet3.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03ProperNounWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03ProperNounWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03ProperNounWorksheet3Module { }
