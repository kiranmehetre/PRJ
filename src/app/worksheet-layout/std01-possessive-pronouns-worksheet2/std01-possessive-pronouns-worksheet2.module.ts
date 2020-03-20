import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PossessivePronounsWorksheet2RoutingModule } from './std01-possessive-pronouns-worksheet2-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01PossessivePronounsWorksheet2Component } from './std01-possessive-pronouns-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PossessivePronounsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01PossessivePronounsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PossessivePronounsWorksheet2Module { }
