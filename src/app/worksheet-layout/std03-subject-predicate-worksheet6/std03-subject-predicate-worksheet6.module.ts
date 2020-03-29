import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SubjectPredicateWorksheet6RoutingModule } from './std03-subject-predicate-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SubjectPredicateWorksheet6Component } from './std03-subject-predicate-worksheet6.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03SubjectPredicateWorksheet6Component
    }
];

@NgModule({
    declarations: [Std03SubjectPredicateWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03SubjectPredicateWorksheet6Module { }
