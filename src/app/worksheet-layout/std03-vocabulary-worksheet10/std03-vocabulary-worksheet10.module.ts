import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet10RoutingModule } from './std03-vocabulary-worksheet10-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet10Component } from './std03-vocabulary-worksheet10.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03VocabularyWorksheet10Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet10Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03VocabularyWorksheet10Module { }
