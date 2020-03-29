import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01SynonymsReferenceListRoutingModule } from './std01-synonyms-reference-list-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01SynonymsReferenceListComponent } from './std01-synonyms-reference-list.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01SynonymsReferenceListComponent
    }
];

@NgModule({
    declarations: [Std01SynonymsReferenceListComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01SynonymsReferenceListModule { }
