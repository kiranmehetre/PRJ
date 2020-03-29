import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsReferenceListRoutingModule } from './std01-rhyming-words-reference-list-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsReferenceListComponent } from './std01-rhyming-words-reference-list.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01RhymingWordsReferenceListComponent
    }
];

@NgModule({
    declarations: [Std01RhymingWordsReferenceListComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01RhymingWordsReferenceListModule { }
