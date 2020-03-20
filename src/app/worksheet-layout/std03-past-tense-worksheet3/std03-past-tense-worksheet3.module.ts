import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PastTenseWorksheet3RoutingModule } from './std03-past-tense-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PastTenseWorksheet3Component } from './std03-past-tense-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PastTenseWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03PastTenseWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PastTenseWorksheet3Module { }
