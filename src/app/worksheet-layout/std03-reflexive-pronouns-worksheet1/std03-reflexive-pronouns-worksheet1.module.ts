import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03ReflexivePronounsWorksheet1RoutingModule } from './std03-reflexive-pronouns-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03ReflexivePronounsWorksheet1Component } from './std03-reflexive-pronouns-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std03ReflexivePronounsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03ReflexivePronounsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03ReflexivePronounsWorksheet1Module { }
