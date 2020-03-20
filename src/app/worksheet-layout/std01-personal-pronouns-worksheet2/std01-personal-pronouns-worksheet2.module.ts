import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PersonalPronounsWorksheet2RoutingModule } from './std01-personal-pronouns-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01PersonalPronounsWorksheet2Component } from './std01-personal-pronouns-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PersonalPronounsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01PersonalPronounsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PersonalPronounsWorksheet2Module { }
