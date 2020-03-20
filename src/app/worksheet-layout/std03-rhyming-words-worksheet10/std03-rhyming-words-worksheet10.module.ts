import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03RhymingWordsWorksheet10RoutingModule } from './std03-rhyming-words-worksheet10-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03RhymingWordsWorksheet10Component } from './std03-rhyming-words-worksheet10.component';

const routes: Routes = [
    {
        path: "",
        component: Std03RhymingWordsWorksheet10Component
    }
];

@NgModule({
    declarations: [Std03RhymingWordsWorksheet10Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03RhymingWordsWorksheet10Module { }
