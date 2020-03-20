import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03ProperNounWorksheet4RoutingModule } from './std03-proper-noun-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03ProperNounWorksheet4Component } from './std03-proper-noun-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std03ProperNounWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03ProperNounWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03ProperNounWorksheet4Module { }
