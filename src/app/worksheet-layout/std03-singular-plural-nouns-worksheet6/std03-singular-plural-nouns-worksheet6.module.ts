import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SingularPluralNounsWorksheet6RoutingModule } from './std03-singular-plural-nouns-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SingularPluralNounsWorksheet6Component } from './std03-singular-plural-nouns-worksheet6.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SingularPluralNounsWorksheet6Component
    }
];

@NgModule({
    declarations: [Std03SingularPluralNounsWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03SingularPluralNounsWorksheet6Module { }
