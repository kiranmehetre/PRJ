import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Std01DemostrativePronounWorksheet1RoutingModule } from "./std01-demostrative-pronoun-worksheet1-routing.module";

import { RouterModule, Routes } from "@angular/router";
import { Std01DemostrativePronounWorksheet1Component } from "./std01-demostrative-pronoun-worksheet1.component";

import { ClassOneAuth } from "../Auth/ClassOneAuth"
const routes: Routes = [
    { path: "",canActivate: [ClassOneAuth],
        component: Std01DemostrativePronounWorksheet1Component
    }
];

@NgModule({
    declarations: [Std01DemostrativePronounWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01DemostrativePronounWorksheet1Module {}
