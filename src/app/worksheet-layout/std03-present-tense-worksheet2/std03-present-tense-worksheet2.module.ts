import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PresentTenseWorksheet2RoutingModule } from './std03-present-tense-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PresentTenseWorksheet2Component } from './std03-present-tense-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PresentTenseWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03PresentTenseWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PresentTenseWorksheet2Module { }
