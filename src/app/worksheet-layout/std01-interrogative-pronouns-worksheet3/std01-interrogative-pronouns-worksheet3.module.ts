import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01InterrogativePronounsWorksheet3RoutingModule } from './std01-interrogative-pronouns-worksheet3-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01InterrogativePronounsWorksheet3Component } from './std01-interrogative-pronouns-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01InterrogativePronounsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01InterrogativePronounsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01InterrogativePronounsWorksheet3Module { }
