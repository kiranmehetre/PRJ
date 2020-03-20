import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03PrepositionsWorksheet3RoutingModule } from './std03-prepositions-worksheet3-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std03PrepositionsWorksheet3Component } from './std03-prepositions-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std03PrepositionsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03PrepositionsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03PrepositionsWorksheet3Module { }
