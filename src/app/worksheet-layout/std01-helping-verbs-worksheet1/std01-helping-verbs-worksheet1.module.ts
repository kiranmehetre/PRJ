import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HelpingVerbsWorksheet1RoutingModule } from './std01-helping-verbs-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01HelpingVerbsWorksheet1Component } from './std01-helping-verbs-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01HelpingVerbsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01HelpingVerbsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HelpingVerbsWorksheet1Module { }
