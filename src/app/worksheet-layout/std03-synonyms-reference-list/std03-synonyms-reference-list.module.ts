import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsReferenceListRoutingModule } from './std03-synonyms-reference-list-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsReferenceListComponent } from './std03-synonyms-reference-list.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SynonymsReferenceListComponent
    }
];

@NgModule({
    declarations: [Std03SynonymsReferenceListComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SynonymsReferenceListModule { }
