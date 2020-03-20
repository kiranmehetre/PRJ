import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet3RoutingModule } from './std03-vocabulary-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet3Component } from './std03-vocabulary-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std03VocabularyWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03VocabularyWorksheet3Module { }
