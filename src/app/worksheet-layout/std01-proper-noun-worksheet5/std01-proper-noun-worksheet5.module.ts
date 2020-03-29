import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ProperNounWorksheet5RoutingModule } from './std01-proper-noun-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01ProperNounWorksheet5Component } from './std01-proper-noun-worksheet5.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01ProperNounWorksheet5Component
    }
];

@NgModule({
    declarations: [Std01ProperNounWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01ProperNounWorksheet5Module { }
