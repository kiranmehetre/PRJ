import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet9RoutingModule } from './std03-vocabulary-worksheet9-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet9Component } from './std03-vocabulary-worksheet9.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03VocabularyWorksheet9Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet9Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03VocabularyWorksheet9Module { }
