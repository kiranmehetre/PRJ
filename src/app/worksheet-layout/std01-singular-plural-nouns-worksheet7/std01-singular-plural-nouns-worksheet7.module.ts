import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SingularPluralNounsWorksheet7RoutingModule } from './std01-singular-plural-nouns-worksheet7-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SingularPluralNounsWorksheet7Component } from './std01-singular-plural-nouns-worksheet7.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SingularPluralNounsWorksheet7Component
    }
];

@NgModule({
    declarations: [Std01SingularPluralNounsWorksheet7Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SingularPluralNounsWorksheet7Module { }
