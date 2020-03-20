import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SingularPluralNounsWorksheet3RoutingModule } from './std03-singular-plural-nouns-worksheet3-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SingularPluralNounsWorksheet3Component } from './std03-singular-plural-nouns-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SingularPluralNounsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03SingularPluralNounsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SingularPluralNounsWorksheet3Module { }
