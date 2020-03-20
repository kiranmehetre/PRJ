import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SubjectPredicateWorksheet7RoutingModule } from './std03-subject-predicate-worksheet7-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SubjectPredicateWorksheet7Component } from './std03-subject-predicate-worksheet7.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SubjectPredicateWorksheet7Component
    }
];

@NgModule({
    declarations: [Std03SubjectPredicateWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SubjectPredicateWorksheet7Module { }
