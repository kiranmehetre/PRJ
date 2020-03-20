import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet8RoutingModule } from './std03-vocabulary-worksheet8-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet8Component } from './std03-vocabulary-worksheet8.component';

const routes: Routes = [
    {
        path: "",
        component: Std03VocabularyWorksheet8Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03VocabularyWorksheet8Module { }
