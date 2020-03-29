import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SingularPluralNounsWorksheet5RoutingModule } from './std03-singular-plural-nouns-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SingularPluralNounsWorksheet5Component } from './std03-singular-plural-nouns-worksheet5.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03SingularPluralNounsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std03SingularPluralNounsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SingularPluralNounsWorksheet5Module { }
