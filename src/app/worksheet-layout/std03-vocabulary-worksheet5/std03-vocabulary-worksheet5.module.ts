import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet5RoutingModule } from './std03-vocabulary-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet5Component } from './std03-vocabulary-worksheet5.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03VocabularyWorksheet5Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03VocabularyWorksheet5Module { }
