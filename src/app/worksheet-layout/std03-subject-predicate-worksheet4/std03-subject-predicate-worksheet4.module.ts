import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SubjectPredicateWorksheet4RoutingModule } from './std03-subject-predicate-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SubjectPredicateWorksheet4Component } from './std03-subject-predicate-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SubjectPredicateWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03SubjectPredicateWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SubjectPredicateWorksheet4Module { }
