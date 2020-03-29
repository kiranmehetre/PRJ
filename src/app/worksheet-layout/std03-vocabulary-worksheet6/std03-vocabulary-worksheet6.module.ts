import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet6RoutingModule } from './std03-vocabulary-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet6Component } from './std03-vocabulary-worksheet6.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03VocabularyWorksheet6Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03VocabularyWorksheet6Module { }
