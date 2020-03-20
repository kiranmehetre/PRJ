import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SubjectPredicateWorksheet2RoutingModule } from './std03-subject-predicate-worksheet2-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std03SubjectPredicateWorksheet2Component } from './std03-subject-predicate-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SubjectPredicateWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03SubjectPredicateWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SubjectPredicateWorksheet2Module { }
