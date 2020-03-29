import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet1RoutingModule } from './std01-rhyming-words-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet1Component } from './std01-rhyming-words-worksheet1.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01RhymingWordsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01RhymingWordsWorksheet1Module { }
