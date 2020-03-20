import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrefixWorksheet2RoutingModule } from './std03-prefix-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrefixWorksheet2Component } from './std03-prefix-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PrefixWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03PrefixWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrefixWorksheet2Module { }
