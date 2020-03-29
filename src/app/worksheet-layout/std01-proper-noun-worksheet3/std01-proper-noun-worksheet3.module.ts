import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ProperNounWorksheet3RoutingModule } from './std01-proper-noun-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01ProperNounWorksheet3Component } from './std01-proper-noun-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01ProperNounWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01ProperNounWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01ProperNounWorksheet3Module { }
