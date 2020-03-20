import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PossessivePronounsWorksheet3RoutingModule } from './std01-possessive-pronouns-worksheet3-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01PossessivePronounsWorksheet3Component } from './std01-possessive-pronouns-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PossessivePronounsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01PossessivePronounsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PossessivePronounsWorksheet3Module { }
