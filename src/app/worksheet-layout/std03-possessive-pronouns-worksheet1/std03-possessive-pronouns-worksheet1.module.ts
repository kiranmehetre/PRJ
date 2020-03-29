import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PossessivePronounsWorksheet1RoutingModule } from './std03-possessive-pronouns-worksheet1-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std03PossessivePronounsWorksheet1Component } from './std03-possessive-pronouns-worksheet1.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PossessivePronounsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03PossessivePronounsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PossessivePronounsWorksheet1Module { }
