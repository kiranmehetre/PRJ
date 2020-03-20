import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PersonalPronounsWorksheet1RoutingModule } from './std03-personal-pronouns-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PersonalPronounsWorksheet1Component } from './std03-personal-pronouns-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PersonalPronounsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03PersonalPronounsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PersonalPronounsWorksheet1Module { }
