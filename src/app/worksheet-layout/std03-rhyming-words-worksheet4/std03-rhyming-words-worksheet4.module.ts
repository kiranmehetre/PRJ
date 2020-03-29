import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03RhymingWordsWorksheet4RoutingModule } from './std03-rhyming-words-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03RhymingWordsWorksheet4Component } from './std03-rhyming-words-worksheet4.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03RhymingWordsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03RhymingWordsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03RhymingWordsWorksheet4Module { }
