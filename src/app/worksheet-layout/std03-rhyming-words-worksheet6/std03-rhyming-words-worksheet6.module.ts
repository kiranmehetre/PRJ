import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03RhymingWordsWorksheet6RoutingModule } from './std03-rhyming-words-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03RhymingWordsWorksheet6Component } from './std03-rhyming-words-worksheet6.component';

const routes: Routes = [
    {
        path: "",
        component: Std03RhymingWordsWorksheet6Component
    }
];

@NgModule({
    declarations: [Std03RhymingWordsWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03RhymingWordsWorksheet6Module { }
