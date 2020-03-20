import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet1RoutingModule } from './std01-rhyming-words-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet1Component } from './std01-rhyming-words-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01RhymingWordsWorksheet1Module { }
