import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HelpingVerbsWorksheet3RoutingModule } from './std01-helping-verbs-worksheet3-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01HelpingVerbsWorksheet3Component } from './std01-helping-verbs-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01HelpingVerbsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01HelpingVerbsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HelpingVerbsWorksheet3Module { }
