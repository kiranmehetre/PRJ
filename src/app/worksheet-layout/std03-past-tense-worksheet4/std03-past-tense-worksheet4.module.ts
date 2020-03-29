import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PastTenseWorksheet4RoutingModule } from './std03-past-tense-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PastTenseWorksheet4Component } from './std03-past-tense-worksheet4.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PastTenseWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03PastTenseWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03PastTenseWorksheet4Module { }
