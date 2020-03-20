import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet12RoutingModule } from './std03-vocabulary-worksheet12-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet12Component } from './std03-vocabulary-worksheet12.component';

const routes: Routes = [
    {
        path: "",
        component: Std03VocabularyWorksheet12Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet12Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03VocabularyWorksheet12Module { }
