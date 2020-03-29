import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SingularPluralNounsWorksheet8RoutingModule } from './std03-singular-plural-nouns-worksheet8-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SingularPluralNounsWorksheet8Component } from './std03-singular-plural-nouns-worksheet8.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03SingularPluralNounsWorksheet8Component
    }
];

@NgModule({
    declarations: [Std03SingularPluralNounsWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03SingularPluralNounsWorksheet8Module { }
