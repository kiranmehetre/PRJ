import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SingularPluralNounsWorksheet3RoutingModule } from './std01-singular-plural-nouns-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SingularPluralNounsWorksheet3Component } from './std01-singular-plural-nouns-worksheet3.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01SingularPluralNounsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01SingularPluralNounsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SingularPluralNounsWorksheet3Module { }
