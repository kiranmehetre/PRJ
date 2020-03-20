import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet2RoutingModule } from './std03-vocabulary-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet2Component } from './std03-vocabulary-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std03VocabularyWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03VocabularyWorksheet2Module { }
