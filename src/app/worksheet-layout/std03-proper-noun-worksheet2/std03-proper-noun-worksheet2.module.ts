import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03ProperNounWorksheet2RoutingModule } from './std03-proper-noun-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03ProperNounWorksheet2Component } from './std03-proper-noun-worksheet2.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03ProperNounWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03ProperNounWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03ProperNounWorksheet2Module { }
