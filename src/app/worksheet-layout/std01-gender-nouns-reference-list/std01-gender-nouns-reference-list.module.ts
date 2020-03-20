import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsReferenceListRoutingModule } from './std01-gender-nouns-reference-list-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsReferenceListComponent } from './std01-gender-nouns-reference-list.component';

const routes: Routes = [
    {
        path: "",
        component: Std01GenderNounsReferenceListComponent
    }
];

@NgModule({
    declarations: [Std01GenderNounsReferenceListComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01GenderNounsReferenceListModule { }
