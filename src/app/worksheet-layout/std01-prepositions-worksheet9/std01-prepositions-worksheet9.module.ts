import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01PrepositionsWorksheet9RoutingModule } from './std01-prepositions-worksheet9-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01PrepositionsWorksheet9Component } from './std01-prepositions-worksheet9.component';

const routes: Routes = [
    {
        path: "",
        component: Std01PrepositionsWorksheet9Component
    }
];

@NgModule({
    declarations: [Std01PrepositionsWorksheet9Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01PrepositionsWorksheet9Module { }
