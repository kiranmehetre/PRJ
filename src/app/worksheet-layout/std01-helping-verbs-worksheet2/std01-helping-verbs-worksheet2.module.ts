import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HelpingVerbsWorksheet2RoutingModule } from './std01-helping-verbs-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01HelpingVerbsWorksheet2Component } from './std01-helping-verbs-worksheet2.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01HelpingVerbsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01HelpingVerbsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HelpingVerbsWorksheet2Module { }
