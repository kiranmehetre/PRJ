import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PersonalPronounsWorksheet3RoutingModule } from './std03-personal-pronouns-worksheet3-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std03PersonalPronounsWorksheet3Component } from './std03-personal-pronouns-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PersonalPronounsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03PersonalPronounsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PersonalPronounsWorksheet3Module { }
