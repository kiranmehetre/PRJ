import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrefixWorksheet5RoutingModule } from './std03-prefix-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrefixWorksheet5Component } from './std03-prefix-worksheet5.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrefixWorksheet5Component
    }
];

@NgModule({
    declarations: [Std03PrefixWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrefixWorksheet5Module { }
