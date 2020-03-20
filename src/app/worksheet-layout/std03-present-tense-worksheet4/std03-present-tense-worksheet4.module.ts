import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PresentTenseWorksheet4RoutingModule } from './std03-present-tense-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PresentTenseWorksheet4Component } from './std03-present-tense-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PresentTenseWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03PresentTenseWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PresentTenseWorksheet4Module { }
