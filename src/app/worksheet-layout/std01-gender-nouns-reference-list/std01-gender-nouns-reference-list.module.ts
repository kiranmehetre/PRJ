import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01GenderNounsReferenceListRoutingModule } from './std01-gender-nouns-reference-list-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01GenderNounsReferenceListComponent } from './std01-gender-nouns-reference-list.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01GenderNounsReferenceListComponent
    }
];

@NgModule({
    declarations: [Std01GenderNounsReferenceListComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01GenderNounsReferenceListModule { }
