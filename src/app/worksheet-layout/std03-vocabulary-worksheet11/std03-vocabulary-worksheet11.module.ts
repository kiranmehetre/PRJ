import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet11RoutingModule } from './std03-vocabulary-worksheet11-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet11Component } from './std03-vocabulary-worksheet11.component';

const routes: Routes = [
    {
        path: "",
        component: Std03VocabularyWorksheet11Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet11Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03VocabularyWorksheet11Module { }
