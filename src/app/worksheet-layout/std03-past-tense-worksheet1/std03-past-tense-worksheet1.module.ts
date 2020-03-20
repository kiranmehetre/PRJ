import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PastTenseWorksheet1RoutingModule } from './std03-past-tense-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PastTenseWorksheet1Component } from './std03-past-tense-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PastTenseWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03PastTenseWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PastTenseWorksheet1Module { }
