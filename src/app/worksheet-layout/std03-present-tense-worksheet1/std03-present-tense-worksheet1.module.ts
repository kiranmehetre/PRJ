import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PresentTenseWorksheet1RoutingModule } from './std03-present-tense-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PresentTenseWorksheet1Component } from './std03-present-tense-worksheet1.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PresentTenseWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03PresentTenseWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PresentTenseWorksheet1Module { }
