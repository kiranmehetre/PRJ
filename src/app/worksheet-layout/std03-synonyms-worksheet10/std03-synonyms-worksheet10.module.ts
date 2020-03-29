import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsWorksheet10RoutingModule } from './std03-synonyms-worksheet10-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsWorksheet10Component } from './std03-synonyms-worksheet10.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03SynonymsWorksheet10Component
    }
];

@NgModule({
    declarations: [Std03SynonymsWorksheet10Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SynonymsWorksheet10Module { }
