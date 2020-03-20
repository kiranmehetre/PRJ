import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HelpingVerbsWorksheet4RoutingModule } from './std01-helping-verbs-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01HelpingVerbsWorksheet4Component } from './std01-helping-verbs-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std01HelpingVerbsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01HelpingVerbsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01HelpingVerbsWorksheet4Module { }
