import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SingularPluralNounsWorksheet2RoutingModule } from './std01-singular-plural-nouns-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SingularPluralNounsWorksheet2Component } from './std01-singular-plural-nouns-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01SingularPluralNounsWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01SingularPluralNounsWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SingularPluralNounsWorksheet2Module { }
