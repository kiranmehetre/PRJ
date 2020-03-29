import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedNounWorksheet3RoutingModule } from './std01-mixed-noun-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedNounWorksheet3Component } from './std01-mixed-noun-worksheet3.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01MixedNounWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01MixedNounWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01MixedNounWorksheet3Module { }
