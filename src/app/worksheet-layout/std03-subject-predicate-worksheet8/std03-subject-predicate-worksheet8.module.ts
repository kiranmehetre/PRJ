import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SubjectPredicateWorksheet8RoutingModule } from './std03-subject-predicate-worksheet8-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std03SubjectPredicateWorksheet8Component } from './std03-subject-predicate-worksheet8.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SubjectPredicateWorksheet8Component
    }
];

@NgModule({
    declarations: [Std03SubjectPredicateWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03SubjectPredicateWorksheet8Module { }
