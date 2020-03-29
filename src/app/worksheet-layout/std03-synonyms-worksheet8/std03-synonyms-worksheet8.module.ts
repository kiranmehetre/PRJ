import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsWorksheet8RoutingModule } from './std03-synonyms-worksheet8-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsWorksheet8Component } from './std03-synonyms-worksheet8.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03SynonymsWorksheet8Component
    }
];

@NgModule({
    declarations: [Std03SynonymsWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SynonymsWorksheet8Module { }
