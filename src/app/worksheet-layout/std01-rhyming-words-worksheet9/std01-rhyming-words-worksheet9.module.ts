import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet9RoutingModule } from './std01-rhyming-words-worksheet9-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet9Component } from './std01-rhyming-words-worksheet9.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet9Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet9Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01RhymingWordsWorksheet9Module { }
