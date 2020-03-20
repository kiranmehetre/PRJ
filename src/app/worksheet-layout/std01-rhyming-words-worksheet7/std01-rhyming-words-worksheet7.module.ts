import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet7RoutingModule } from './std01-rhyming-words-worksheet7-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet7Component } from './std01-rhyming-words-worksheet7.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet7Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01RhymingWordsWorksheet7Module { }
