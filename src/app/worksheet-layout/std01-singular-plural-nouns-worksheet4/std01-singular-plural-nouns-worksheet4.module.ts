import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SingularPluralNounsWorksheet4RoutingModule } from './std01-singular-plural-nouns-worksheet4-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SingularPluralNounsWorksheet4Component } from './std01-singular-plural-nouns-worksheet4.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SingularPluralNounsWorksheet4Component
    }
];

@NgModule({
    declarations: [Std01SingularPluralNounsWorksheet4Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SingularPluralNounsWorksheet4Module { }
