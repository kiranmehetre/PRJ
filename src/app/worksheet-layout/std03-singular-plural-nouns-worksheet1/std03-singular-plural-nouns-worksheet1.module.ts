import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SingularPluralNounsWorksheet1RoutingModule } from './std03-singular-plural-nouns-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SingularPluralNounsWorksheet1Component } from './std03-singular-plural-nouns-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SingularPluralNounsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03SingularPluralNounsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03SingularPluralNounsWorksheet1Module { }
