import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet10RoutingModule } from './std01-rhyming-words-worksheet10-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet10Component } from './std01-rhyming-words-worksheet10.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet10Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet10Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01RhymingWordsWorksheet10Module { }
