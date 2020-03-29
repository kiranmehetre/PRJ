import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HelpingVerbsWorksheet7RoutingModule } from './std01-helping-verbs-worksheet7-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01HelpingVerbsWorksheet7Component } from './std01-helping-verbs-worksheet7.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01HelpingVerbsWorksheet7Component
    }
];

@NgModule({
    declarations: [Std01HelpingVerbsWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HelpingVerbsWorksheet7Module { }
