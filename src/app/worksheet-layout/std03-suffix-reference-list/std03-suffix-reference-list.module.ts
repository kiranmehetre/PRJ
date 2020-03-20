import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SuffixReferenceListRoutingModule } from './std03-suffix-reference-list-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SuffixReferenceListComponent } from './std03-suffix-reference-list.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SuffixReferenceListComponent
    }
];

@NgModule({
    declarations: [Std03SuffixReferenceListComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std03SuffixReferenceListModule { }
