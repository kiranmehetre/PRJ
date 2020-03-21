import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class Std03RhymingWordsWorksheet7Module { }
