import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ProperNounWorksheet1RoutingModule } from './std01-proper-noun-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01ProperNounWorksheet1Component } from './std01-proper-noun-worksheet1.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01ProperNounWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01ProperNounWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01ProperNounWorksheet1Module { }
