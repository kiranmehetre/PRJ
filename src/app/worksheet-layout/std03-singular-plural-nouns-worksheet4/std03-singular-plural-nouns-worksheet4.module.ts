import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SingularPluralNounsWorksheet4RoutingModule } from './std03-singular-plural-nouns-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SingularPluralNounsWorksheet4Component } from './std03-singular-plural-nouns-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SingularPluralNounsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std03SingularPluralNounsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SingularPluralNounsWorksheet4Module { }
