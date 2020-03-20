import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PresentTenseWorksheet3RoutingModule } from './std03-present-tense-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PresentTenseWorksheet3Component } from './std03-present-tense-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PresentTenseWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03PresentTenseWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PresentTenseWorksheet3Module { }
