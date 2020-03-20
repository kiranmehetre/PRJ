import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet5RoutingModule } from './std01-rhyming-words-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet5Component } from './std01-rhyming-words-worksheet5.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01RhymingWordsWorksheet5Module { }
