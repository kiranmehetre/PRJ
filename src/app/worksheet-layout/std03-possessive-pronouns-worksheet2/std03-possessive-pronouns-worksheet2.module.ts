import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PossessivePronounsWorksheet2RoutingModule } from './std03-possessive-pronouns-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PossessivePronounsWorksheet2Component } from './std03-possessive-pronouns-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PossessivePronounsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03PossessivePronounsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PossessivePronounsWorksheet2Module { }
