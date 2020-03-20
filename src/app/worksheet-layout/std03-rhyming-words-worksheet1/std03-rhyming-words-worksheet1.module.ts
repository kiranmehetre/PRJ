import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03RhymingWordsWorksheet1RoutingModule } from './std03-rhyming-words-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03RhymingWordsWorksheet1Component } from './std03-rhyming-words-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std03RhymingWordsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03RhymingWordsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03RhymingWordsWorksheet1Module { }
