import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SubjectPredicateWorksheet3RoutingModule } from './std03-subject-predicate-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SubjectPredicateWorksheet3Component } from './std03-subject-predicate-worksheet3.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03SubjectPredicateWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03SubjectPredicateWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SubjectPredicateWorksheet3Module { }
