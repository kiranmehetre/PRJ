import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet6RoutingModule } from './std01-rhyming-words-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet6Component } from './std01-rhyming-words-worksheet6.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet6Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01RhymingWordsWorksheet6Module { }
