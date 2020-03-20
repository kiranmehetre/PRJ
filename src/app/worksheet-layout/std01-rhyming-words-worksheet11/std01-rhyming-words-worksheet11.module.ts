import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet11RoutingModule } from './std01-rhyming-words-worksheet11-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet11Component } from './std01-rhyming-words-worksheet11.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet11Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet11Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01RhymingWordsWorksheet11Module { }
