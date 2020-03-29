import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03RhymingWordsWorksheet3RoutingModule } from './std03-rhyming-words-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03RhymingWordsWorksheet3Component } from './std03-rhyming-words-worksheet3.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03RhymingWordsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03RhymingWordsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03RhymingWordsWorksheet3Module { }
