import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrefixWorksheet3RoutingModule } from './std03-prefix-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrefixWorksheet3Component } from './std03-prefix-worksheet3.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrefixWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03PrefixWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrefixWorksheet3Module { }
