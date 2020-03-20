import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet7RoutingModule } from './std03-vocabulary-worksheet7-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet7Component } from './std03-vocabulary-worksheet7.component';

const routes: Routes = [
    {
        path: "",
        component: Std03VocabularyWorksheet7Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03VocabularyWorksheet7Module { }
