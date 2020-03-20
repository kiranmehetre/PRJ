import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrefixWorksheet4RoutingModule } from './std03-prefix-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrefixWorksheet4Component } from './std03-prefix-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PrefixWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03PrefixWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03PrefixWorksheet4Module { }
