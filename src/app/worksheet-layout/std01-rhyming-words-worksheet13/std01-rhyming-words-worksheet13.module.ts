import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet13RoutingModule } from './std01-rhyming-words-worksheet13-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet13Component } from './std01-rhyming-words-worksheet13.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet13Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet13Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01RhymingWordsWorksheet13Module { }
