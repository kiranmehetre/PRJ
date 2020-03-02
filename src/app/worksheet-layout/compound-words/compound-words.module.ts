import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundWordsRoutingModule } from './compound-words-routing.module';
import { CompoundWordsComponent } from 'src/app/worksheet-layout/compound-words/compound-words.component';


@NgModule({
  declarations: [CompoundWordsComponent],
  imports: [
    CommonModule,
    CompoundWordsRoutingModule
  ]
})
export class CompoundWordsModule { }
