import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet12RoutingModule } from './std01-rhyming-words-worksheet12-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet12Component } from './std01-rhyming-words-worksheet12.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet12Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet12Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01RhymingWordsWorksheet12Module { }
