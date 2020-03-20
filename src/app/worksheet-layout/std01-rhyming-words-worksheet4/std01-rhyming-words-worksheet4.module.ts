import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet4RoutingModule } from './std01-rhyming-words-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet4Component } from './std01-rhyming-words-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01RhymingWordsWorksheet4Module { }
