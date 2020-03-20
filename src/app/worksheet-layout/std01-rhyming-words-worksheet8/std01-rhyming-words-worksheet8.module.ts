import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet8RoutingModule } from './std01-rhyming-words-worksheet8-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet8Component } from './std01-rhyming-words-worksheet8.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet8Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01RhymingWordsWorksheet8Module { }
