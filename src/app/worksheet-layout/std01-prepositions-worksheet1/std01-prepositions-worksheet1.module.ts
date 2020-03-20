import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PrepositionsWorksheet1RoutingModule } from './std01-prepositions-worksheet1-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01PrepositionsWorksheet1Component } from './std01-prepositions-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PrepositionsWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01PrepositionsWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PrepositionsWorksheet1Module { }
