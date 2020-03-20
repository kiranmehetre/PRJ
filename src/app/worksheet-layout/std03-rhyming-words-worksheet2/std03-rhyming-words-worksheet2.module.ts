import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03RhymingWordsWorksheet2RoutingModule } from './std03-rhyming-words-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03RhymingWordsWorksheet2Component } from './std03-rhyming-words-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std03RhymingWordsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03RhymingWordsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03RhymingWordsWorksheet2Module { }
