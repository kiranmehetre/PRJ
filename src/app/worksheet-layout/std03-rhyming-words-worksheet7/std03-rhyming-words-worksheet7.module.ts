import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03RhymingWordsWorksheet7RoutingModule } from './std03-rhyming-words-worksheet7-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03RhymingWordsWorksheet7Component } from './std03-rhyming-words-worksheet7.component';

const routes: Routes = [
    {
        path: "",
        component: Std03RhymingWordsWorksheet7Component
    }
];

@NgModule({
    declarations: [Std03RhymingWordsWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
expor
export class Std03RhymingWordsWorksheet7Module { }
