import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsWorksheet9RoutingModule } from './std01-gender-nouns-worksheet9-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsWorksheet9Component } from './std01-gender-nouns-worksheet9.component';

const routes: Routes = [
    {
        path: "",
        component: Std01GenderNounsWorksheet9Component
    }
];

@NgModule({
    declarations: [Std01GenderNounsWorksheet9Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01GenderNounsWorksheet9Module { }
