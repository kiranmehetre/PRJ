import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SingularPluralNounsWorksheet10RoutingModule } from './std01-singular-plural-nouns-worksheet10-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SingularPluralNounsWorksheet10Component } from './std01-singular-plural-nouns-worksheet10.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01SingularPluralNounsWorksheet10Component
    }
];

@NgModule({
    declarations: [Std01SingularPluralNounsWorksheet10Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})


export class Std01SingularPluralNounsWorksheet10Module { }
