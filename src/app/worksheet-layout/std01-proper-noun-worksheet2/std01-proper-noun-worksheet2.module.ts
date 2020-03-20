import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01ProperNounWorksheet2RoutingModule } from './std01-proper-noun-worksheet2-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01ProperNounWorksheet2Component } from './std01-proper-noun-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01ProperNounWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01ProperNounWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01ProperNounWorksheet2Module { }
