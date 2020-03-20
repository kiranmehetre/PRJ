import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsWorksheet10RoutingModule } from './std01-gender-nouns-worksheet10-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsWorksheet10Component } from './std01-gender-nouns-worksheet10.component';

const routes: Routes = [
    {
        path: "",
        component: Std01GenderNounsWorksheet10Component
    }
];

@NgModule({
    declarations: [Std01GenderNounsWorksheet10Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01GenderNounsWorksheet10Module { }
