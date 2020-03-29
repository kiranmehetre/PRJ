import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SingularPluralNounsWorksheet9RoutingModule } from './std01-singular-plural-nouns-worksheet9-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SingularPluralNounsWorksheet9Component } from './std01-singular-plural-nouns-worksheet9.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01SingularPluralNounsWorksheet9Component
    }
];

@NgModule({
    declarations: [Std01SingularPluralNounsWorksheet9Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})


export class Std01SingularPluralNounsWorksheet9Module { }
