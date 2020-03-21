import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { Std03RhymingWordsWorksheet5Component } from './std03-rhyming-words-worksheet5.component';

const routes: Routes = [
    {
        path: "",
        component: Std03RhymingWordsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std03RhymingWordsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03RhymingWordsWorksheet5Module { }
