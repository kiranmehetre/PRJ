import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedVerbWorksheet2RoutingModule } from './std01-mixed-verb-worksheet2-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01MixedVerbWorksheet2Component } from './std01-mixed-verb-worksheet2.component';

const routes: Routes = [
    {
        path: "",
        component: Std01MixedVerbWorksheet2Component
    }
];

@NgModule({
    declarations: [Std01MixedVerbWorksheet2Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01MixedVerbWorksheet2Module { }
