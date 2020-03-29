import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PossessivePronounsWorksheet1RoutingModule } from './std01-possessive-pronouns-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PossessivePronounsWorksheet1Component } from './std01-possessive-pronouns-worksheet1.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01PossessivePronounsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01PossessivePronounsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PossessivePronounsWorksheet1Module { }
