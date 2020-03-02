import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NounRoutingModule } from './noun-routing.module';
import { NounComponent } from 'src/app/worksheet-layout/noun/noun.component';


@NgModule({
  declarations: [NounComponent],
  imports: [
    CommonModule,
    NounRoutingModule
  ]
})
export class NounModule { }
