import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsWorksheet8RoutingModule } from './std01-synonyms-worksheet8-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsWorksheet8Component } from './std01-synonyms-worksheet8.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01SynonymsWorksheet8Component
    }
];

@NgModule({
    declarations: [Std01SynonymsWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SynonymsWorksheet8Module { }
