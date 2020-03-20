import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PersonalPronounsWorksheet1RoutingModule } from './std01-personal-pronouns-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PersonalPronounsWorksheet1Component } from './std01-personal-pronouns-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PersonalPronounsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01PersonalPronounsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PersonalPronounsWorksheet1Module { }
