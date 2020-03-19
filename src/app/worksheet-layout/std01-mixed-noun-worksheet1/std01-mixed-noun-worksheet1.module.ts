import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01MixedNounWorksheet1RoutingModule } from './std01-mixed-noun-worksheet1-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01MixedNounWorksheet1Component } from './std01-mixed-noun-worksheet1.component';


const routes: Routes = [
    {
        path: "",
        component: Std01MixedNounWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01MixedNounWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01MixedNounWorksheet1Module { }
