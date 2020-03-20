import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SingularPluralNounsWorksheet7RoutingModule } from './std03-singular-plural-nouns-worksheet7-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SingularPluralNounsWorksheet7Component } from './std03-singular-plural-nouns-worksheet7.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SingularPluralNounsWorksheet7Component
    }
];

@NgModule({
    declarations: [Std03SingularPluralNounsWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SingularPluralNounsWorksheet7Module { }
