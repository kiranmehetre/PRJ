import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ProperNounWorksheet4RoutingModule } from './std01-proper-noun-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01ProperNounWorksheet4Component } from './std01-proper-noun-worksheet4.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01ProperNounWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01ProperNounWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01ProperNounWorksheet4Module { }
