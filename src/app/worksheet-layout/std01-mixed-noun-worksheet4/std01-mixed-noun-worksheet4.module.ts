import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedNounWorksheet4RoutingModule } from './std01-mixed-noun-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01MixedNounWorksheet4Component } from './std01-mixed-noun-worksheet4.component';


const routes: Routes = [
    {
        path: "",
        component: Std01MixedNounWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01MixedNounWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01MixedNounWorksheet4Module { }
