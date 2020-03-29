import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedNounWorksheet5RoutingModule } from './std01-mixed-noun-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedNounWorksheet5Component } from './std01-mixed-noun-worksheet5.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01MixedNounWorksheet5Component
    }
];

@NgModule({
    declarations: [Std01MixedNounWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01MixedNounWorksheet5Module { }
