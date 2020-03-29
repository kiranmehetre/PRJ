import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrefixWorksheet1RoutingModule } from './std03-prefix-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrefixWorksheet1Component } from './std03-prefix-worksheet1.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrefixWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03PrefixWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrefixWorksheet1Module { }
