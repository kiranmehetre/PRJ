import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SingularPluralNounsWorksheet8RoutingModule } from './std01-singular-plural-nouns-worksheet8-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SingularPluralNounsWorksheet8Component } from './std01-singular-plural-nouns-worksheet8.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01SingularPluralNounsWorksheet8Component
    }
];

@NgModule({
    declarations: [Std01SingularPluralNounsWorksheet8Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SingularPluralNounsWorksheet8Module { }
