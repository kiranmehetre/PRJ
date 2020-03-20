import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SingularPluralNounsWorksheet5RoutingModule } from './std01-singular-plural-nouns-worksheet5-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SingularPluralNounsWorksheet5Component } from './std01-singular-plural-nouns-worksheet5.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SingularPluralNounsWorksheet5Component
    }
];

@NgModule({
    declarations: [Std01SingularPluralNounsWorksheet5Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})


export class Std01SingularPluralNounsWorksheet5Module { }
