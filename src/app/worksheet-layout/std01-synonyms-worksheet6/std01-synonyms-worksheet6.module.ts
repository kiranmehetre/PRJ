import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsWorksheet6RoutingModule } from './std01-synonyms-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsWorksheet6Component } from './std01-synonyms-worksheet6.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01SynonymsWorksheet6Component
    }
];

@NgModule({
    declarations: [Std01SynonymsWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SynonymsWorksheet6Module { }
