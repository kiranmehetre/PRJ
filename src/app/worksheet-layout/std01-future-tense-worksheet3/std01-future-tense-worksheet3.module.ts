import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01FutureTenseWorksheet3RoutingModule } from './std01-future-tense-worksheet3-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01FutureTenseWorksheet3Component } from './std01-future-tense-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01FutureTenseWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01FutureTenseWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01FutureTenseWorksheet3Module { }
