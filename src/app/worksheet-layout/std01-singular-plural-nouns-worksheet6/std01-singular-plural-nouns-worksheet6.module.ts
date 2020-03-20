import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SingularPluralNounsWorksheet6RoutingModule } from './std01-singular-plural-nouns-worksheet6-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SingularPluralNounsWorksheet6Component } from './std01-singular-plural-nouns-worksheet6.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SingularPluralNounsWorksheet6Component
    }
];

@NgModule({
    declarations: [Std01SingularPluralNounsWorksheet6Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SingularPluralNounsWorksheet6Module { }
