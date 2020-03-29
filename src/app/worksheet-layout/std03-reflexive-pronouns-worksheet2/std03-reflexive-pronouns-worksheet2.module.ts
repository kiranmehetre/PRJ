import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03ReflexivePronounsWorksheet2RoutingModule } from './std03-reflexive-pronouns-worksheet2-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std03ReflexivePronounsWorksheet2Component } from './std03-reflexive-pronouns-worksheet2.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03ReflexivePronounsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03ReflexivePronounsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03ReflexivePronounsWorksheet2Module { }
