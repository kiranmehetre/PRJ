import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SingularPluralNounsWorksheet2RoutingModule } from './std03-singular-plural-nouns-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SingularPluralNounsWorksheet2Component } from './std03-singular-plural-nouns-worksheet2.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03SingularPluralNounsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std03SingularPluralNounsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SingularPluralNounsWorksheet2Module { }
