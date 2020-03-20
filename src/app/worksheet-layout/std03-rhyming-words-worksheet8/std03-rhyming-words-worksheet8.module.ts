import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03RhymingWordsWorksheet8RoutingModule } from './std03-rhyming-words-worksheet8-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03RhymingWordsWorksheet8Component } from './std03-rhyming-words-worksheet8.component';

const routes: Routes = [
    {
        path: "",
        component: Std03RhymingWordsWorksheet8Component
    }
];

@NgModule({
    declarations: [Std03RhymingWordsWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03RhymingWordsWorksheet8Module { }
