import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01InterrogativePronounsWorksheet2RoutingModule } from './std01-interrogative-pronouns-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01InterrogativePronounsWorksheet2Component } from './std01-interrogative-pronouns-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01InterrogativePronounsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01InterrogativePronounsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01InterrogativePronounsWorksheet2Module { }
