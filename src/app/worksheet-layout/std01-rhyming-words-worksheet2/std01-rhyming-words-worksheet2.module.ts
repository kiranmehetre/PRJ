import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet2RoutingModule } from './std01-rhyming-words-worksheet2-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet2Component } from './std01-rhyming-words-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01RhymingWordsWorksheet2Module { }
