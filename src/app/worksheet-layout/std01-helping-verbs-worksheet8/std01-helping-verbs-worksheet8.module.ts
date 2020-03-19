import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HelpingVerbsWorksheet8RoutingModule } from './std01-helping-verbs-worksheet8-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01HelpingVerbsWorksheet8Component } from './std01-helping-verbs-worksheet8.component';

const routes: Routes = [
    {
        path: "",
        component: Std01HelpingVerbsWorksheet8Component
    }
];

@NgModule({
    declarations: [Std01HelpingVerbsWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HelpingVerbsWorksheet8Module { }
