import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HelpingVerbsWorksheet5RoutingModule } from './std01-helping-verbs-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01HelpingVerbsWorksheet5Component } from './std01-helping-verbs-worksheet5.component';

const routes: Routes = [
    {
        path: "",
        component: Std01HelpingVerbsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std01HelpingVerbsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HelpingVerbsWorksheet5Module { }
