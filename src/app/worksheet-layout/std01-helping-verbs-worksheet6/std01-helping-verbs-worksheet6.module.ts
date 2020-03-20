import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HelpingVerbsWorksheet6RoutingModule } from './std01-helping-verbs-worksheet6-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01HelpingVerbsWorksheet6Component } from './std01-helping-verbs-worksheet6.component';

const routes: Routes = [
    {
        path: "",
        component: Std01HelpingVerbsWorksheet6Component
    }
];

@NgModule({
    declarations: [Std01HelpingVerbsWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HelpingVerbsWorksheet6Module { }
