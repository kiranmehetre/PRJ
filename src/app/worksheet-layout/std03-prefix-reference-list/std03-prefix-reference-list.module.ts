import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrefixReferenceListRoutingModule } from './std03-prefix-reference-list-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03PrefixReferenceListComponent } from './std03-prefix-reference-list.component';

import {  ClassThreeAuth} from "../Auth/ClassThreeAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassThreeAuth],
        component: Std03PrefixReferenceListComponent
    }
];

@NgModule({
    declarations: [Std03PrefixReferenceListComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrefixReferenceListModule { }
