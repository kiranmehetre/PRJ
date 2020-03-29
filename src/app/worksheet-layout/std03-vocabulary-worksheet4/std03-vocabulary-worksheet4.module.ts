import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03VocabularyWorksheet4RoutingModule } from './std03-vocabulary-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03VocabularyWorksheet4Component } from './std03-vocabulary-worksheet4.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03VocabularyWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03VocabularyWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03VocabularyWorksheet4Module { }
