import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedNounWorksheet2RoutingModule } from './std01-mixed-noun-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedNounWorksheet2Component } from './std01-mixed-noun-worksheet2.component';


import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01MixedNounWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01MixedNounWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01MixedNounWorksheet2Module { }
