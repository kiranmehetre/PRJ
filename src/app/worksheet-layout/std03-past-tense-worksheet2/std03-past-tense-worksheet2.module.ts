import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PastTenseWorksheet2RoutingModule } from './std03-past-tense-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PastTenseWorksheet2Component } from './std03-past-tense-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PastTenseWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03PastTenseWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PastTenseWorksheet2Module { }
