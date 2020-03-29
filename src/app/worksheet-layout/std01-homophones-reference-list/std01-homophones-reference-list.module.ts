import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HomophonesReferenceListRoutingModule } from './std01-homophones-reference-list-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01HomophonesReferenceListComponent } from './std01-homophones-reference-list.component';

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01HomophonesReferenceListComponent
    }
];

@NgModule({
    declarations: [Std01HomophonesReferenceListComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HomophonesReferenceListModule { }
