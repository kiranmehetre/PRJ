import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SemicolonColonWorksheet1RoutingModule } from './std03-semicolon-colon-worksheet1-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std03SemicolonColonWorksheet1Component } from './std03-semicolon-colon-worksheet1.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03SemicolonColonWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03SemicolonColonWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SemicolonColonWorksheet1Module { }
