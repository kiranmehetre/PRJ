import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HomophonesReferenceListRoutingModule } from './std01-homophones-reference-list-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01HomophonesReferenceListComponent } from './std01-homophones-reference-list.component';

const routes: Routes = [
    {
        path: "",
        component: Std01HomophonesReferenceListComponent
    }
];

@NgModule({
    declarations: [Std01HomophonesReferenceListComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HomophonesReferenceListModule { }
