import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03RhymingWordsWorksheet9RoutingModule } from './std03-rhyming-words-worksheet9-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03RhymingWordsWorksheet9Component } from './std03-rhyming-words-worksheet9.component';

const routes: Routes = [
    {
        path: "",
        component: Std03RhymingWordsWorksheet9Component
    }
];

@NgModule({
    declarations: [Std03RhymingWordsWorksheet9Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
expor

export class Std03RhymingWordsWorksheet9Module { }
