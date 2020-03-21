import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorksheetLayoutComponent } from 'src/app/worksheet-layout/worksheet-layout.component';

const routes: Routes = [
  {
    path: '',
    component: WorksheetLayoutComponent,
    children:[
      { path: '', component: WorksheetLayoutComponent},
      // { path: 'noun', component: NounComponent},
      // { path: 'std01/adjective/worksheet1', component: Std01AdjectiveWorksheet1Component},
       { path: 'std01/adjective/worksheet1', loadChildren: () => import('./std01-adjective-worksheet1/std01-adjective-worksheet1.module').then(m => m.Std01AdjectiveWorksheet1Module)},
       // { path: 'std01/adjective/worksheet2', component: Std01AdjectiveWorksheet2Component},
       { path: 'std01/adjective/worksheet2', loadChildren: () => import('./std01-adjective-worksheet2/std01-adjective-worksheet2.module').then(m => m.Std01AdjectiveWorksheet2Module)},
      // { path: 'std01/adjective/worksheet3', component: Std01AdjectiveWorksheet3Component},
      { path: 'std01/adjective/worksheet3', loadChildren: () => import('./std01-adjective-worksheet3/std01-adjective-worksheet3.module').then(m => m.Std01AdjectiveWorksheet3Module)},
      // { path: '5, component: Std01AdjectiveWorksheet4Component},
      { path: 'std01/adjective/worksheet4', loadChildren: () => import('./std01-adjective-worksheet4/std01-adjective-worksheet4.module').then(m => m.Std01AdjectiveWorksheet4Module)},
      // { path: 'std01/adjective/worksheet5', component: Std01AdjectiveWorksheet5Component},
      { path: 'std01/adjective/worksheet5', loadChildren: () => import('./std01-adjective-worksheet5/std01-adjective-worksheet5.module').then(m => m.Std01AdjectiveWorksheet5Module)},

      // { path: 'std01/action-verb/worksheet1', component: Std01ActionVerbWorksheet1Component},
      // { path: 'std01/action-verb/worksheet2', component: Std01ActionVerbWorksheet2Component},
      // { path: 'std01/action-verb/worksheet3', component: Std01ActionVerbWorksheet3Component},
      // { path: 'std01/action-verb/worksheet5', component: Std01ActionVerbWorksheet5Component},
      // { path: 'std01/action-verb/worksheet4', component: Std01ActionVerbWorksheet4Component},

      { path: 'std01/antonyms/worksheet7', loadChildren: () => import('./std01-antonyms-worksheet7/std01-antonyms-worksheet7.module').then(m => m.Std01AntonymsWorksheet7Module)},
      // { path: 'std01/antonyms/worksheet7', component: Std01AntonymsWorksheet7Component},
      { path: 'std01/antonyms/worksheet8', loadChildren: () => import('./std01-antonyms-worksheet8/std01-antonyms-worksheet8.module').then(m => m.Std01AntonymsWorksheet8Module)},
      // { path: 'std01/antonyms/worksheet8', component: Std01AntonymsWorksheet8Component},
      { path: 'std01/antonyms/worksheet9', loadChildren: () => import('./std01-antonyms-worksheet9/std01-antonyms-worksheet9.module').then(m => m.Std01AntonymsWorksheet9Module)},
      // { path: 'std01/antonyms/worksheet9', component: Std01AntonymsWorksheet9Component},
      { path: 'std01/antonyms/worksheet10', loadChildren: () => import('./std01-antonyms-worksheet10/std01-antonyms-worksheet10.module').then(m => m.Std01AntonymsWorksheet10Module)},
      // { path: 'std01/antonyms/worksheet10', component: Std01AntonymsWorksheet10Component},

      { path: 'std01/articles/worksheet1', loadChildren: () => import('./std01-articles-worksheet1/std01-articles-worksheet1.module').then(m => m.Std01ArticlesWorksheet1Module)},
      // { path: 'std01/articles/worksheet1', component: Std01ArticlesWorksheet1Component},
      { path: 'std01/articles/worksheet2', loadChildren: () => import('./std01-articles-worksheet2/std01-articles-worksheet2.module').then(m => m.Std01ArticlesWorksheet2Module)},
      // { path: 'std01/articles/worksheet2', component: Std01ArticlesWorksheet2Component},
      { path: 'std01/articles/worksheet3', loadChildren: () => import('./std01-articles-worksheet3/std01-articles-worksheet3.module').then(m => m.Std01ArticlesWorksheet3Module)},
      // { path: 'std01/articles/worksheet3', component: Std01ArticlesWorksheet3Component},
      { path: 'std01/articles/worksheet4', loadChildren: () => import('./std01-articles-worksheet4/std01-articles-worksheet4.module').then(m => m.Std01ArticlesWorksheet4Module)},
      // { path: 'std01/articles/worksheet4', component: Std01ArticlesWorksheet4Component},
      { path: 'std01/articles/worksheet5', loadChildren: () => import('./std01-articles-worksheet5/std01-articles-worksheet5.module').then(m => m.Std01ArticlesWorksheet5Module)},
      // { path: 'std01/articles/worksheet5', component: Std01ArticlesWorksheet5Component},
      { path: 'std01/articles/worksheet6', loadChildren: () => import('./std01-articles-worksheet6/std01-articles-worksheet6.module').then(m => m.Std01ArticlesWorksheet6Module)},
      // { path: 'std01/articles/worksheet6', component: Std01ArticlesWorksheet6Component},
      { path: 'std01/articles/worksheet7', loadChildren: () => import('./std01-articles-worksheet7/std01-articles-worksheet7.module').then(m => m.Std01ArticlesWorksheet7Module)},
      // { path: 'std01/articles/worksheet7', component: Std01ArticlesWorksheet7Component},
      { path: 'std01/articles/worksheet8', loadChildren: () => import('./std01-articles-worksheet8/std01-articles-worksheet8.module').then(m => m.Std01ArticlesWorksheet8Module)},
      // { path: 'std01/articles/worksheet8', component: Std01ArticlesWorksheet8Component},
      { path: 'std01/articles/worksheet9', loadChildren: () => import('./std01-articles-worksheet9/std01-articles-worksheet9.module').then(m => m.Std01ArticlesWorksheet9Module)},
      // { path: 'std01/articles/worksheet9', component: Std01ArticlesWorksheet9Component},
      { path: 'std01/articles/worksheet10', loadChildren: () => import('./std01-articles-worksheet10/std01-articles-worksheet10.module').then(m => m.Std01ArticlesWorksheet10Module)},
      // { path: 'std01/articles/worksheet10', component: Std01ArticlesWorksheet10Component},

      { path: 'std01/compound-word/worksheet1', loadChildren: () => import('./std01-compound-word-worksheet1/std01-compound-word-worksheet1.module').then(m => m.Std01CompoundWordWorksheet1Module)},
      // { path: 'std01/compound-word/worksheet1', component: Std01CompoundWordWorksheet1Component},
      { path: 'std01/compound-word/worksheet2', loadChildren: () => import('./std01-compound-word-worksheet2/std01-compound-word-worksheet2.module').then(m => m.Std01CompoundWordWorksheet2Module)},
      // { path: 'std01/compound-word/worksheet2', component: Std01CompoundWordWorksheet2Component},
      { path: 'std01/compound-word/worksheet3', loadChildren: () => import('./std01-compound-word-worksheet3/std01-compound-word-worksheet3.module').then(m => m.Std01CompoundWordWorksheet3Module)},
      // { path: 'std01/compound-word/worksheet3', component: Std01CompoundWordWorksheet3Component},
      { path: 'std01/compound-word/worksheet4', loadChildren: () => import('./std01-compound-word-worksheet4/std01-compound-word-worksheet4.module').then(m => m.Std01CompoundWordWorksheet4Module)},
      // { path: 'std01/compound-word/worksheet4', component: Std01CompoundWordWorksheet4Component},
      { path: 'std01/compound-word/worksheet5', loadChildren: () => import('./std01-compound-word-worksheet5/std01-compound-word-worksheet5.module').then(m => m.Std01CompoundWordWorksheet5Module)},
      // { path: 'std01/compound-word/worksheet5', component: Std01CompoundWordWorksheet5Component},
      { path: 'std01/compound-word/worksheet6', loadChildren: () => import('./std01-compound-word-worksheet6/std01-compound-word-worksheet6.module').then(m => m.Std01CompoundWordWorksheet6Module)},
      // { path: 'std01/compound-word/worksheet6', component: Std01CompoundWordWorksheet6Component},
      { path: 'std01/compound-word/worksheet7', loadChildren: () => import('./std01-compound-word-worksheet7/std01-compound-word-worksheet7.module').then(m => m.Std01CompoundWordWorksheet7Module)},
      // { path: 'std01/compound-word/worksheet7', component: Std01CompoundWordWorksheet7Component},
      { path: 'std01/compound-word/worksheet8', loadChildren: () => import('./std01-compound-word-worksheet8/std01-compound-word-worksheet8.module').then(m => m.Std01CompoundWordWorksheet8Module)},
      // { path: 'std01/compound-word/worksheet8', component: Std01CompoundWordWorksheet8Component},
      { path: 'std01/compound-word/worksheet9', loadChildren: () => import('./std01-compound-word-worksheet9/std01-compound-word-worksheet9.module').then(m => m.Std01CompoundWordWorksheet9Module)},
      // { path: 'std01/compound-word/worksheet9', component: Std01CompoundWordWorksheet9Component},
      { path: 'std01/compound-word/worksheet10', loadChildren: () => import('./std01-compound-words-worksheet10/std01-compound-words-worksheet10.module').then(m => m.Std01CompoundWordsWorksheet10Module)},
      // { path: 'std01/compound-word/worksheet10', component: Std01CompoundWordsWorksheet10Component},


      { path: 'std01/homophones/worksheet1', loadChildren: () => import('./std01-homophones-worksheet1/std01-homophones-worksheet1.module').then(m => m.Std01HomophonesWorksheet1Module)},
      // { path: 'std01/homophones/worksheet1', component: Std01HomophonesWorksheet1Component},
      { path: 'std01/homophones/worksheet2', loadChildren: () => import('./std01-homophones-worksheet2/std01-homophones-worksheet2.module').then(m => m.Std01HomophonesWorksheet2Module)},
      // { path: 'std01/homophones/worksheet2', component: Std01HomophonesWorksheet2Component},
      { path: 'std01/homophones/worksheet3', loadChildren: () => import('./std01-homophones-worksheet3/std01-homophones-worksheet3.module').then(m => m.Std01HomophonesWorksheet3Module)},
      // { path: 'std01/homophones/worksheet3', component: Std01HomophonesWorksheet3Component},
      { path: 'std01/homophones/worksheet4', loadChildren: () => import('./std01-homophones-worksheet4/std01-homophones-worksheet4.module').then(m => m.Std01HomophonesWorksheet4Module)},
      // { path: 'std01/homophones/worksheet4', component: Std01HomophonesWorksheet4Component},
      { path: 'std01/homophones/worksheet5', loadChildren: () => import('./std01-homophones-worksheet5/std01-homophones-worksheet5.module').then(m => m.Std01HomophonesWorksheet5Module)},
      // { path: 'std01/homophones/worksheet5', component: Std01HomophonesWorksheet5Component},
      { path: 'std01/homophones/worksheet6', loadChildren: () => import('./std01-homophones-worksheet6/std01-homophones-worksheet6.module').then(m => m.Std01HomophonesWorksheet6Module)},
      // { path: 'std01/homophones/worksheet6', component: Std01HomophonesWorksheet6Component},
      { path: 'std01/homophones/worksheet7', loadChildren: () => import('./std01-homophones-worksheet7/std01-homophones-worksheet7.module').then(m => m.Std01HomophonesWorksheet7Module)},
      // { path: 'std01/homophones/worksheet7', component: Std01HomophonesWorksheet7Component},
      { path: 'std01/homophones/worksheet8', loadChildren: () => import('./std01-homophones-worksheet8/std01-homophones-worksheet8.module').then(m => m.Std01HomophonesWorksheet8Module)},
      // { path: 'std01/homophones/worksheet8', component: Std01HomophonesWorksheet8Component},

      { path: 'std01/adjective/worksheet10', loadChildren: () => import('./std01-adjective-worksheet10/std01-adjective-worksheet10.module').then(m => m.Std01AdjectiveWorksheet10Module)},
      // { path: 'std01/adjective/worksheet10', component: Std01AdjectiveWorksheet10Component},
      { path: 'std01/adjective/worksheet9', loadChildren: () => import('./std01-adjective-worksheet9/std01-adjective-worksheet9.module').then(m => m.Std01AdjectiveWorksheet9Module)},
      // { path: 'std01/adjective/worksheet9', component: Std01AdjectiveWorksheet9Component},
      { path: 'std01/adjective/worksheet8', loadChildren: () => import('./std01-adjective-worksheet8/std01-adjective-worksheet8.module').then(m => m.Std01AdjectiveWorksheet8Module)},
      // { path: 'std01/adjective/worksheet8', component: Std01AdjectiveWorksheet8Component},
      { path: 'std01/adjective/worksheet7', loadChildren: () => import('./std01-adjective-worksheet7/std01-adjective-worksheet7.module').then(m => m.Std01AdjectiveWorksheet7Module)},
      // { path: 'std01/adjective/worksheet7', component: Std01AdjectiveWorksheet7Component},
      { path: 'std01/adjective/worksheet6', loadChildren: () => import('./std01-adjective-worksheet6/std01-adjective-worksheet6.module').then(m => m.Std01AdjectiveWorksheet6Module)},
      // { path: 'std01/adjective/worksheet6', component: Std01AdjectiveWorksheet6Component},
      
      { path: 'std01/antonyms/worksheet1', loadChildren: () => import('./std01-antonyms-worksheet1/std01-antonyms-worksheet1.module').then(m => m.Std01AntonymsWorksheet1Module)},
      // { path: 'std01/antonyms/worksheet1', component: Std01AntonymsWorksheet1Component},
      { path: 'std01/antonyms/worksheet2', loadChildren: () => import('./std01-antonyms-worksheet2/std01-antonyms-worksheet2.module').then(m => m.Std01AntonymsWorksheet2Module)},
      // { path: 'std01/antonyms/worksheet2', component: Std01AntonymsWorksheet2Component},
      { path: 'std01/antonyms/worksheet3', loadChildren: () => import('./std01-antonyms-worksheet3/std01-antonyms-worksheet3.module').then(m => m.Std01AntonymsWorksheet3Module)},
      // { path: 'std01/antonyms/worksheet3', component: Std01AntonymsWorksheet3Component},
      { path: 'std01/antonyms/worksheet4', loadChildren: () => import('./std01-antonyms-worksheet4/std01-antonyms-worksheet4.module').then(m => m.Std01AntonymsWorksheet4Module)},
      // { path: 'std01/antonyms/worksheet4', component: Std01AntonymsWorksheet4Component},
      { path: 'std01/antonyms/worksheet5', loadChildren: () => import('./std01-antonyms-worksheet5/std01-antonyms-worksheet5.module').then(m => m.Std01AntonymsWorksheet5Module)},
      // { path: 'std01/antonyms/worksheet5', component: Std01AntonymsWorksheet5Component},
      { path: 'std01/antonyms/worksheet6', loadChildren: () => import('./std01-antonyms-worksheet6/std01-antonyms-worksheet6.module').then(m => m.Std01AntonymsWorksheet6Module)},
      // { path: 'std01/antonyms/worksheet6', component: Std01AntonymsWorksheet6Component},     

      { path: 'std01/conjunctions/worksheet1', loadChildren: () => import('./std01-conjunctions-worksheet1/std01-conjunctions-worksheet1.module').then(m => m.Std01ConjunctionsWorksheet1Module)},
      // { path: 'std01/conjunctions/worksheet1', component: Std01ConjunctionsWorksheet1Component},
      { path: 'std01/conjunctions/worksheet2', loadChildren: () => import('./std01-conjunctions-worksheet2/std01-conjunctions-worksheet2.module').then(m => m.Std01ConjunctionsWorksheet2Module)},
      // { path: 'std01/conjunctions/worksheet2', component: Std01ConjunctionsWorksheet2Component},
      { path: 'std01/conjunctions/worksheet3', loadChildren: () => import('./std01-conjunctions-worksheet3/std01-conjunctions-worksheet3.module').then(m => m.Std01ConjunctionsWorksheet3Module)},
      // { path: 'std01/conjunctions/worksheet3', component: Std01ConjunctionsWorksheet3Component},
      { path: 'std01/conjunctions/worksheet4', loadChildren: () => import('./std01-conjunctions-worksheet4/std01-conjunctions-worksheet4.module').then(m => m.Std01ConjunctionsWorksheet4Module)},
      // { path: 'std01/conjunctions/worksheet4', component: Std01ConjunctionsWorksheet4Component},
      { path: 'std01/conjunctions/worksheet5', loadChildren: () => import('./std01-conjunctions-worksheet5/std01-conjunctions-worksheet5.module').then(m => m.Std01ConjunctionsWorksheet5Module)},
      // { path: 'std01/conjunctions/worksheet5', component: Std01ConjunctionsWorksheet5Component},
      { path: 'std01/conjunctions/worksheet6', loadChildren: () => import('./std01-conjunctions-worksheet6/std01-conjunctions-worksheet6.module').then(m => m.Std01ConjunctionsWorksheet6Module)},
      // { path: 'std01/conjunctions/worksheet6', component: Std01ConjunctionsWorksheet6Component},

      { path: 'std01/gender-nouns/worksheet1', loadChildren: () => import('./std01-gender-nouns-worksheet1/std01-gender-nouns-worksheet1.module').then(m => m.Std01GenderNounsWorksheet1Module)},
      // { path: 'std01/gender-nouns/worksheet1', component: Std01GenderNounsWorksheet1Component},
      { path: 'std01/gender-nouns/worksheet2', loadChildren: () => import('./std01-gender-nouns-worksheet2/std01-gender-nouns-worksheet2.module').then(m => m.Std01GenderNounsWorksheet2Module)},
      // { path: 'std01/gender-nouns/worksheet2', component: Std01GenderNounsWorksheet2Component},
      { path: 'std01/gender-nouns/worksheet3', loadChildren: () => import('./std01-gender-nouns-worksheet3/std01-gender-nouns-worksheet3.module').then(m => m.Std01GenderNounsWorksheet3Module)},
      // { path: 'std01/gender-nouns/worksheet3', component: Std01GenderNounsWorksheet3Component},
      { path: 'std01/gender-nouns/worksheet4', loadChildren: () => import('./std01-gender-nouns-worksheet4/std01-gender-nouns-worksheet4.module').then(m => m.Std01GenderNounsWorksheet4Module)},
      // { path: 'std01/gender-nouns/worksheet4', component: Std01GenderNounsWorksheet4Component},
      { path: 'std01/gender-nouns/worksheet5', loadChildren: () => import('./std01-gender-nouns-worksheet5/std01-gender-nouns-worksheet5.module').then(m => m.Std01GenderNounsWorksheet5Module)},
      // { path: 'std01/gender-nouns/worksheet5', component: Std01GenderNounsWorksheet5Component},
      { path: 'std01/gender-nouns/worksheet6', loadChildren: () => import('./std01-gender-nouns-worksheet6/std01-gender-nouns-worksheet6.module').then(m => m.Std01GenderNounsWorksheet6Module)},
      // { path: 'std01/gender-nouns/worksheet6', component: Std01GenderNounsWorksheet6Component},
      { path: 'std01/gender-nouns/worksheet7', loadChildren: () => import('./std01-gender-nouns-worksheet7/std01-gender-nouns-worksheet7.module').then(m => m.Std01GenderNounsWorksheet7Module)},
      // { path: 'std01/gender-nouns/worksheet7', component: Std01GenderNounsWorksheet7Component},
      { path: 'std01/gender-nouns/worksheet8', loadChildren: () => import('./std01-gender-nouns-worksheet8/std01-gender-nouns-worksheet8.module').then(m => m.Std01GenderNounsWorksheet8Module)},
      // { path: 'std01/gender-nouns/worksheet8', component: Std01GenderNounsWorksheet8Component},
      { path: 'std01/gender-nouns/worksheet9', loadChildren: () => import('./std01-gender-nouns-worksheet9/std01-gender-nouns-worksheet9.module').then(m => m.Std01GenderNounsWorksheet9Module)},
      // { path: 'std01/gender-nouns/worksheet9', component: Std01GenderNounsWorksheet9Component},
      { path: 'std01/gender-nouns/worksheet10', loadChildren: () => import('./std01-gender-nouns-worksheet10/std01-gender-nouns-worksheet10.module').then(m => m.Std01GenderNounsWorksheet10Module)},
      // { path: 'std01/gender-nouns/worksheet10', component: Std01GenderNounsWorksheet10Component},
      
      { path: 'std01/rhyming-words/worksheet10', loadChildren: () => import('./std01-rhyming-words-worksheet10/std01-rhyming-words-worksheet10.module').then(m => m.Std01RhymingWordsWorksheet10Module)},
      // { path: 'std01/rhyming-words/worksheet10', component: Std01RhymingWordsWorksheet10Component},
      { path: 'std01/rhyming-words/worksheet11', loadChildren: () => import('./std01-rhyming-words-worksheet11/std01-rhyming-words-worksheet11.module').then(m => m.Std01RhymingWordsWorksheet11Module)},
      // { path: 'std01/rhyming-words/worksheet11', component: Std01RhymingWordsWorksheet11Component},
      { path: 'std01/rhyming-words/worksheet12', loadChildren: () => import('./std01-rhyming-words-worksheet12/std01-rhyming-words-worksheet12.module').then(m => m.Std01RhymingWordsWorksheet12Module)},
      // { path: 'std01/rhyming-words/worksheet12', component: Std01RhymingWordsWorksheet12Component},
      { path: 'std01/rhyming-words/worksheet13', loadChildren: () => import('./std01-rhyming-words-worksheet13/std01-rhyming-words-worksheet13.module').then(m => m.Std01RhymingWordsWorksheet13Module)},
      // { path: 'std01/rhyming-words/worksheet13', component: Std01RhymingWordsWorksheet13Component},
      { path: 'std01/rhyming-words/worksheet14', loadChildren: () => import('./std01-rhyming-words-worksheet14/std01-rhyming-words-worksheet14.module').then(m => m.Std01RhymingWordsWorksheet14Module)},
      // { path: 'std01/rhyming-words/worksheet14', component: Std01RhymingWordsWorksheet14Component},
      { path: 'std01/rhyming-words/worksheet15', loadChildren: () => import('./std01-rhyming-words-worksheet15/std01-rhyming-words-worksheet15.module').then(m => m.Std01RhymingWordsWorksheet15Module)},
      // { path: 'std01/rhyming-words/worksheet15', component: Std01RhymingWordsWorksheet15Component},
      
      { path: 'std01/singular-plural-nouns/worksheet1', loadChildren: () => import('./std01-singular-plural-nouns-worksheet1/std01-singular-plural-nouns-worksheet1.module').then(m => m.Std01SingularPluralNounsWorksheet1Module)},
      // { path: 'std01/singular-plural-nouns/worksheet1', component: Std01SingularPluralNounsWorksheet1Component},
      { path: 'std01/singular-plural-nouns/worksheet2', loadChildren: () => import('./std01-singular-plural-nouns-worksheet2/std01-singular-plural-nouns-worksheet2.module').then(m => m.Std01SingularPluralNounsWorksheet2Module)},
      // { path: 'std01/singular-plural-nouns/worksheet2', component: Std01SingularPluralNounsWorksheet2Component},
      { path: 'std01/singular-plural-nouns/worksheet3', loadChildren: () => import('./std01-singular-plural-nouns-worksheet3/std01-singular-plural-nouns-worksheet3.module').then(m => m.Std01SingularPluralNounsWorksheet3Module)},
      // { path: 'std01/singular-plural-nouns/worksheet3', component: Std01SingularPluralNounsWorksheet3Component},
      { path: 'std01/singular-plural-nouns/worksheet4', loadChildren: () => import('./std01-singular-plural-nouns-worksheet4/std01-singular-plural-nouns-worksheet4.module').then(m => m.Std01SingularPluralNounsWorksheet4Module)},
      // { path: 'std01/singular-plural-nouns/worksheet4', component: Std01SingularPluralNounsWorksheet4Component},
      { path: 'std01/singular-plural-nouns/worksheet5', loadChildren: () => import('./std01-singular-plural-nouns-worksheet5/std01-singular-plural-nouns-worksheet5.module').then(m => m.Std01SingularPluralNounsWorksheet5Module)},
      // { path: 'std01/singular-plural-nouns/worksheet5', component: Std01SingularPluralNounsWorksheet5Component},
      { path: 'std01/singular-plural-nouns/worksheet6', loadChildren: () => import('./std01-singular-plural-nouns-worksheet6/std01-singular-plural-nouns-worksheet6.module').then(m => m.Std01SingularPluralNounsWorksheet6Module)},
      // { path: 'std01/singular-plural-nouns/worksheet6', component: Std01SingularPluralNounsWorksheet6Component},
      { path: 'std01/singular-plural-nouns/worksheet7', loadChildren: () => import('./std01-singular-plural-nouns-worksheet7/std01-singular-plural-nouns-worksheet7.module').then(m => m.Std01SingularPluralNounsWorksheet7Module)},
      // { path: 'std01/singular-plural-nouns/worksheet7', component: Std01SingularPluralNounsWorksheet7Component},
      { path: 'std01/singular-plural-nouns/worksheet8', loadChildren: () => import('./std01-singular-plural-nouns-worksheet8/std01-singular-plural-nouns-worksheet8.module').then(m => m.Std01SingularPluralNounsWorksheet8Module)},
      // { path: 'std01/singular-plural-nouns/worksheet8', component: Std01SingularPluralNounsWorksheet8Component},
      { path: 'std01/singular-plural-nouns/worksheet9', loadChildren: () => import('./std01-singular-plural-nouns-worksheet9/std01-singular-plural-nouns-worksheet9.module').then(m => m.Std01SingularPluralNounsWorksheet9Module)},
      // { path: 'std01/singular-plural-nouns/worksheet9', component: Std01SingularPluralNounsWorksheet9Component},
      { path: 'std01/singular-plural-nouns/worksheet10', loadChildren: () => import('./std01-singular-plural-nouns-worksheet10/std01-singular-plural-nouns-worksheet10.module').then(m => m.Std01SingularPluralNounsWorksheet10Module)},
      // { path: 'std01/singular-plural-nouns/worksheet10', component: Std01SingularPluralNounsWorksheet10Component},
      
      { path: 'std01/prepositions/worksheet1', loadChildren: () => import('./std01-prepositions-worksheet1/std01-prepositions-worksheet1.module').then(m => m.Std01PrepositionsWorksheet1Module)},
      // { path: 'std01/prepositions/worksheet1', component: Std01PrepositionsWorksheet1Component},
      { path: 'std01/prepositions/worksheet2', loadChildren: () => import('./std01-prepositions-worksheet2/std01-prepositions-worksheet2.module').then(m => m.Std01PrepositionsWorksheet2Module)},
      // { path: 'std01/prepositions/worksheet2', component: Std01PrepositionsWorksheet2Component},
      { path: 'std01/prepositions/worksheet3', loadChildren: () => import('./std01-prepositions-worksheet3/std01-prepositions-worksheet3.module').then(m => m.Std01PrepositionsWorksheet3Module)},
      // { path: 'std01/prepositions/worksheet3', component: Std01PrepositionsWorksheet3Component},
      { path: 'std01/prepositions/worksheet4', loadChildren: () => import('./std01-prepositions-worksheet4/std01-prepositions-worksheet4.module').then(m => m.Std01PrepositionsWorksheet4Module)},
      // { path: 'std01/prepositions/worksheet4', component: Std01PrepositionsWorksheet4Component},
      { path: 'std01/prepositions/worksheet5', loadChildren: () => import('./std01-prepositions-worksheet5/std01-prepositions-worksheet5.module').then(m => m.Std01PrepositionsWorksheet5Module)},
      // { path: 'std01/prepositions/worksheet5', component: Std01PrepositionsWorksheet5Component},
      { path: 'std01/prepositions/worksheet6', loadChildren: () => import('./std01-prepositions-worksheet6/std01-prepositions-worksheet6.module').then(m => m.Std01PrepositionsWorksheet6Module)},
      // { path: 'std01/prepositions/worksheet6', component: Std01PrepositionsWorksheet6Component},
      { path: 'std01/prepositions/worksheet7', loadChildren: () => import('./std01-prepositions-worksheet7/std01-prepositions-worksheet7.module').then(m => m.Std01PrepositionsWorksheet7Module)},
      // { path: 'std01/prepositions/worksheet7', component: Std01PrepositionsWorksheet7Component},
      { path: 'std01/prepositions/worksheet8', loadChildren: () => import('./std01-prepositions-worksheet8/std01-prepositions-worksheet8.module').then(m => m.Std01PrepositionsWorksheet8Module)},
      // { path: 'std01/prepositions/worksheet8', component: Std01PrepositionsWorksheet8Component},
      { path: 'std01/prepositions/worksheet9', loadChildren: () => import('./std01-prepositions-worksheet9/std01-prepositions-worksheet9.module').then(m => m.Std01PrepositionsWorksheet9Module)},
      // { path: 'std01/prepositions/worksheet9', component: Std01PrepositionsWorksheet9Component},
      { path: 'std01/prepositions/worksheet10', loadChildren: () => import('./std01-prepositions-worksheet10/std01-prepositions-worksheet10.module').then(m => m.Std01PrepositionsWorksheet10Module)},
      // { path: 'std01/prepositions/worksheet10', component: Std01PrepositionsWorksheet10Component},
      
      { path: 'std01/possessive-pronouns/worksheet1', loadChildren: () => import('./std01-possessive-pronouns-worksheet1/std01-possessive-pronouns-worksheet1.module').then(m => m.Std01PossessivePronounsWorksheet1Module)},
      // { path: 'std01/possessive-pronouns/worksheet1', component: Std01PossessivePronounsWorksheet1Component},
      { path: 'std01/possessive-pronouns/worksheet2', loadChildren: () => import('./std01-possessive-pronouns-worksheet2/std01-possessive-pronouns-worksheet2.module').then(m => m.Std01PossessivePronounsWorksheet2Module)},
      // { path: 'std01/possessive-pronouns/worksheet2', component: Std01PossessivePronounsWorksheet2Component},
      { path: 'std01/possessive-pronouns/worksheet3', loadChildren: () => import('./std01-possessive-pronouns-worksheet3/std01-possessive-pronouns-worksheet3.module').then(m => m.Std01PossessivePronounsWorksheet3Module)},
      // { path: 'std01/possessive-pronouns/worksheet3', component: Std01PossessivePronounsWorksheet3Component},

      { path: 'std01/interrogative-pronouns/worksheet1', loadChildren: () => import('./std01-interrogative-pronouns-worksheet1/std01-interrogative-pronouns-worksheet1.module').then(m => m.Std01InterrogativePronounsWorksheet1Module)},
      // { path: 'std01/interrogative-pronouns/worksheet1', component: Std01InterrogativePronounsWorksheet1Component},
      { path: 'std01/interrogative-pronouns/worksheet2', loadChildren: () => import('./std01-interrogative-pronouns-worksheet2/std01-interrogative-pronouns-worksheet2.module').then(m => m.Std01InterrogativePronounsWorksheet2Module)},
      // { path: 'std01/interrogative-pronouns/worksheet2', component: Std01InterrogativePronounsWorksheet2Component},
      { path: 'std01/interrogative-pronouns/worksheet3', loadChildren: () => import('./std01-interrogative-pronouns-worksheet3/std01-interrogative-pronouns-worksheet3.module').then(m => m.Std01InterrogativePronounsWorksheet3Module)},
      // { path: 'std01/interrogative-pronouns/worksheet3', component: Std01InterrogativePronounsWorksheet3Component},

      { path: 'std01/interrogative-pronouns/worksheet3', loadChildren: () => import('./std01-interrogative-pronouns-worksheet3/std01-interrogative-pronouns-worksheet3.module').then(m => m.Std01InterrogativePronounsWorksheet3Module)},

      { path: 'std01/personal-pronouns/worksheet1', loadChildren: () => import('./std01-personal-pronouns-worksheet1/std01-personal-pronouns-worksheet1.module').then(m => m.Std01PersonalPronounsWorksheet1Module)},
      // { path: 'std01/personal-pronouns/worksheet1', component: Std01PersonalPronounsWorksheet1Component},
      { path: 'std01/personal-pronouns/worksheet2', loadChildren: () => import('./std01-personal-pronouns-worksheet2/std01-personal-pronouns-worksheet2.module').then(m => m.Std01PersonalPronounsWorksheet2Module)},
      // { path: 'std01/personal-pronouns/worksheet2', component: Std01PersonalPronounsWorksheet2Component},
      { path: 'std01/personal-pronouns/worksheet3', loadChildren: () => import('./std01-personal-pronouns-worksheet3/std01-personal-pronouns-worksheet3.module').then(m => m.Std01PersonalPronounsWorksheet3Module)},
      // { path: 'std01/personal-pronouns/worksheet3', component: Std01PersonalPronounsWorksheet3Component},
      { path: 'std01/personal-pronouns/worksheet4', loadChildren: () => import('./std01-personal-pronouns-worksheet4/std01-personal-pronouns-worksheet4.module').then(m => m.Std01PersonalPronounsWorksheet4Module)},
      // { path: 'std01/personal-pronouns/worksheet4', component: Std01PersonalPronounsWorksheet4Component},
      { path: 'std01/personal-pronouns/worksheet5', loadChildren: () => import('./std01-personal-pronouns-worksheet5/std01-personal-pronouns-worksheet5.module').then(m => m.Std01PersonalPronounsWorksheet5Module)},
      // { path: 'std01/personal-pronouns/worksheet5', component: Std01PersonalPronounsWorksheet5Component},

      { path: 'std01/mixed-punctuation/worksheet1', loadChildren: () => import('./std01-mixed-punctuation-worksheet1/std01-mixed-punctuation-worksheet1.module').then(m => m.Std01MixedPunctuationWorksheet1Module)},

      { path: 'std01/exclamation/worksheet1', loadChildren: () => import('./std01-exclamation-worksheet1/std01-exclamation-worksheet1.module').then(m => m.Std01ExclamationWorksheet1Module)},
      // { path: 'std01/mixed-punctuation/worksheet1', component: Std01MixedPunctuationWorksheet1Component},
      { path: 'std01/mixed-punctuation/worksheet2', loadChildren: () => import('./std01-mixed-punctuation-worksheet2/std01-mixed-punctuation-worksheet2.module').then(m => m.Std01MixedPunctuationWorksheet2Module)},
      // { path: 'std01/mixed-punctuation/worksheet2', component: Std01MixedPunctuationWorksheet2Component},
      { path: 'std01/mixed-punctuation/worksheet3', loadChildren: () => import('./std01-mixed-punctuation-worksheet3/std01-mixed-punctuation-worksheet3.module').then(m => m.Std01MixedPunctuationWorksheet3Module)},
      // { path: 'std01/mixed-punctuation/worksheet3', component: Std01MixedPunctuationWorksheet3Component},
      
      { path: 'std01/synonyms/worksheet1', loadChildren: () => import('./std01-synonyms-worksheet1/std01-synonyms-worksheet1.module').then(m => m.Std01SynonymsWorksheet1Module)},
      // { path: 'std01/synonyms/worksheet1', component: Std01SynonymsWorksheet1Component},
      { path: 'std01/synonyms/worksheet2', loadChildren: () => import('./std01-synonyms-worksheet2/std01-synonyms-worksheet2.module').then(m => m.Std01SynonymsWorksheet2Module)},
      // { path: 'std01/synonyms/worksheet2', component: Std01SynonymsWorksheet2Component},
      { path: 'std01/synonyms/worksheet3', loadChildren: () => import('./std01-synonyms-worksheet3/std01-synonyms-worksheet3.module').then(m => m.Std01SynonymsWorksheet3Module)},
      // { path: 'std01/synonyms/worksheet3', component: Std01SynonymsWorksheet3Component},
      { path: 'std01/synonyms/worksheet4', loadChildren: () => import('./std01-synonyms-worksheet4/std01-synonyms-worksheet4.module').then(m => m.Std01SynonymsWorksheet4Module)},
      // { path: 'std01/synonyms/worksheet4', component: Std01SynonymsWorksheet4Component},
      { path: 'std01/synonyms/worksheet5', loadChildren: () => import('./std01-synonyms-worksheet5/std01-synonyms-worksheet5.module').then(m => m.Std01SynonymsWorksheet5Module)},
      // { path: 'std01/synonyms/worksheet5', component: Std01SynonymsWorksheet5Component},
      { path: 'std01/synonyms/worksheet6', loadChildren: () => import('./std01-synonyms-worksheet6/std01-synonyms-worksheet6.module').then(m => m.Std01SynonymsWorksheet6Module)},
      // { path: 'std01/synonyms/worksheet6', component: Std01SynonymsWorksheet6Component},
      { path: 'std01/synonyms/worksheet7', loadChildren: () => import('./std01-synonyms-worksheet7/std01-synonyms-worksheet7.module').then(m => m.Std01SynonymsWorksheet7Module)},
      // { path: 'std01/synonyms/worksheet7', component: Std01SynonymsWorksheet7Component},
      { path: 'std01/synonyms/worksheet8', loadChildren: () => import('./std01-synonyms-worksheet8/std01-synonyms-worksheet8.module').then(m => m.Std01SynonymsWorksheet8Module)},
      // { path: 'std01/synonyms/worksheet8', component: Std01SynonymsWorksheet8Component},
      { path: 'std01/synonyms/worksheet9', loadChildren: () => import('./std01-synonyms-worksheet9/std01-synonyms-worksheet9.module').then(m => m.Std01SynonymsWorksheet9Module)},
      // { path: 'std01/synonyms/worksheet9', component: Std01SynonymsWorksheet9Component},
      { path: 'std01/synonyms/worksheet10', loadChildren: () => import('./std01-synonyms-worksheet10/std01-synonyms-worksheet10.module').then(m => m.Std01SynonymsWorksheet10Module)},
      // { path: 'std01/synonyms/worksheet10', component: Std01SynonymsWorksheet10Component},

      { path: 'std01/helping-verbs/worksheet1', loadChildren: () => import('./std01-helping-verbs-worksheet1/std01-helping-verbs-worksheet1.module').then(m => m.Std01HelpingVerbsWorksheet1Module)},
      // { path: 'std01/helping-verbs/worksheet1', component: Std01HelpingVerbsWorksheet1Component},
      { path: 'std01/helping-verbs/worksheet2', loadChildren: () => import('./std01-helping-verbs-worksheet2/std01-helping-verbs-worksheet2.module').then(m => m.Std01HelpingVerbsWorksheet2Module)},
      // { path: 'std01/helping-verbs/worksheet2', component: Std01HelpingVerbsWorksheet2Component},
      { path: 'std01/helping-verbs/worksheet3', loadChildren: () => import('./std01-helping-verbs-worksheet3/std01-helping-verbs-worksheet3.module').then(m => m.Std01HelpingVerbsWorksheet3Module)},
      // { path: 'std01/helping-verbs/worksheet3', component: Std01HelpingVerbsWorksheet3Component},
      { path: 'std01/helping-verbs/worksheet4', loadChildren: () => import('./std01-helping-verbs-worksheet4/std01-helping-verbs-worksheet4.module').then(m => m.Std01HelpingVerbsWorksheet4Module)},
      // { path: 'std01/helping-verbs/worksheet4', component: Std01HelpingVerbsWorksheet4Component},
      { path: 'std01/helping-verbs/worksheet5', loadChildren: () => import('./std01-helping-verbs-worksheet5/std01-helping-verbs-worksheet5.module').then(m => m.Std01HelpingVerbsWorksheet5Module)},
      // { path: 'std01/helping-verbs/worksheet5', component: Std01HelpingVerbsWorksheet5Component},
      { path: 'std01/helping-verbs/worksheet6', loadChildren: () => import('./std01-helping-verbs-worksheet6/std01-helping-verbs-worksheet6.module').then(m => m.Std01HelpingVerbsWorksheet6Module)},
      // { path: 'std01/helping-verbs/worksheet6', component: Std01HelpingVerbsWorksheet6Component},
      { path: 'std01/helping-verbs/worksheet7', loadChildren: () => import('./std01-helping-verbs-worksheet7/std01-helping-verbs-worksheet7.module').then(m => m.Std01HelpingVerbsWorksheet7Module)},
      // { path+et7', component: Std01HelpingVerbsWorksheet7Component},
      { path: 'std01/helping-verbs/worksheet8', loadChildren: () => import('./std01-helping-verbs-worksheet8/std01-helping-verbs-worksheet8.module').then(m => m.Std01HelpingVerbsWorksheet8Module)},
      // { path: 'std01/helping-verbs/worksheet8', component: Std01HelpingVerbsWorksheet8Component},
      { path: 'std01/helping-verbs/worksheet9', loadChildren: () => import('./std01-helping-verbs-worksheet9/std01-helping-verbs-worksheet9.module').then(m => m.Std01HelpingVerbsWorksheet9Module)},
      // { path: 'std01/helping-verbs/worksheet9', component: Std01HelpingVerbsWorksheet9Component},
   
      { path: 'std01/comprehensions/worksheet1', loadChildren: () => import('./std01-comprehensions-worksheet1/std01-comprehensions-worksheet1.module').then(m => m.Std01ComprehensionsWorksheet1Module)},
      // { path: 'std01/comprehensions/worksheet1', component: Std01ComprehensionsWorksheet1Component},
      { path: 'std01/comprehensions/worksheet8', loadChildren: () => import('./std01-comprehensions-worksheet8/std01-comprehensions-worksheet8.module').then(m => m.Std01ComprehensionsWorksheet8Module)},
      // { path: 'std01/comprehensions/worksheet8', component: Std01ComprehensionsWorksheet8Component},
      { path: 'std01/comprehensions/worksheet2', loadChildren: () => import('./std01-comprehensions-worksheet3/std01-comprehensions-worksheet3.module').then(m => m.Std01ComprehensionsWorksheet3Module)},
      // { path: 'std01/comprehensions/worksheet2', component: Std01ComprehensionsWorksheet2Component},
      { path: 'std01/comprehensions/worksheet3', loadChildren: () => import('./std01-comprehensions-worksheet3/std01-comprehensions-worksheet3.module').then(m => m.Std01ComprehensionsWorksheet3Module)},
      // { path: 'std01/comprehensions/worksheet3', component: Std01ComprehensionsWorksheet3Component},
      { path: 'std01/comprehensions/worksheet4', loadChildren: () => import('./std01-comprehensions-worksheet4/std01-comprehensions-worksheet4.module').then(m => m.Std01ComprehensionsWorksheet4Module)},
      // { path: 'std01/comprehensions/worksheet4', component: Std01ComprehensionsWorksheet4Component},
      { path: 'std01/comprehensions/worksheet5', loadChildren: () => import('./std01-comprehensions-worksheet5/std01-comprehensions-worksheet5.module').then(m => m.Std01ComprehensionsWorksheet5Module)},
      // { path: 'std01/comprehensions/worksheet5', component: Std01ComprehensionsWorksheet5Component},
      { path: 'std01/comprehensions/worksheet6', loadChildren: () => import('./std01-comprehensions-worksheet6/std01-comprehensions-worksheet6.module').then(m => m.Std01ComprehensionsWorksheet6Module)},
      // { path: 'std01/comprehensions/worksheet6', component: Std01ComprehensionsWorksheet6Component},
      { path: 'std01/comprehensions/worksheet7', loadChildren: () => import('./std01-comprehensions-worksheet7/std01-comprehensions-worksheet7.module').then(m => m.Std01ComprehensionsWorksheet7Module)},
      // { path: 'std01/comprehensions/worksheet7', component: Std01ComprehensionsWorksheet7Component},
      { path: 'std01/comprehensions/worksheet9', loadChildren: () => import('./std01-comprehensions-worksheet9/std01-comprehensions-worksheet9.module').then(m => m.Std01ComprehensionsWorksheet9Module)},
      // { path: 'std01/comprehensions/worksheet9', component: Std01ComprehensionsWorksheet9Component},
      { path: 'std01/comprehensions/worksheet10', loadChildren: () => import('./std01-comprehensions-worksheet10/std01-comprehensions-worksheet10.module').then(m => m.Std01ComprehensionsWorksheet10Module)},
      // { path: 'std01/comprehensions/worksheet10', component: Std01ComprehensionsWorksheet10Component},

      { path: 'std01/rhyming-words/worksheet1', loadChildren: () => import('./std01-rhyming-words-worksheet1/std01-rhyming-words-worksheet1.module').then(m => m.Std01RhymingWordsWorksheet1Module)},
      // { path: 'std01/rhyming-words/worksheet1', component: Std01RhymingWordsWorksheet1Component},
      { path: 'std01/rhyming-words/worksheet2', loadChildren: () => import('./std01-rhyming-words-worksheet2/std01-rhyming-words-worksheet2.module').then(m => m.Std01RhymingWordsWorksheet2Module)},
      // { path: 'std01/rhyming-words/worksheet2', component: Std01RhymingWordsWorksheet2Component},
      { path: 'std01/rhyming-words/worksheet3', loadChildren: () => import('./std01-rhyming-words-worksheet3/std01-rhyming-words-worksheet3.module').then(m => m.Std01RhymingWordsWorksheet3Module)},
      // { path: 'std01/rhyming-words/worksheet3', component: Std01RhymingWordsWorksheet3Component},
      { path: 'std01/rhyming-words/worksheet4', loadChildren: () => import('./std01-rhyming-words-worksheet4/std01-rhyming-words-worksheet4.module').then(m => m.Std01RhymingWordsWorksheet4Module)},
      // { path: 'std01/rhyming-words/worksheet4', component: Std01RhymingWordsWorksheet4Component},
      { path: 'std01/rhyming-words/worksheet5', loadChildren: () => import('./std01-rhyming-words-worksheet5/std01-rhyming-words-worksheet5.module').then(m => m.Std01RhymingWordsWorksheet5Module)},
      // { path: 'std01/rhyming-words/worksheet5', component: Std01RhymingWordsWorksheet5Component},
      { path: 'std01/rhyming-words/worksheet6', loadChildren: () => import('./std01-rhyming-words-worksheet6/std01-rhyming-words-worksheet6.module').then(m => m.Std01RhymingWordsWorksheet6Module)},
      // { path: 'std01/rhyming-words/worksheet6', component: Std01RhymingWordsWorksheet6Component},
      { path: 'std01/rhyming-words/worksheet7', loadChildren: () => import('./std01-rhyming-words-worksheet7/std01-rhyming-words-worksheet7.module').then(m => m.Std01RhymingWordsWorksheet7Module)},
      // { path: 'std01/rhyming-words/worksheet7', component: Std01RhymingWordsWorksheet7Component},
      { path: 'std01/rhyming-words/worksheet8', loadChildren: () => import('./std01-rhyming-words-worksheet8/std01-rhyming-words-worksheet8.module').then(m => m.Std01RhymingWordsWorksheet8Module)},
      // { path: 'std01/rhyming-words/worksheet8', component: Std01RhymingWordsWorksheet8Component},
      { path: 'std01/rhyming-words/worksheet9', loadChildren: () => import('./std01-rhyming-words-worksheet9/std01-rhyming-words-worksheet9.module').then(m => m.Std01RhymingWordsWorksheet9Module)},
      // { path: 'std01/rhyming-words/worksheet9', component: Std01RhymingWordsWorksheet9Component},

      { path: 'std01/common-noun/worksheet1', loadChildren: () => import('./std01-common-noun-worksheet1/std01-common-noun-worksheet1.module').then(m => m.Std01CommonNounWorksheet1Module)},
      // { path: 'std01/common-noun/worksheet1', component: Std01CommonNounWorksheet1Component},
      { path: 'std01/common-noun/worksheet2', loadChildren: () => import('./std01-common-noun-worksheet2/std01-common-noun-worksheet2.module').then(m => m.Std01CommonNounWorksheet2Module)},
      // { path: 'std01/common-noun/worksheet2', component: Std01CommonNounWorksheet2Component},
      { path: 'std01/common-noun/worksheet3', loadChildren: () => import('./std01-common-noun-worksheet3/std01-common-noun-worksheet3.module').then(m => m.Std01CommonNounWorksheet3Module)},
      // { path: 'std01/common-noun/worksheet3', component: Std01CommonNounWorksheet3Component},
      { path: 'std01/common-noun/worksheet4', loadChildren: () => import('./std01-common-noun-worksheet4/std01-common-noun-worksheet4.module').then(m => m.Std01CommonNounWorksheet4Module)},
      // { path: 'std01/common-noun/worksheet4', component: Std01CommonNounWorksheet4Component},
      { path: 'std01/common-noun/worksheet5', loadChildren: () => import('./std01-common-noun-worksheet5/std01-common-noun-worksheet5.module').then(m => m.Std01CommonNounWorksheet5Module)},
      // { path: 'std01/common-noun/worksheet5', component: Std01CommonNounWorksheet5Component},

      { path: 'std01/mixed-noun/worksheet1', loadChildren: () => import('./std01-mixed-noun-worksheet1/std01-mixed-noun-worksheet1.module').then(m => m.Std01MixedNounWorksheet1Module)},
      // { path: 'std01/mixed-noun/worksheet1', component: Std01MixedNounWorksheet1Component},
      { path: 'std01/mixed-noun/worksheet2', loadChildren: () => import('./std01-mixed-noun-worksheet2/std01-mixed-noun-worksheet2.module').then(m => m.Std01MixedNounWorksheet2Module)},
      // { path: 'std01/mixed-noun/worksheet2', component: Std01MixedNounWorksheet2Component},
      { path: 'std01/mixed-noun/worksheet3', loadChildren: () => import('./std01-mixed-noun-worksheet3/std01-mixed-noun-worksheet3.module').then(m => m.Std01MixedNounWorksheet3Module)},
      // { path: 'std01/mixed-noun/worksheet3', component: Std01MixedNounWorksheet3Component},
      { path: 'std01/mixed-noun/worksheet4', loadChildren: () => import('./std01-mixed-noun-worksheet4/std01-mixed-noun-worksheet4.module').then(m => m.Std01MixedNounWorksheet4Module)},
      // { path: 'std01/mixed-noun/worksheet4', component: Std01MixedNounWorksheet4Component},
      { path: 'std01/mixed-noun/worksheet5', loadChildren: () => import('./std01-mixed-noun-worksheet5/std01-mixed-noun-worksheet5.module').then(m => m.Std01MixedNounWorksheet5Module)},
      // { path: 'std01/mixed-noun/worksheet5', component: Std01MixedNounWorksheet5Component},

      { path: 'std01/proper-noun/worksheet1', loadChildren: () => import('./std01-proper-noun-worksheet1/std01-proper-noun-worksheet1.module').then(m => m.Std01ProperNounWorksheet1Module)},
      // { path: 'std01/proper-noun/worksheet1', component: Std01ProperNounWorksheet1Component},
      { path: 'std01/proper-noun/worksheet2', loadChildren: () => import('./std01-proper-noun-worksheet2/std01-proper-noun-worksheet2.module').then(m => m.Std01ProperNounWorksheet2Module)},
      // { path: 'std01/proper-noun/worksheet2', component: Std01ProperNounWorksheet2Component},
      { path: 'std01/proper-noun/worksheet3', loadChildren: () => import('./std01-proper-noun-worksheet3/std01-proper-noun-worksheet3.module').then(m => m.Std01ProperNounWorksheet3Module)},
      // { path: 'std01/proper-noun/worksheet3', component: Std01ProperNounWorksheet3Component},
      { path: 'std01/proper-noun/worksheet4', loadChildren: () => import('./std01-proper-noun-worksheet4/std01-proper-noun-worksheet4.module').then(m => m.Std01ProperNounWorksheet4Module)},
      // { path: 'std01/proper-noun/worksheet4', component: Std01ProperNounWorksheet4Component},
      { path: 'std01/proper-noun/worksheet5', loadChildren: () => import('./std01-proper-noun-worksheet5/std01-proper-noun-worksheet5.module').then(m => m.Std01ProperNounWorksheet5Module)},
      // { path: 'std01/proper-noun/worksheet5', component: Std01ProperNounWorksheet5Component},

      { path: 'std01/demonstrative-pronoun/worksheet1', loadChildren: () => import('./std01-demostrative-pronoun-worksheet1/std01-demostrative-pronoun-worksheet1.module').then(m => m.Std01DemostrativePronounWorksheet1Module)},
      // { path: 'std01/demonstrative-pronoun/worksheet1', component: Std01DemostrativePronounWorksheet1Component},
      { path: 'std01/demonstrative-pronoun/worksheet2', loadChildren: () => import('./std01-demostrative-pronoun-worksheet2/std01-demostrative-pronoun-worksheet2.module').then(m => m.Std01DemostrativePronounWorksheet2Module)},
      // { path: 'std01/demonstrative-pronoun/worksheet2', component: Std01DemostrativePronounWorksheet2Component},
      { path: 'std01/demonstrative-pronoun/worksheet3', loadChildren: () => import('./std01-demostrative-pronoun-worksheet3/std01-demostrative-pronoun-worksheet3.module').then(m => m.Std01DemostrativePronounWorksheet3Module)},
      // { path: 'std01/demonstrative-pronoun/worksheet3', component: Std01DemostrativePronounWorksheet3Component},
      { path: 'std01/demonstrative-pronoun/worksheet4', loadChildren: () => import('./std01-demostrative-pronoun-worksheet4/std01-demostrative-pronoun-worksheet4.module').then(m => m.Std01DemostrativePronounWorksheet4Module)},
      // { path: 'std01/demonstrative-pronoun/worksheet4', component: Std01DemostrativePronounWorksheet4Component},
      { path: 'std01/demonstrative-pronoun/worksheet5', loadChildren: () => import('./std01-demostrative-pronoun-worksheet5/std01-demostrative-pronoun-worksheet5.module').then(m => m.Std01DemostrativePronounWorksheet5Module)},
      // { path: 'std01/demonstrative-pronoun/worksheet5', component: Std01DemostrativePronounWorksheet5Component},

      { path: 'std01/collective-noun/worksheet1', loadChildren: () => import('./std01-collective-noun-worksheet1/std01-collective-noun-worksheet1.module').then(m => m.Std01CollectiveNounWorksheet1Module)},
      // { path: 'std01/collective-noun/worksheet1', component: Std01CollectiveNounWorksheet1Component},
      { path: 'std01/collective-noun/worksheet2', loadChildren: () => import('./std01-collective-noun-worksheet2/std01-collective-noun-worksheet2.module').then(m => m.Std01CollectiveNounWorksheet2Module)},
      // { path: 'std01/collective-noun/worksheet2', component: Std01CollectiveNounWorksheet2Component},
      { path: 'std01/collective-noun/worksheet3', loadChildren: () => import('./std01-collective-noun-worksheet3/std01-collective-noun-worksheet3.module').then(m => m.Std01CollectiveNounWorksheet3Module)},
      // { path: 'std01/collective-noun/worksheet3', component: Std01CollectiveNounWorksheet3Component},
      { path: 'std01/collective-noun/worksheet4', loadChildren: () => import('./std01-collective-noun-worksheet4/std01-collective-noun-worksheet4.module').then(m => m.Std01CollectiveNounWorksheet4Module)},
      // { path: 'std01/collective-noun/worksheet4', component: Std01CollectiveNounWorksheet4Component},
      { path: 'std01/collective-noun/worksheet5', loadChildren: () => import('./std01-collective-noun-worksheet5/std01-collective-noun-worksheet5.module').then(m => m.Std01CollectiveNounWorksheet5Module)},
      // { path: 'std01/collective-noun/worksheet5', component: Std01CollectiveNounWorksheet5Component},
      { path: 'std01/collective-noun/worksheet6', loadChildren: () => import('./std01-collective-noun-worksheet6/std01-collective-noun-worksheet6.module').then(m => m.Std01CollectiveNounWorksheet6Module)},
      // { path: 'std01/collective-noun/worksheet6', component: Std01CollectiveNounWorksheet6Component},
      { path: 'std01/collective-noun/worksheet7', loadChildren: () => import('./std01-collective-noun-worksheet7/std01-collective-noun-worksheet7.module').then(m => m.Std01CollectiveNounWorksheet7Module)},
      // { path: 'std01/collective-noun/worksheet7', component: Std01CollectiveNounWorksheet7Component},
      { path: 'std01/collective-noun/worksheet8', loadChildren: () => import('./std01-collective-noun-worksheet8/std01-collective-noun-worksheet8.module').then(m => m.Std01CollectiveNounWorksheet8Module)},
      // { path: 'std01/collective-noun/worksheet8', component: Std01CollectiveNounWorksheet8Component},
      { path: 'std01/collective-noun/worksheet9', loadChildren: () => import('./std01-collective-noun-worksheet9/std01-collective-noun-worksheet9.module').then(m => m.Std01CollectiveNounWorksheet9Module)},
      // { path: 'std01/collective-noun/worksheet9', component: Std01CollectiveNounWorksheet9Component},
      { path: 'std01/collective-noun/worksheet10', loadChildren: () => import('./std01-collective-noun-worksheet10/std01-collective-noun-worksheet10.module').then(m => m.Std01CollectiveNounWorksheet10Module)},
      // { path: 'std01/collective-noun/worksheet10', component: Std01CollectiveNounWorksheet10Component},

      { path: 'std01/question-mark/worksheet1', loadChildren: () => import('./std01-question-mark-worksheet1/std01-question-mark-worksheet1.module').then(m => m.Std01QuestionMarkWorksheet1Module)},
      // { path: 'std01/question-mark/worksheet1', component: Std01QuestionMarkWorksheet1Component},
      { path: 'std01/question-mark/worksheet2', loadChildren: () => import('./std01-question-mark-worksheet2/std01-question-mark-worksheet2.module').then(m => m.Std01QuestionMarkWorksheet2Module)},
      // { path: 'std01/question-mark/worksheet2', component: Std01QuestionMarkWorksheet2Component},
      { path: 'std01/question-mark/worksheet3', loadChildren: () => import('./std01-question-mark-worksheet3/std01-question-mark-worksheet3.module').then(m => m.Std01QuestionMarkWorksheet3Module)},
      // { path: 'std01/question-mark/worksheet3', component: Std01QuestionMarkWorksheet3Component},

      { path: 'std01/capital-letter/worksheet1', loadChildren: () => import('./std01-capital-letter-worksheet1/std01-capital-letter-worksheet1.module').then(m => m.Std01CapitalLetterWorksheet1Module)},
      // { path: 'std01/capital-letter/worksheet1', component: Std01CapitalLetterWorksheet1Component},
      { path: 'std01/capital-letter/worksheet2', loadChildren: () => import('./std01-capital-letter-worksheet2/std01-capital-letter-worksheet2.module').then(m => m.Std01CapitalLetterWorksheet2Module)},
      // { path: 'std01/capital-letter/worksheet2', component: Std01CapitalLetterWorksheet2Component},
      { path: 'std01/capital-letter/worksheet3', loadChildren: () => import('./std01-capital-letter-worksheet3/std01-capital-letter-worksheet3.module').then(m => m.Std01CapitalLetterWorksheet3Module)},
      // { path: 'std01/capital-letter/worksheet3', component: Std01CapitalLetterWorksheet3Component},

      { path: 'std01/future-tense/worksheet1', loadChildren: () => import('./std01-future-tense-worksheet1/std01-future-tense-worksheet1.module').then(m => m.Std01FutureTenseWorksheet1Module)},
      // { path: 'std01/future-tense/worksheet1', component: Std01FutureTenseWorksheet1Component},
      { path: 'std01/future-tense/worksheet2', loadChildren: () => import('./std01-future-tense-worksheet2/std01-future-tense-worksheet2.module').then(m => m.Std01FutureTenseWorksheet2Module)},
      // { path: 'std01/future-tense/worksheet2', component: Std01FutureTenseWorksheet2Component},
      { path: 'std01/future-tense/worksheet3', loadChildren: () => import('./std01-future-tense-worksheet3/std01-future-tense-worksheet3.module').then(m => m.Std01FutureTenseWorksheet3Module)},
      // { path: 'std01/future-tense/worksheet3', component: Std01FutureTenseWorksheet3Component},

      { path: 'std01/mixed-tense/worksheet1', loadChildren: () => import('./std01-mixed-tense-worksheet1/std01-mixed-tense-worksheet1.module').then(m => m.Std01MixedTenseWorksheet1Module)},
      // { path: 'std01/mixed-tense/worksheet1', component: Std01MixedTenseWorksheet1Component},
      { path: 'std01/mixed-tense/worksheet2', loadChildren: () => import('./std01-mixed-tense-worksheet2/std01-mixed-tense-worksheet2.module').then(m => m.Std01MixedTenseWorksheet2Module)},
      // { path: 'std01/mixed-tense/worksheet2', component: Std01MixedTenseWorksheet2Component},
      { path: 'std01/mixed-tense/worksheet3', loadChildren: () => import('./std01-mixed-tense-worksheet3/std01-mixed-tense-worksheet3.module').then(m => m.Std01MixedTenseWorksheet3Module)},
      // { path: 'std01/mixed-tense/worksheet3', component: Std01MixedTenseWorksheet3Component},
      { path: 'std01/mixed-tense/worksheet4', loadChildren: () => import('./std01-mixed-tense-worksheet4/std01-mixed-tense-worksheet4.module').then(m => m.Std01MixedTenseWorksheet4Module)},
      // { path: 'std01/mixed-tense/worksheet4', component: Std01MixedTenseWorksheet4Component},

      { path: 'std01/past-tense/worksheet1', loadChildren: () => import('./std01-past-tense-worksheet1/std01-past-tense-worksheet1.module').then(m => m.Std01PastTenseWorksheet1Module)},
      // { path: 'std01/past-tense/worksheet1', component: Std01PastTenseWorksheet1Component},
      { path: 'std01/past-tense/worksheet2', loadChildren: () => import('./std01-past-tense-worksheet2/std01-past-tense-worksheet2.module').then(m => m.Std01PastTenseWorksheet2Module)},
      // { path: 'std01/past-tense/worksheet2', component: Std01PastTenseWorksheet2Component},
      { path: 'std01/past-tense/worksheet3', loadChildren: () => import('./std01-past-tense-worksheet3/std01-past-tense-worksheet3.module').then(m => m.Std01PastTenseWorksheet3Module)},
      // { path: 'std01/past-tense/worksheet3', component: Std01PastTenseWorksheet3Component},
      { path: 'std01/past-tense/worksheet4', loadChildren: () => import('./std01-past-tense-worksheet4/std01-past-tense-worksheet4.module').then(m => m.Std01PastTenseWorksheet4Module)},
      // { path: 'std01/past-tense/worksheet4', component: Std01PastTenseWorksheet4Component},

      { path: 'std01/present-tense/worksheet1', loadChildren: () => import('./std01-past-tense-worksheet1/std01-past-tense-worksheet1.module').then(m => m.Std01PastTenseWorksheet1Module)},    
      // { path: 'std01/present-tense/worksheet1', component: Std01PresentTenseWorksheet1Component},
      { path: 'std01/present-tense/worksheet2', loadChildren: () => import('./std01-past-tense-worksheet2/std01-past-tense-worksheet2.module').then(m => m.Std01PastTenseWorksheet2Module)},    
      // { path: 'std01/present-tense/worksheet2', component: Std01PresentTenseWorksheet2Component},
      { path: 'std01/present-tense/worksheet3', loadChildren: () => import('./std01-past-tense-worksheet3/std01-past-tense-worksheet3.module').then(m => m.Std01PastTenseWorksheet3Module)},
      // { path: 'std01/present-tense/worksheet3', component: Std01PresentTenseWorksheet3Component},
      { path: 'std01/present-tense/worksheet4', loadChildren: () => import('./std01-past-tense-worksheet4/std01-past-tense-worksheet4.module').then(m => m.Std01PastTenseWorksheet4Module)},
      // { path: 'std01/present-tense/worksheet4', component: Std01PresentTenseWorksheet4Component},

      { path: 'std01/comma/worksheet1', loadChildren: () => import('./std01-comma-worksheet1/std01-comma-worksheet1.module').then(m => m.Std01CommaWorksheet1Module)},
      // { path: 'std01/comma/worksheet1', component: Std01CommaWorksheet1Component},
      { path: 'std01/comma/worksheet2', loadChildren: () => import('./std01-comma-worksheet2/std01-comma-worksheet2.module').then(m => m.Std01CommaWorksheet2Module)},
      // { path: 'std01/comma/worksheet2', component: Std01CommaWorksheet2Component},

      { path: 'std01/mixed-verb/worksheet1', loadChildren: () => import('./std01-mixed-verb-worksheet1/std01-mixed-verb-worksheet1.module').then(m => m.Std01MixedVerbWorksheet1Module)},
      // { path: 'std01/mixed-verb/worksheet1', component: Std01MixedVerbWorksheet1Component},
      { path: 'std01/mixed-verb/worksheet2', loadChildren: () => import('./std01-mixed-verb-worksheet2/std01-mixed-verb-worksheet2.module').then(m => m.Std01MixedVerbWorksheet2Module)},
      // { path: 'std01/mixed-verb/worksheet1', component: Std01MixedVerbWorksheet2Component},

      { path: 'std01/reference-list/antonyms', loadChildren: () => import('./std01-antonyms-reference-list/std01-antonyms-reference-list.module').then(m => m.Std01AntonymsReferenceListModule)},
      // { path: 'std01/reference-list/antonyms', component: Std01AntonymsReferenceListComponent},

      { path: 'std01/reference-list/collective-nouns', loadChildren: () => import('./std01-collective-nouns-reference-list/std01-collective-nouns-reference-list.module').then(m => m.Std01CollectiveNounsReferenceListModule)},
      // { path: 'std01/reference-list/collective-nouns', component: Std01CollectiveNounsReferenceListComponent},
      { path: 'std01/reference-list/compound-words', loadChildren: () => import('./std01-compound-words-reference-list/std01-compound-words-reference-list.module').then(m => m.Std01CompoundWordsReferenceListModule)},
      // { path: 'std01/reference-list/compound-words', component: Std01CompoundWordsReferenceListComponent},
      { path: 'std01/reference-list/gender-nouns', loadChildren: () => import('./std01-gender-nouns-reference-list/std01-gender-nouns-reference-list.module').then(m => m.Std01GenderNounsReferenceListModule)},
      // { path: 'std01/reference-list/gender-nouns', component: Std01GenderNounsReferenceListComponent},
      { path: 'std01/reference-list/homophones', loadChildren: () => import('./std01-homophones-reference-list/std01-homophones-reference-list.module').then(m => m.Std01HomophonesReferenceListModule)},
      // { path: 'std01/reference-list/homophones', component: Std01HomophonesReferenceListComponent},
      { path: 'std01/reference-list/rhyming-words', loadChildren: () => import('./std01-rhyming-words-reference-list/std01-rhyming-words-reference-list.module').then(m => m.Std01RhymingWordsReferenceListModule)},
      // { path: 'std01/reference-list/rhyming-words', component: Std01RhymingWordsReferenceListComponent},
      { path: 'std01/reference-list/synonyms', loadChildren: () => import('./std01-synonyms-reference-list/std01-synonyms-reference-list.module').then(m => m.Std01SynonymsReferenceListModule)},
      // { path: 'std01/reference-list/synonyms', component: Std01SynonymsReferenceListComponent},

      
      // { path: 'std02/antonyms/worksheet1', component: Std02AntonymsWorksheet1Component},
      { path: 'std02/antonyms/worksheet1', loadChildren: () => import('./std02-antonyms-worksheet1/std02-antonyms-worksheet1.module').then(m => m.Std02AntonymsWorksheet1Module)},

      // { path: 'std02/antonyms/worksheet2', component: Std02AntonymsWorksheet2Component},
      { path: 'std02/antonyms/worksheet2', loadChildren: () => import('./std02-antonyms-worksheet2/std02-antonyms-worksheet2.module').then(m => m.Std02AntonymsWorksheet2Module)},

      // { path: 'std02/antonyms/worksheet3', component: Std02AntonymsWorksheet3Component},
      { path: 'std02/antonyms/worksheet3', loadChildren: () => import('./std02-antonyms-worksheet3/std02-antonyms-worksheet3.module').then(m => m.Std02AntonymsWorksheet3Module)},

      // { path: 'std02/antonyms/worksheet4', component: Std02AntonymsWorksheet4Component},
      { path: 'std02/antonyms/worksheet4', loadChildren: () => import('./std02-antonyms-worksheet4/std02-antonyms-worksheet4.module').then(m => m.Std02AntonymsWorksheet4Module)},

      // { path: 'std02/antonyms/worksheet5', component: Std02AntonymsWorksheet5Component},
      { path: 'std02/antonyms/worksheet5', loadChildren: () => import('./std02-antonyms-worksheet5/std02-antonyms-worksheet5.module').then(m => m.Std02AntonymsWorksheet5Module)},

      // { path: 'std02/antonyms/worksheet6', component: Std02AntonymsWorksheet6Component},

      { path: 'std02/antonyms/worksheet6', loadChildren: () => import('./std02-antonyms-worksheet6/std02-antonyms-worksheet6.module').then(m => m.Std02AntonymsWorksheet6Module)},

      // { path: 'std02/antonyms/worksheet7', component: Std02AntonymsWorksheet7Component},
      { path: 'std02/antonyms/worksheet7', loadChildren: () => import('./std02-antonyms-worksheet7/std02-antonyms-worksheet7.module').then(m => m.Std02AntonymsWorksheet7Module)},

      // { path: 'std02/antonyms/worksheet8', component: Std02AntonymsWorksheet8Component},
      { path: 'std02/antonyms/worksheet8', loadChildren: () => import('./std02-antonyms-worksheet8/std02-antonyms-worksheet8.module').then(m => m.Std02AntonymsWorksheet8Module)},

      // { path: 'std02/antonyms/worksheet9', component: Std02AntonymsWorksheet9Component},
      { path: 'std02/antonyms/worksheet9', loadChildren: () => import('./std02-antonyms-worksheet9/std02-antonyms-worksheet9.module').then(m => m.Std02AntonymsWorksheet9Module)},

      // { path: 'std02/antonyms/worksheet10', component: Std02AntonymsWorksheet10Component},
      { path: 'std02/antonyms/worksheet10', loadChildren: () => import('./std02-antonyms-worksheet10/std02-antonyms-worksheet10.module').then(m => m.Std02AntonymsWorksheet10Module)},

      //*************************************************************** */
      // { path: 'std02/capital-letter/worksheet1', component: Std02CapitalLetterWorksheet1Component},
      { path: 'std02/capital-letter/worksheet1', loadChildren: () => import('./std02-capital-letter-worksheet1/std02-capital-letter-worksheet1.module').then(m => m.Std02CapitalLetterWorksheet1Module)},

      // { path: 'std02/capital-letter/worksheet2', component: Std02CapitalLetterWorksheet2Component},
      { path: 'std02/capital-letter/worksheet2', loadChildren: () => import('./std02-capital-letter-worksheet2/std02-capital-letter-worksheet2.module').then(m => m.Std02CapitalLetterWorksheet2Module)},

      // { path: 'std02/capital-letter/worksheet3', component: Std02CapitalLetterWorksheet3Component},
      { path: 'std02/capital-letter/worksheet3', loadChildren: () => import('./std02-capital-letter-worksheet3/std02-capital-letter-worksheet3.module').then(m => m.Std02CapitalLetterWorksheet3Module)},

      
      // { path: 'std02/conjunctions/worksheet1', component: Std02ConjunctionsWorksheet1Component},
      { path: 'std02/conjunctions/worksheet1', loadChildren: () => import('./std02-conjunctions-worksheet1/std02-conjunctions-worksheet1.module').then(m => m.Std02ConjunctionsWorksheet1Module)},

      // { path: 'std02/conjunctions/worksheet2', component: Std02ConjunctionsWorksheet2Component},
      { path: 'std02/conjunctions/worksheet2', loadChildren: () => import('./std02-conjunctions-worksheet2/std02-conjunctions-worksheet2.module').then(m => m.Std02ConjunctionsWorksheet2Module)},

      // { path: 'std02/conjunctions/worksheet3', component: Std02ConjunctionsWorksheet3Component},
      { path: 'std02/conjunctions/worksheet3', loadChildren: () => import('./std02-conjunctions-worksheet3/std02-conjunctions-worksheet3.module').then(m => m.Std02ConjunctionsWorksheet3Module)},

      // { path: 'std02/conjunctions/worksheet4', component: Std02ConjunctionsWorksheet4Component},
      { path: 'std02/conjunctions/worksheet4', loadChildren: () => import('./std02-conjunctions-worksheet4/std02-conjunctions-worksheet4.module').then(m => m.Std02ConjunctionsWorksheet4Module)},

      // { path: 'std02/conjunctions/worksheet5', component: Std02ConjunctionsWorksheet5Component},
      { path: 'std02/conjunctions/worksheet5', loadChildren: () => import('./std02-conjunctions-worksheet5/std02-conjunctions-worksheet5.module').then(m => m.Std02ConjunctionsWorksheet5Module)},

      // { path: 'std02/conjunctions/worksheet6', component: Std02ConjunctionsWorksheet6Component},
      { path: 'std02/conjunctions/worksheet6', loadChildren: () => import('./std02-conjunctions-worksheet6/std02-conjunctions-worksheet6.module').then(m => m.Std02ConjunctionsWorksheet6Module)},

      // { path: 'std02/conjunctions/worksheet7', component: Std02ConjunctionsWorksheet7Component},
      { path: 'std02/conjunctions/worksheet7', loadChildren: () => import('./std02-conjunctions-worksheet7/std02-conjunctions-worksheet7.module').then(m => m.Std02ConjunctionsWorksheet7Module)},

      // { path: 'std02/conjunctions/worksheet8', component: Std02ConjunctionsWorksheet8Component},
      { path: 'std02/conjunctions/worksheet8', loadChildren: () => import('./std02-conjunctions-worksheet8/std02-conjunctions-worksheet8.module').then(m => m.Std02ConjunctionsWorksheet8Module)},



      // { path: 'std02/collective-noun/worksheet1', component: Std02CollectiveNounWorksheet1Component},
      { path: 'std02/collective-noun/worksheet1', loadChildren: () => import('./std02-collective-noun-worksheet1/std02-collective-noun-worksheet1.module').then(m => m.Std02CollectiveNounWorksheet1Module)},

      // { path: 'std02/collective-noun/worksheet2', component: Std02CollectiveNounWorksheet2Component},
      { path: 'std02/collective-noun/worksheet2', loadChildren: () => import('./std02-collective-noun-worksheet2/std02-collective-noun-worksheet2.module').then(m => m.Std02CollectiveNounWorksheet2Module)},

      // { path: 'std02/collective-noun/worksheet3', component: Std02CollectiveNounWorksheet3Component},
      { path: 'std02/collective-noun/worksheet3', loadChildren: () => import('./std02-collective-noun-worksheet3/std02-collective-noun-worksheet3.module').then(m => m.Std02CollectiveNounWorksheet3Module)},

      // { path: 'std02/collective-noun/worksheet4', component: Std02CollectiveNounWorksheet4Component},
      { path: 'std02/collective-noun/worksheet4', loadChildren: () => import('./std02-collective-noun-worksheet4/std02-collective-noun-worksheet4.module').then(m => m.Std02CollectiveNounWorksheet4Module)},

      // { path: 'std02/collective-noun/worksheet5', component: Std02CollectiveNounWorksheet5Component},
      { path: 'std02/collective-noun/worksheet5', loadChildren: () => import('./std02-collective-noun-worksheet5/std02-collective-noun-worksheet5.module').then(m => m.Std02CollectiveNounWorksheet5Module)},

      // { path: 'std02/collective-noun/worksheet6', component: Std02CollectiveNounWorksheet6Component},
      { path: 'std02/collective-noun/worksheet6', loadChildren: () => import('./std02-collective-noun-worksheet6/std02-collective-noun-worksheet6.module').then(m => m.Std02CollectiveNounWorksheet6Module)},

      // { path: 'std02/collective-noun/worksheet7', component: Std02CollectiveNounWorksheet7Component},
      { path: 'std02/collective-noun/worksheet7', loadChildren: () => import('./std02-collective-noun-worksheet7/std02-collective-noun-worksheet7.module').then(m => m.Std02CollectiveNounWorksheet7Module)},

      // { path: 'std02/collective-noun/worksheet8', component: Std02CollectiveNounWorksheet8Component},
      { path: 'std02/collective-noun/worksheet8', loadChildren: () => import('./std02-collective-noun-worksheet8/std02-collective-noun-worksheet8.module').then(m => m.Std02CollectiveNounWorksheet8Module)},

      // { path: 'std02/collective-noun/worksheet9', component: Std02CollectiveNounWorksheet9Component},
      { path: 'std02/collective-noun/worksheet9', loadChildren: () => import('./std02-collective-noun-worksheet9/std02-collective-noun-worksheet9.module').then(m => m.Std02CollectiveNounWorksheet9Module)},

      // { path: 'std02/collective-noun/worksheet10', component: Std02CollectiveNounWorksheet10Component},
      { path: 'std02/collective-noun/worksheet10', loadChildren: () => import('./std02-collective-noun-worksheet10/std02-collective-noun-worksheet10.module').then(m => m.Std02CollectiveNounWorksheet10Module)},
      

      // { path: 'std02/common-noun/worksheet1', component: Std02CommonNounWorksheet1Component},
      { path: 'std02/common-noun/worksheet1', loadChildren: () => import('./std02-common-noun-worksheet1/std02-common-noun-worksheet1.module').then(m => m.Std02CommonNounWorksheet1Module)},

      // { path: 'std02/common-noun/worksheet2', component: Std02CommonNounWorksheet2Component},
      { path: 'std02/common-noun/worksheet2', loadChildren: () => import('./std02-common-noun-worksheet2/std02-common-noun-worksheet2.module').then(m => m.Std02CommonNounWorksheet2Module)},

      // { path: 'std02/common-noun/worksheet3', component: Std02CommonNounWorksheet3Component},
      { path: 'std02/common-noun/worksheet3', loadChildren: () => import('./std02-common-noun-worksheet3/std02-common-noun-worksheet3.module').then(m => m.Std02CommonNounWorksheet3Module)},

      // { path: 'std02/common-noun/worksheet4', component: Std02CommonNounWorksheet4Component},
      { path: 'std02/common-noun/worksheet4', loadChildren: () => import('./std02-common-noun-worksheet4/std02-common-noun-worksheet4.module').then(m => m.Std02CommonNounWorksheet4Module)},

      // { path: 'std02/common-noun/worksheet5', component: Std02CommonNounWorksheet5Component},
      { path: 'std02/common-noun/worksheet5', loadChildren: () => import('./std02-common-noun-worksheet5/std02-common-noun-worksheet5.module').then(m => m.Std02CommonNounWorksheet5Module)},
      


      // { path: 'std02/gender-nouns/worksheet1', component: Std02GenderNounsWorksheet1Component},
      { path: 'std02/gender-nouns/worksheet1', loadChildren: () => import('./std02-gender-nouns-worksheet1/std02-gender-nouns-worksheet1.module').then(m => m.Std02GenderNounsWorksheet1Module)},

      // { path: 'std02/gender-nouns/worksheet2', component: Std02GenderNounsWorksheet2Component},
      { path: 'std02/gender-nouns/worksheet2', loadChildren: () => import('./std02-gender-nouns-worksheet2/std02-gender-nouns-worksheet2.module').then(m => m.Std02GenderNounsWorksheet2Module)},

      // { path: 'std02/gender-nouns/worksheet3', component: Std02GenderNounsWorksheet3Component},
      { path: 'std02/gender-nouns/worksheet3', loadChildren: () => import('./std02-gender-nouns-worksheet3/std02-gender-nouns-worksheet3.module').then(m => m.Std02GenderNounsWorksheet3Module)},

      // { path: 'std02/gender-nouns/worksheet4', component: Std02GenderNounsWorksheet4Component},
      { path: 'std02/gender-nouns/worksheet4', loadChildren: () => import('./std02-gender-nouns-worksheet4/std02-gender-nouns-worksheet4.module').then(m => m.Std02GenderNounsWorksheet4Module)},

      // { path: 'std02/gender-nouns/worksheet5', component: Std02GenderNounsWorksheet5Component},
      { path: 'std02/gender-nouns/worksheet5', loadChildren: () => import('./std02-gender-nouns-worksheet5/std02-gender-nouns-worksheet5.module').then(m => m.Std02GenderNounsWorksheet5Module)},

      // { path: 'std02/gender-nouns/worksheet6', component: Std02GenderNounsWorksheet6Component},
      { path: 'std02/gender-nouns/worksheet6', loadChildren: () => import('./std02-gender-nouns-worksheet6/std02-gender-nouns-worksheet6.module').then(m => m.Std02GenderNounsWorksheet6Module)},

      // { path: 'std02/gender-nouns/worksheet7', component: Std02GenderNounsWorksheet7Component},
      { path: 'std02/gender-nouns/worksheet7', loadChildren: () => import('./std02-gender-nouns-worksheet7/std02-gender-nouns-worksheet7.module').then(m => m.Std02GenderNounsWorksheet7Module)},

      // { path: 'std02/gender-nouns/worksheet8', component: Std02GenderNounsWorksheet8Component},
      { path: 'std02/gender-nouns/worksheet8', loadChildren: () => import('./std02-gender-nouns-worksheet8/std02-gender-nouns-worksheet8.module').then(m => m.Std02GenderNounsWorksheet8Module)},

      // { path: 'std02/gender-nouns/worksheet9', component: Std02GenderNounsWorksheet9Component},
      { path: 'std02/gender-nouns/worksheet9', loadChildren: () => import('./std02-gender-nouns-worksheet9/std02-gender-nouns-worksheet9.module').then(m => m.Std02GenderNounsWorksheet9Module)},

      // { path: 'std02/gender-nouns/worksheet10', component: Std02GenderNounsWorksheet10Component},
      { path: 'std02/gender-nouns/worksheet10', loadChildren: () => import('./std02-gender-nouns-worksheet10/std02-gender-nouns-worksheet10.module').then(m => m.Std02GenderNounsWorksheet10Module)},
      


      // { path: 'std02/singular-plural-nouns/worksheet1', component: Std02SingularPluralNounsWorksheet1Component},
      { path: 'std02/singular-plural-nouns/worksheet1', loadChildren: () => import('./std02-singular-plural-nouns-worksheet1/std02-singular-plural-nouns-worksheet1.module').then(m => m.Std02SingularPluralNounsWorksheet1Module)},

      // { path: 'std02/singular-plural-nouns/worksheet2', component: Std02SingularPluralNounsWorksheet2Component},
      { path: 'std02/singular-plural-nouns/worksheet2', loadChildren: () => import('./std02-singular-plural-nouns-worksheet2/std02-singular-plural-nouns-worksheet2.module').then(m => m.Std02SingularPluralNounsWorksheet2Module)},

      // { path: 'std02/singular-plural-nouns/worksheet3', component: Std02SingularPluralNounsWorksheet3Component},
      { path: 'std02/singular-plural-nouns/worksheet3', loadChildren: () => import('./std02-singular-plural-nouns-worksheet3/std02-singular-plural-nouns-worksheet3.module').then(m => m.Std02SingularPluralNounsWorksheet3Module)},

      // { path: 'std02/singular-plural-nouns/worksheet4', component: Std02SingularPluralNounsWorksheet4Component},
      { path: 'std02/singular-plural-nouns/worksheet4', loadChildren: () => import('./std02-singular-plural-nouns-worksheet4/std02-singular-plural-nouns-worksheet4.module').then(m => m.Std02SingularPluralNounsWorksheet4Module)},

      // { path: 'std02/singular-plural-nouns/worksheet5', component: Std02SingularPluralNounsWorksheet5Component},
      { path: 'std02/singular-plural-nouns/worksheet5', loadChildren: () => import('./std02-singular-plural-nouns-worksheet5/std02-singular-plural-nouns-worksheet5.module').then(m => m.Std02SingularPluralNounsWorksheet5Module)},

      // { path: 'std02/singular-plural-nouns/worksheet6', component: Std02SingularPluralNounsWorksheet6Component},
      { path: 'std02/singular-plural-nouns/worksheet6', loadChildren: () => import('./std02-singular-plural-nouns-worksheet6/std02-singular-plural-nouns-worksheet6.module').then(m => m.Std02SingularPluralNounsWorksheet6Module)},

      // { path: 'std02/singular-plural-nouns/worksheet7', component: Std02SingularPluralNounsWorksheet7Component},
      { path: 'std02/singular-plural-nouns/worksheet7', loadChildren: () => import('./std02-singular-plural-nouns-worksheet7/std02-singular-plural-nouns-worksheet7.module').then(m => m.Std02SingularPluralNounsWorksheet7Module)},

      // { path: 'std02/singular-plural-nouns/worksheet8', component: Std02SingularPluralNounsWorksheet8Component},
      { path: 'std02/singular-plural-nouns/worksheet8', loadChildren: () => import('./std02-singular-plural-nouns-worksheet8/std02-singular-plural-nouns-worksheet8.module').then(m => m.Std02SingularPluralNounsWorksheet8Module)},

      // { path: 'std02/singular-plural-nouns/worksheet9', component: Std02SingularPluralNounsWorksheet9Component},
      { path: 'std02/singular-plural-nouns/worksheet9', loadChildren: () => import('./std02-singular-plural-nouns-worksheet9/std02-singular-plural-nouns-worksheet9.module').then(m => m.Std02SingularPluralNounsWorksheet9Module)},

      // { path: 'std02/singular-plural-nouns/worksheet10', component: Std02SingularPluralNounsWorksheet10Component},
      { path: 'std02/singular-plural-nouns/worksheet10', loadChildren: () => import('./std02-singular-plural-nouns-worksheet10/std02-singular-plural-nouns-worksheet10.module').then(m => m.Std02SingularPluralNounsWorksheet10Module)},
      


      // { path: 'std02/demonstrative-pronoun/worksheet1', component: Std02DemonstrativePronounWorksheet1Component},
      { path: 'std02/demonstrative-pronoun/worksheet1', loadChildren: () => import('./std02-demonstrative-pronoun-worksheet1/std02-demonstrative-pronoun-worksheet1.module').then(m => m.Std02DemonstrativePronounWorksheet1Module)},

      // { path: 'std02/demonstrative-pronoun/worksheet2', component: Std02DemonstrativePronounWorksheet2Component},
      { path: 'std02/demonstrative-pronoun/worksheet2', loadChildren: () => import('./std02-demonstrative-pronoun-worksheet2/std02-demonstrative-pronoun-worksheet2.module').then(m => m.Std02DemonstrativePronounWorksheet2Module)},

      // { path: 'std02/demonstrative-pronoun/worksheet3', component: Std02DemonstrativePronounWorksheet3Component},
      { path: 'std02/demonstrative-pronoun/worksheet3', loadChildren: () => import('./std02-demonstrative-pronoun-worksheet3/std02-demonstrative-pronoun-worksheet3.module').then(m => m.Std02DemonstrativePronounWorksheet3Module)},

      // { path: 'std02/demonstrative-pronoun/worksheet4', component: Std02DemonstrativePronounWorksheet4Component},
      { path: 'std02/demonstrative-pronoun/worksheet4', loadChildren: () => import('./std02-demonstrative-pronoun-worksheet4/std02-demonstrative-pronoun-worksheet4.module').then(m => m.Std02DemonstrativePronounWorksheet4Module)},

      // { path: 'std02/demonstrative-pronoun/worksheet5', component: Std02DemonstrativePronounWorksheet5Component},
      { path: 'std02/demonstrative-pronoun/worksheet5', loadChildren: () => import('./std02-demonstrative-pronoun-worksheet5/std02-demonstrative-pronoun-worksheet5.module').then(m => m.Std02DemonstrativePronounWorksheet5Module)},
      


      // { path: 'std02/interrogative-pronouns/worksheet1', component: Std02InterrogativePronounsWorksheet1Component},
      { path: 'std02/interrogative-pronouns/worksheet1', loadChildren: () => import('./std02-interrogative-pronouns-worksheet1/std02-interrogative-pronouns-worksheet1.module').then(m => m.Std02InterrogativePronounsWorksheet1Module)},

      // { path: 'std02/interrogative-pronouns/worksheet2', component: Std02InterrogativePronounsWorksheet2Component},
      { path: 'std02/interrogative-pronouns/worksheet2', loadChildren: () => import('./std02-interrogative-pronouns-worksheet2/std02-interrogative-pronouns-worksheet2.module').then(m => m.Std02InterrogativePronounsWorksheet2Module)},

      // { path: 'std02/interrogative-pronouns/worksheet3', component: Std02InterrogativePronounsWorksheet3Component},
      { path: 'std02/interrogative-pronouns/worksheet3', loadChildren: () => import('./std02-interrogative-pronouns-worksheet3/std02-interrogative-pronouns-worksheet3.module').then(m => m.Std02InterrogativePronounsWorksheet3Module)},

      // { path: 'std02/interrogative-pronouns/worksheet4', component: Std02InterrogativePronounsWorksheet4Component},
      { path: 'std02/interrogative-pronouns/worksheet4', loadChildren: () => import('./std02-interrogative-pronouns-worksheet4/std02-interrogative-pronouns-worksheet4.module').then(m => m.Std02InterrogativePronounsWorksheet4Module)},
      

      // { path: 'std02/personal-pronouns/worksheet1', component: Std02PersonalPronounsWorksheet1Component},
      { path: 'std02/personal-pronouns/worksheet1', loadChildren: () => import('./std02-personal-pronouns-worksheet1/std02-personal-pronouns-worksheet1.module').then(m => m.Std02PersonalPronounsWorksheet1Module)},

      // { path: 'std02/personal-pronouns/worksheet2', component: Std02PersonalPronounsWorksheet2Component},
      { path: 'std02/personal-pronouns/worksheet2', loadChildren: () => import('./std02-personal-pronouns-worksheet2/std02-personal-pronouns-worksheet2.module').then(m => m.Std02PersonalPronounsWorksheet2Module)},

      // { path: 'std02/personal-pronouns/worksheet3', component: Std02PersonalPronounsWorksheet3Component},
      { path: 'std02/personal-pronouns/worksheet3', loadChildren: () => import('./std02-personal-pronouns-worksheet3/std02-personal-pronouns-worksheet3.module').then(m => m.Std02PersonalPronounsWorksheet3Module)},

      // { path: 'std02/personal-pronouns/worksheet4', component: Std02PersonalPronounsWorksheet4Component},
      { path: 'std02/personal-pronouns/worksheet4', loadChildren: () => import('./std02-personal-pronouns-worksheet4/std02-personal-pronouns-worksheet4.module').then(m => m.Std02PersonalPronounsWorksheet4Module)},

      // { path: 'std02/personal-pronouns/worksheet5', component: Std02PersonalPronounsWorksheet5Component},
      { path: 'std02/personal-pronouns/worksheet5', loadChildren: () => import('./std02-personal-pronouns-worksheet5/std02-personal-pronouns-worksheet5.module').then(m => m.Std02PersonalPronounsWorksheet5Module)},
      


      // { path: 'std02/possessive-pronouns/worksheet1', component: Std02PossessivePronounsWorksheet1Component},
      { path: 'std02/possessive-pronouns/worksheet1', loadChildren: () => import('./std02-possessive-pronouns-worksheet1/std02-possessive-pronouns-worksheet1.module').then(m => m.Std02PossessivePronounsWorksheet1Module)},

      // { path: 'std02/possessive-pronouns/worksheet2', component: Std02PossessivePronounsWorksheet2Component},
      { path: 'std02/possessive-pronouns/worksheet2', loadChildren: () => import('./std02-possessive-pronouns-worksheet2/std02-possessive-pronouns-worksheet2.module').then(m => m.Std02PossessivePronounsWorksheet2Module)},

      // { path: 'std02/possessive-pronouns/worksheet3', component: Std02PossessivePronounsWorksheet3Component},
      { path: 'std02/possessive-pronouns/worksheet3', loadChildren: () => import('./std02-possessive-pronouns-worksheet3/std02-possessive-pronouns-worksheet3.module').then(m => m.Std02PossessivePronounsWorksheet3Module)},

      // { path: 'std02/possessive-pronouns/worksheet4', component: Std02PossessivePronounsWorksheet4Component},
      { path: 'std02/possessive-pronouns/worksheet4', loadChildren: () => import('./std02-possessive-pronouns-worksheet4/std02-possessive-pronouns-worksheet4.module').then(m => m.Std02PossessivePronounsWorksheet4Module)},
      


      // { path: 'std02/exclamation/worksheet1', component: Std02ExclamationWorksheet1Component},
      { path: 'std02/exclamation/worksheet1', loadChildren: () => import('./std02-exclamation-worksheet1/std02-exclamation-worksheet1.module').then(m => m.Std02ExclamationWorksheet1Module)},
      

      // { path: 'std02/question-mark/worksheet1', component: Std02QuestionMarkWorksheet1Component},
      { path: 'std02/question-mark/worksheet1', loadChildren: () => import('./std02-question-mark-worksheet1/std02-question-mark-worksheet1.module').then(m => m.Std02QuestionMarkWorksheet1Module)},

      // { path: 'std02/question-mark/worksheet2', component: Std02QuestionMarkWorksheet2Component},
      { path: 'std02/question-mark/worksheet2', loadChildren: () => import('./std02-question-mark-worksheet2/std02-question-mark-worksheet2.module').then(m => m.Std02QuestionMarkWorksheet2Module)},

      // { path: 'std02/question-mark/worksheet3', component: Std02QuestionMarkWorksheet3Component},
      { path: 'std02/question-mark/worksheet3', loadChildren: () => import('./std02-question-mark-worksheet3/std02-question-mark-worksheet3.module').then(m => m.Std02QuestionMarkWorksheet3Module)},
      


      // { path: 'std02/rhyming-words/worksheet1', component: Std02RhymingWordsWorksheet1Component},
      { path: 'std02/rhyming-words/worksheet1', loadChildren: () => import('./std02-rhyming-words-worksheet1/std02-rhyming-words-worksheet1.module').then(m => m.Std02RhymingWordsWorksheet1Module)},

      // { path: 'std02/rhyming-words/worksheet2', component: Std02RhymingWordsWorksheet2Component},
      { path: 'std02/rhyming-words/worksheet2', loadChildren: () => import('./std02-rhyming-words-worksheet2/std02-rhyming-words-worksheet2.module').then(m => m.Std02RhymingWordsWorksheet2Module)},

      // { path: 'std02/rhyming-words/worksheet3', component: Std02RhymingWordsWorksheet3Component},
      { path: 'std02/rhyming-words/worksheet3', loadChildren: () => import('./std02-rhyming-words-worksheet3/std02-rhyming-words-worksheet3.module').then(m => m.Std02RhymingWordsWorksheet3Module)},

      // { path: 'std02/rhyming-words/worksheet4', component: Std02RhymingWordsWorksheet4Component},
      { path: 'std02/rhyming-words/worksheet4', loadChildren: () => import('./std02-rhyming-words-worksheet4/std02-rhyming-words-worksheet4.module').then(m => m.Std02RhymingWordsWorksheet4Module)},

      // { path: 'std02/rhyming-words/worksheet5', component: Std02RhymingWordsWorksheet5Component},
      { path: 'std02/rhyming-words/worksheet5', loadChildren: () => import('./std02-rhyming-words-worksheet5/std02-rhyming-words-worksheet5.module').then(m => m.Std02RhymingWordsWorksheet5Module)},

      // { path: 'std02/rhyming-words/worksheet6', component: Std02RhymingWordsWorksheet6Component},
      { path: 'std02/rhyming-words/worksheet6', loadChildren: () => import('./std02-rhyming-words-worksheet6/std02-rhyming-words-worksheet6.module').then(m => m.Std02RhymingWordsWorksheet6Module)},

      // { path: 'std02/rhyming-words/worksheet7', component: Std02RhymingWordsWorksheet7Component},
      { path: 'std02/rhyming-words/worksheet7', loadChildren: () => import('./std02-rhyming-words-worksheet7/std02-rhyming-words-worksheet7.module').then(m => m.Std02RhymingWordsWorksheet7Module)},

      // { path: 'std02/rhyming-words/worksheet8', component: Std02RhymingWordsWorksheet8Component},
      { path: 'std02/rhyming-words/worksheet8', loadChildren: () => import('./std02-rhyming-words-worksheet8/std02-rhyming-words-worksheet8.module').then(m => m.Std02RhymingWordsWorksheet8Module)},

      // { path: 'std02/rhyming-words/worksheet9', component: Std02RhymingWordsWorksheet9Component},
      { path: 'std02/rhyming-words/worksheet9', loadChildren: () => import('./std02-rhyming-words-worksheet9/std02-rhyming-words-worksheet9.module').then(m => m.Std02RhymingWordsWorksheet9Module)},

      // { path: 'std02/rhyming-words/worksheet10', component: Std02RhymingWordsWorksheet10Component},
      { path: 'std02/rhyming-words/worksheet10', loadChildren: () => import('./std02-rhyming-words-worksheet10/std02-rhyming-words-worksheet10.module').then(m => m.Std02RhymingWordsWorksheet10Module)},

      // { path: 'std02/rhyming-words/worksheet11', component: Std02RhymingWordsWorksheet11Component},
      { path: 'std02/rhyming-words/worksheet11', loadChildren: () => import('./std02-rhyming-words-worksheet11/std02-rhyming-words-worksheet11.module').then(m => m.Std02RhymingWordsWorksheet11Module)},

      // { path: 'std02/rhyming-words/worksheet12', component: Std02RhymingWordsWorksheet12Component},
      { path: 'std02/rhyming-words/worksheet12', loadChildren: () => import('./std02-rhyming-words-worksheet12/std02-rhyming-words-worksheet12.module').then(m => m.Std02RhymingWordsWorksheet12Module)},
      


      // { path: 'std02/mixed-tense/worksheet1', component: Std02MixedTenseWorksheet1Component},
      { path: 'std02/mixed-tense/worksheet1', loadChildren: () => import('./std02-mixed-nouns-worksheet1/std02-mixed-nouns-worksheet1.module').then(m => m.Std02MixedNounsWorksheet1Module)},

      // { path: 'std02/mixed-tense/worksheet2', component: Std02MixedTenseWorksheet2Component},
      { path: 'std02/mixed-tense/worksheet2', loadChildren: () => import('./std02-mixed-nouns-worksheet2/std02-mixed-nouns-worksheet2.module').then(m => m.Std02MixedNounsWorksheet2Module)},

      // { path: 'std02/mixed-tense/worksheet3', component: Std02MixedTenseWorksheet3Component},
      { path: 'std02/mixed-tense/worksheet3', loadChildren: () => import('./std02-mixed-nouns-worksheet3/std02-mixed-nouns-worksheet3.module').then(m => m.Std02MixedNounsWorksheet3Module)},

      // { path: 'std02/mixed-tense/worksheet4', component: Std02MixedTenseWorksheet4Component},
      { path: 'std02/mixed-tense/worksheet4', loadChildren: () => import('./std02-mixed-nouns-worksheet4/std02-mixed-nouns-worksheet4.module').then(m => m.Std02MixedNounsWorksheet4Module)},
      



      // { path: 'std02/present-tense/worksheet1', component: Std02PresentTenseWorksheet1Component},
      { path: 'std02/present-tense/worksheet1', loadChildren: () => import('./std02-present-tense-worksheet1/std02-present-tense-worksheet1.module').then(m => m.Std02PresentTenseWorksheet1Module)},

      // { path: 'std02/present-tense/worksheet2', component: Std02PresentTenseWorksheet2Component},
      { path: 'std02/present-tense/worksheet2', loadChildren: () => import('./std02-present-tense-worksheet2/std02-present-tense-worksheet2.module').then(m => m.Std02PresentTenseWorksheet2Module)},

      // { path: 'std02/present-tense/worksheet3', component: Std02PresentTenseWorksheet3Component},
      { path: 'std02/present-tense/worksheet3', loadChildren: () => import('./std02-present-tense-worksheet3/std02-present-tense-worksheet3.module').then(m => m.Std02PresentTenseWorksheet3Module)},

      // { path: 'std02/present-tense/worksheet4', component: Std02PresentTenseWorksheet4Component},
      { path: 'std02/present-tense/worksheet4', loadChildren: () => import('./std02-present-tense-worksheet4/std02-present-tense-worksheet4.module').then(m => m.Std02PresentTenseWorksheet4Module)},
      


      // { path: 'std02/helping-verbs/worksheet1', component: Std02HelpingVerbsWorksheet1Component},
      { path: 'std02/helping-verbs/worksheet1', loadChildren: () => import('./std02-helping-verbs-worksheet1/std02-helping-verbs-worksheet1.module').then(m => m.Std02HelpingVerbsWorksheet1Module)},

      // { path: 'std02/helping-verbs/worksheet2', component: Std02HelpingVerbsWorksheet2Component},
      { path: 'std02/helping-verbs/worksheet2', loadChildren: () => import('./std02-helping-verbs-worksheet2/std02-helping-verbs-worksheet2.module').then(m => m.Std02HelpingVerbsWorksheet2Module)},

      // { path: 'std02/helping-verbs/worksheet3', component: Std02HelpingVerbsWorksheet3Component},
      { path: 'std02/helping-verbs/worksheet3', loadChildren: () => import('./std02-helping-verbs-worksheet3/std02-helping-verbs-worksheet3.module').then(m => m.Std02HelpingVerbsWorksheet3Module)},

      // { path: 'std02/helping-verbs/worksheet4', component: Std02HelpingVerbsWorksheet4Component},
      { path: 'std02/helping-verbs/worksheet4', loadChildren: () => import('./std02-helping-verbs-worksheet4/std02-helping-verbs-worksheet4.module').then(m => m.Std02HelpingVerbsWorksheet4Module)},

      // { path: 'std02/helping-verbs/worksheet5', component: Std02HelpingVerbsWorksheet5Component},
      { path: 'std02/helping-verbs/worksheet5', loadChildren: () => import('./std02-helping-verbs-worksheet5/std02-helping-verbs-worksheet5.module').then(m => m.Std02HelpingVerbsWorksheet5Module)},



      // { path: 'std02/adverbs/worksheet1', component: Std02AdverbsWorksheet1Component},
      { path: 'std02/adverbs/worksheet1', loadChildren: () => import('./std02-adverbs-worksheet1/std02-adverbs-worksheet1.module').then(m => m.Std02AdverbsWorksheet1Module)},

      // { path: 'std02/adverbs/worksheet2', component: Std02AdverbsWorksheet2Component},
      { path: 'std02/adverbs/worksheet2', loadChildren: () => import('./std02-adverbs-worksheet2/std02-adverbs-worksheet2.module').then(m => m.Std02AdverbsWorksheet2Module)},

      // { path: 'std02/adverbs/worksheet3', component: Std02AdverbsWorksheet3Component},
      { path: 'std02/adverbs/worksheet3', loadChildren: () => import('./std02-adverbs-worksheet3/std02-adverbs-worksheet3.module').then(m => m.Std02AdverbsWorksheet3Module)},

      // { path: 'std02/adverbs/worksheet4', component: Std02AdverbsWorksheet4Component},
      { path: 'std02/adverbs/worksheet4', loadChildren: () => import('./std02-adverbs-worksheet4/std02-adverbs-worksheet4.module').then(m => m.Std02AdverbsWorksheet4Module)},

      // { path: 'std02/adverbs/worksheet5', component: Std02AdverbsWorksheet5Component},
      { path: 'std02/adverbs/worksheet5', loadChildren: () => import('./std02-adverbs-worksheet5/std02-adverbs-worksheet5.module').then(m => m.Std02AdverbsWorksheet5Module)},

      // { path: 'std02/adverbs/worksheet6', component: Std02AdverbsWorksheet6Component},
      { path: 'std02/adverbs/worksheet6', loadChildren: () => import('./std02-adverbs-worksheet6/std02-adverbs-worksheet6.module').then(m => m.Std02AdverbsWorksheet6Module)},

      // { path: 'std02/adverbs/worksheet7', component: Std02AdverbsWorksheet7Component},
      { path: 'std02/adverbs/worksheet7', loadChildren: () => import('./std02-adverbs-worksheet7/std02-adverbs-worksheet7.module').then(m => m.Std02AdverbsWorksheet7Module)},

      // { path: 'std02/adverbs/worksheet8', component: Std02AdverbsWorksheet8Component},
      { path: 'std02/adverbs/worksheet8', loadChildren: () => import('./std02-adverbs-worksheet8/std02-adverbs-worksheet8.module').then(m => m.Std02AdverbsWorksheet8Module)},
      


      // { path: 'std02/apostrophe/worksheet1', component: Std02ApostropheWorksheet1Component},
      { path: 'std02/apostrophe/worksheet1', loadChildren: () => import('./std02-apostrophe-worksheet1/std02-apostrophe-worksheet1.module').then(m => m.Std02ApostropheWorksheet1Module)},

      // { path: 'std02/apostrophe/worksheet2', component: Std02ApostropheWorksheet2Component},
      { path: 'std02/apostrophe/worksheet2', loadChildren: () => import('./std02-apostrophe-worksheet2/std02-apostrophe-worksheet2.module').then(m => m.Std02ApostropheWorksheet2Module)},

      // { path: 'std02/apostrophe/worksheet3', component: Std02ApostropheWorksheet3Component},
      { path: 'std02/apostrophe/worksheet3', loadChildren: () => import('./std02-apostrophe-worksheet3/std02-apostrophe-worksheet3.module').then(m => m.Std02ApostropheWorksheet3Module)},

      // { path: 'std02/apostrophe/worksheet4', component: Std02ApostropheWorksheet4Component},
      { path: 'std02/apostrophe/worksheet4', loadChildren: () => import('./std02-apostrophe-worksheet4/std02-apostrophe-worksheet4.module').then(m => m.Std02ApostropheWorksheet4Module)},
      


      // { path: 'std02/comprehensions/worksheet1', component: Std02ComprehensionsWorksheet1Component},
      { path: 'std02/comprehensions/worksheet1', loadChildren: () => import('./std02-comprehensions-worksheet1/std02-comprehensions-worksheet1.module').then(m => m.Std02ComprehensionsWorksheet1Module)},

      // { path: 'std02/comprehensions/worksheet2', component: Std02ComprehensionsWorksheet2Component},
      { path: 'std02/comprehensions/worksheet2', loadChildren: () => import('./std02-comprehensions-worksheet2/std02-comprehensions-worksheet2.module').then(m => m.Std02ComprehensionsWorksheet2Module)},

      // { path: 'std02/comprehensions/worksheet3', component: Std02ComprehensionsWorksheet3Component},
      { path: 'std02/comprehensions/worksheet3', loadChildren: () => import('./std02-comprehensions-worksheet3/std02-comprehensions-worksheet3.module').then(m => m.Std02ComprehensionsWorksheet3Module)},

      // { path: 'std02/comprehensions/worksheet4', component: Std02ComprehensionsWorksheet4Component},
      { path: 'std02/comprehensions/worksheet4', loadChildren: () => import('./std02-comprehensions-worksheet4/std02-comprehensions-worksheet4.module').then(m => m.Std02ComprehensionsWorksheet4Module)},

      // { path: 'std02/comprehensions/worksheet5', component: Std02ComprehensionsWorksheet5Component},
      { path: 'std02/comprehensions/worksheet5', loadChildren: () => import('./std02-comprehensions-worksheet5/std02-comprehensions-worksheet5.module').then(m => m.Std02ComprehensionsWorksheet5Module)},

      // { path: 'std02/comprehensions/worksheet6', component: Std02ComprehensionsWorksheet6Component},
      { path: 'std02/comprehensions/worksheet6', loadChildren: () => import('./std02-comprehensions-worksheet6/std02-comprehensions-worksheet6.module').then(m => m.Std02ComprehensionsWorksheet6Module)},

      // { path: 'std02/comprehensions/worksheet7', component: Std02ComprehensionsWorksheet7Component},
      { path: 'std02/comprehensions/worksheet7', loadChildren: () => import('./std02-comprehensions-worksheet7/std02-comprehensions-worksheet7.module').then(m => m.Std02ComprehensionsWorksheet7Module)},
      


      /***********************END***********************/
      // { path: 'std03/adjective/quality/worksheet1', component: Std03AdjectivesOfQualityWorksheet1Component},
      { path: 'std03/adjective/quality/worksheet1', loadChildren: () => import('./std03-adjectives-of-quality-worksheet1/std03-adjectives-of-quality-worksheet1.module').then(m => m.Std03AdjectivesOfQualityWorksheet1Module)},

      // { path: 'std03/adjective/quality/worksheet2', component: Std03AdjectivesOfQualityWorksheet2Component},
      { path: 'std03/adjective/quality/worksheet2', loadChildren: () => import('./std03-adjectives-of-quality-worksheet2/std03-adjectives-of-quality-worksheet2.module').then(m => m.Std03AdjectivesOfQualityWorksheet2Module)},
       
      // { path: 'std03/adjective/number/worksheet1', component: Std03AdjectivesOfNumberWorksheet1Component},
      { path: 'std03/adjective/number/worksheet1', loadChildren: () => import('./std03-adjectives-of-number-worksheet1/std03-adjectives-of-number-worksheet1.module').then(m => m.Std03AdjectivesOfNumberWorksheet1Module)},
     
      // { path: 'std03/adjective/number/worksheet2', component: Std03AdjectivesOfNumberWorksheet2Component},
      { path: 'std03/adjective/number/worksheet2', loadChildren: () => import('./std03-adjectives-of-number-worksheet2/std03-adjectives-of-number-worksheet2.module').then(m => m.Std03AdjectivesOfNumberWorksheet2Module)},
      
      // { path: 'std03/adjective/quantity/worksheet1', component: Std03AdjectivesOfQuantityWorksheet1Component},
      { path: 'std03/adjective/quantity/worksheet1', loadChildren: () => import('./std03-adjectives-of-quantity-worksheet1/std03-adjectives-of-quantity-worksheet1.module').then(m => m.Std03AdjectivesOfQuantityWorksheet1Module)},
      
      // { path: 'std03/adjective/quantity/worksheet2', component: Std03AdjectivesOfQuantityWorksheet2Component},
      { path: 'std03/adjective/quantity/worksheet2', loadChildren: () => import('./std03-adjectives-of-quantity-worksheet2/std03-adjectives-of-quantity-worksheet2.module').then(m => m.Std03AdjectivesOfQuantityWorksheet2Module)},
      
      // { path: 'std03/adjective/mixed/worksheet1', component: Std03MixedAdjectivesWorksheet1Component},
      { path: 'std03/adjective/mixed/worksheet1', loadChildren: () => import('./std03-mixed-adjectives-worksheet1/std03-mixed-adjectives-worksheet1.module').then(m => m.Std03MixedAdjectivesWorksheet1Module)},
      
      // { path: 'std03/adjective/mixed/worksheet2', component: Std03MixedAdjectivesWorksheet2Component},
      { path: 'std03/adjective/mixed/worksheet2', loadChildren: () => import('./std03-mixed-adjectives-worksheet2/std03-mixed-adjectives-worksheet2.module').then(m => m.Std03MixedAdjectivesWorksheet2Module)},
      
      // { path: 'std03/adjective/mixed/worksheet3', component: Std03MixedAdjectivesWorksheet3Component},
      { path: 'std03/adjective/mixed/worksheet3', loadChildren: () => import('./std03-mixed-adjectives-worksheet3/std03-mixed-adjectives-worksheet3.module').then(m => m.Std03MixedAdjectivesWorksheet3Module)},

      // { path: 'std03/adjective/mixed/worksheet4', component: Std03MixedAdjectivesWorksheet4Component},
      { path: 'std03/adjective/mixed/worksheet4', loadChildren: () => import('./std03-mixed-adjectives-worksheet4/std03-mixed-adjectives-worksheet4.module').then(m => m.Std03MixedAdjectivesWorksheet4Module)},

      
      // { path: 'std03/degress-of-comparison/worksheet1', component: Std03DegressOfComparisonWorksheet1Component},
      { path: 'std03/degress-of-comparison/worksheet1', loadChildren: () => import('./std03-degress-of-comparison-worksheet1/std03-degress-of-comparison-worksheet1.module').then(m => m.Std03DegressOfComparisonWorksheet1Module)},

      // { path: 'std03/degress-of-comparison/worksheet2', component: Std03DegressOfComparisonWorksheet2Component},
      { path: 'std03/degress-of-comparison/worksheet2', loadChildren: () => import('./std03-degress-of-comparison-worksheet2/std03-degress-of-comparison-worksheet2.module').then(m => m.Std03DegressOfComparisonWorksheet2Module)},
      
      // { path: 'std03/degress-of-comparison/worksheet3', component: Std03DegressOfComparisonWorksheet3Component},
      { path: 'std03/degress-of-comparison/worksheet3', loadChildren: () => import('./std03-degress-of-comparison-worksheet3/std03-degress-of-comparison-worksheet3.module').then(m => m.Std03DegressOfComparisonWorksheet3Module)},
      
      // { path: 'std03/degress-of-comparison/worksheet4', component: Std03DegressOfComparisonWorksheet4Component},
      { path: 'std03/degress-of-comparison/worksheet4', loadChildren: () => import('./std03-degress-of-comparison-worksheet4/std03-degress-of-comparison-worksheet4.module').then(m => m.Std03DegressOfComparisonWorksheet4Module)},
      
      // { path: 'std03/degress-of-comparison/worksheet5', component: Std03DegressOfComparisonWorksheet5Component},
      { path: 'std03/degress-of-comparison/worksheet5', loadChildren: () => import('./std03-degress-of-comparison-worksheet5/std03-degress-of-comparison-worksheet5.module').then(m => m.Std03DegressOfComparisonWorksheet5Module)},
      
      // { path: 'std03/degress-of-comparison/worksheet6', component: Std03DegressOfComparisonWorksheet6Component},
      { path: 'std03/degress-of-comparison/worksheet6', loadChildren: () => import('./std03-degress-of-comparison-worksheet6/std03-degress-of-comparison-worksheet6.module').then(m => m.Std03DegressOfComparisonWorksheet6Module)},
      

      // { path: 'std03/antonyms/worksheet1', component: Std03AntonymsWorksheet1Component},
      { path: 'std03/antonyms/worksheet1', loadChildren: () => import('./std03-antonyms-worksheet1/std03-antonyms-worksheet1.module').then(m => m.Std03AntonymsWorksheet1Module)},

      // { path: 'std03/antonyms/worksheet2', component: Std03AntonymsWorksheet2Component},
      { path: 'std03/antonyms/worksheet2', loadChildren: () => import('./std03-antonyms-worksheet2/std03-antonyms-worksheet2.module').then(m => m.Std03AntonymsWorksheet2Module)},
      
      // { path: 'std03/antonyms/worksheet3', component: Std03AntonymsWorksheet3Component},
      { path: 'std03/antonyms/worksheet3', loadChildren: () => import('./std03-antonyms-worksheet3/std03-antonyms-worksheet3.module').then(m => m.Std03AntonymsWorksheet3Module)},
      
      // { path: 'std03/antonyms/worksheet4', component: Std03AntonymsWorksheet4Component},
      { path: 'std03/antonyms/worksheet4', loadChildren: () => import('./std03-antonyms-worksheet4/std03-antonyms-worksheet4.module').then(m => m.Std03AntonymsWorksheet4Module)},
      
      // { path: 'std03/antonyms/worksheet5', component: Std03AntonymsWorksheet5Component},
      { path: 'std03/antonyms/worksheet5', loadChildren: () => import('./std03-antonyms-worksheet5/std03-antonyms-worksheet5.module').then(m => m.Std03AntonymsWorksheet5Module)},
      
      // { path: 'std03/antonyms/worksheet6', component: Std03AntonymsWorksheet6Component},
      { path: 'std03/antonyms/worksheet6', loadChildren: () => import('./std03-antonyms-worksheet6/std03-antonyms-worksheet6.module').then(m => m.Std03AntonymsWorksheet6Module)},
            
      // { path: 'std03/antonyms/worksheet7', component: Std03AntonymsWorksheet7Component},
      { path: 'std03/antonyms/worksheet7', loadChildren: () => import('./std03-antonyms-worksheet7/std03-antonyms-worksheet7.module').then(m => m.Std03AntonymsWorksheet7Module)},
      
      // { path: 'std03/antonyms/worksheet8', component: Std03AntonymsWorksheet8Component},
      { path: 'std03/antonyms/worksheet8', loadChildren: () => import('./std03-antonyms-worksheet8/std03-antonyms-worksheet8.module').then(m => m.Std03AntonymsWorksheet8Module)},
      
      // { path: 'std03/antonyms/worksheet9', component: Std03AntonymsWorksheet9Component},
      { path: 'std03/antonyms/worksheet9', loadChildren: () => import('./std03-antonyms-worksheet9/std03-antonyms-worksheet9.module').then(m => m.Std03AntonymsWorksheet9Module)},
      
      // { path: 'std03/antonyms/worksheet10', component: Std03AntonymsWorksheet10Component},
      { path: 'std03/antonyms/worksheet10', loadChildren: () => import('./std03-antonyms-worksheet10/std03-antonyms-worksheet10.module').then(m => m.Std03AntonymsWorksheet10Module)},
      
      ///KIrannnnnnnnnnnnnnnnnnnnnnn/////
      // { path: 'std03/articles/worksheet1', component: Std03ArticlesWorksheet1Component},
      { path: 'std03/articles/worksheet1', loadChildren: () => import('./std03-articles-worksheet1/std03-articles-worksheet1.module').then(m => m.Std03ArticlesWorksheet1Module)},

      // { path: 'std03/articles/worksheet2', component: Std03ArticlesWorksheet2Component},
      { path: 'std03/articles/worksheet2', loadChildren: () => import('./std03-articles-worksheet2/std03-articles-worksheet2.module').then(m => m.Std03ArticlesWorksheet2Module)},

      // { path: 'std03/articles/worksheet3', component: Std03ArticlesWorksheet3Component},
      { path: 'std03/articles/worksheet3', loadChildren: () => import('./std03-articles-worksheet3/std03-articles-worksheet3.module').then(m => m.Std03ArticlesWorksheet3Module)},
     
      // { path: 'std03/articles/worksheet4', component: Std03ArticlesWorksheet4Component},
      { path: 'std03/articles/worksheet4', loadChildren: () => import('./std03-articles-worksheet4/std03-articles-worksheet4.module').then(m => m.Std03ArticlesWorksheet4Module)},
      
      // { path: 'std03/articles/worksheet5', component: Std03ArticlesWorksheet5Component},
      { path: 'std03/articles/worksheet5', loadChildren: () => import('./std03-articles-worksheet5/std03-articles-worksheet5.module').then(m => m.Std03ArticlesWorksheet5Module)},
      
      // { path: 'std03/articles/worksheet6', component: Std03ArticlesWorksheet6Component},
      { path: 'std03/articles/worksheet6', loadChildren: () => import('./std03-articles-worksheet6/std03-articles-worksheet6.module').then(m => m.Std03ArticlesWorksheet6Module)},
      
      // { path: 'std03/articles/worksheet7', component: Std03ArticlesWorksheet7Component},
      { path: 'std03/articles/worksheet7', loadChildren: () => import('./std03-articles-worksheet7/std03-articles-worksheet7.module').then(m => m.Std03ArticlesWorksheet7Module)},
      
      // { path: 'std03/articles/worksheet8', component: Std03ArticlesWorksheet8Component},
      { path: 'std03/articles/worksheet8', loadChildren: () => import('./std03-articles-worksheet8/std03-articles-worksheet8.module').then(m => m.Std03ArticlesWorksheet8Module)},
      
      // { path: 'std03/articles/worksheet9', component: Std03ArticlesWorksheet9Component},
      { path: 'std03/articles/worksheet9', loadChildren: () => import('./std03-articles-worksheet9/std03-articles-worksheet9.module').then(m => m.Std03ArticlesWorksheet9Module)},
      
      // { path: 'std03/articles/worksheet10', component: Std03ArticlesWorksheet10Component},
      { path: 'std03/articles/worksheet10', loadChildren: () => import('./std03-articles-worksheet10/std03-articles-worksheet10.module').then(m => m.Std03ArticlesWorksheet10Module)},
      

      // { path: 'std03/compound-word/worksheet1', component: Std03CompoundWordWorksheet1Component},
      
      { path: 'std03/compound-word/worksheet1', loadChildren: () => import('./std03-compound-word-worksheet1/std03-compound-word-worksheet1.module').then(m => m.Std03CompoundWordWorksheet1Module)},
      // { path: 'std03/compound-word/worksheet2', component: Std03CompoundWordWorksheet2Component},
      { path: 'std03/compound-word/worksheet2', loadChildren: () => import('./std03-compound-word-worksheet2/std03-compound-word-worksheet2.module').then(m => m.Std03CompoundWordWorksheet2Module)},
      
      // { path: 'std03/compound-word/worksheet3', component: Std03CompoundWordWorksheet3Component},
      { path: 'std03/compound-word/worksheet3', loadChildren: () => import('./std03-compound-word-worksheet3/std03-compound-word-worksheet3.module').then(m => m.Std03CompoundWordWorksheet3Module)},
      
      // { path: 'std03/compound-word/worksheet4', component: Std03CompoundWordWorksheet4Component},
      { path: 'std03/compound-word/worksheet4', loadChildren: () => import('./std03-compound-word-worksheet4/std03-compound-word-worksheet4.module').then(m => m.Std03CompoundWordWorksheet4Module)},
      
      // { path: 'std03/compound-word/worksheet5', component: Std03CompoundWordWorksheet5Component},
      { path: 'std03/compound-word/worksheet5', loadChildren: () => import('./std03-compound-word-worksheet5/std03-compound-word-worksheet5.module').then(m => m.Std03CompoundWordWorksheet5Module)},
      
      // { path: 'std03/compound-word/worksheet6', component: Std03CompoundWordWorksheet6Component},
      { path: 'std03/compound-word/worksheet6', loadChildren: () => import('./std03-compound-word-worksheet6/std03-compound-word-worksheet6.module').then(m => m.Std03CompoundWordWorksheet6Module)},
      
      // { path: 'std03/compound-word/worksheet7', component: Std03CompoundWordWorksheet7Component},
      { path: 'std03/compound-word/worksheet7', loadChildren: () => import('./std03-compound-word-worksheet7/std03-compound-word-worksheet7.module').then(m => m.Std03CompoundWordWorksheet7Module)},
      
      // { path: 'std03/compound-word/worksheet8', component: Std03CompoundWordWorksheet8Component},
      { path: 'std03/compound-word/worksheet8', loadChildren: () => import('./std03-compound-word-worksheet8/std03-compound-word-worksheet8.module').then(m => m.Std03CompoundWordWorksheet8Module)},
      
      // { path: 'std03/compound-word/worksheet9', component: Std03CompoundWordWorksheet9Component},
      { path: 'std03/compound-word/worksheet9', loadChildren: () => import('./std03-compound-word-worksheet9/std03-compound-word-worksheet9.module').then(m => m.Std03CompoundWordWorksheet9Module)},
      
      // { path: 'std03/compound-word/worksheet10', component: Std03CompoundWordWorksheet10Component},
      { path: 'std03/compound-word/worksheet10', loadChildren: () => import('./std03-compound-word-worksheet10/std03-compound-word-worksheet10.module').then(m => m.Std03CompoundWordWorksheet10Module)},
      
      
      // { path: 'std03/conjunctions/worksheet1', component: Std03ConjunctionsWorksheet1Component},
      { path: 'std03/conjunctions/worksheet1', loadChildren: () => import('./std03-conjunctions-worksheet1/std03-conjunctions-worksheet1.module').then(m => m.Std03ConjunctionsWorksheet1Module)},
      
      // { path: 'std03/conjunctions/worksheet2', component: Std03ConjunctionsWorksheet2Component},
      { path: 'std03/conjunctions/worksheet2', loadChildren: () => import('./std03-conjunctions-worksheet2/std03-conjunctions-worksheet2.module').then(m => m.Std03ConjunctionsWorksheet2Module)},
      
      // { path: 'std03/conjunctions/worksheet3', component: Std03ConjunctionsWorksheet3Component},
      { path: 'std03/conjunctions/worksheet3', loadChildren: () => import('./std03-conjunctions-worksheet3/std03-conjunctions-worksheet3.module').then(m => m.Std03ConjunctionsWorksheet3Module)},
      
      // { path: 'std03/conjunctions/worksheet4', component: Std03ConjunctionsWorksheet4Component},
      { path: 'std03/conjunctions/worksheet4', loadChildren: () => import('./std03-conjunctions-worksheet4/std03-conjunctions-worksheet4.module').then(m => m.Std03ConjunctionsWorksheet4Module)},
      
      // { path: 'std03/conjunctions/worksheet5', component: Std03ConjunctionsWorksheet5Component},
      { path: 'std03/conjunctions/worksheet5', loadChildren: () => import('./std03-conjunctions-worksheet5/std03-conjunctions-worksheet5.module').then(m => m.Std03ConjunctionsWorksheet5Module)},
      
      // { path: 'std03/conjunctions/worksheet6', component: Std03ConjunctionsWorksheet6Component},
      { path: 'std03/conjunctions/worksheet6', loadChildren: () => import('./std03-conjunctions-worksheet6/std03-conjunctions-worksheet6.module').then(m => m.Std03ConjunctionsWorksheet6Module)},
      
      // { path: 'std03/conjunctions/worksheet7', component: Std03ConjunctionsWorksheet7Component},
      { path: 'std03/conjunctions/worksheet7', loadChildren: () => import('./std03-conjunctions-worksheet7/std03-conjunctions-worksheet7.module').then(m => m.Std03ConjunctionsWorksheet7Module)},
      
      // { path: 'std03/conjunctions/worksheet8', component: Std03ConjunctionsWorksheet8Component},
      { path: 'std03/conjunctions/worksheet8', loadChildren: () => import('./std03-conjunctions-worksheet8/std03-conjunctions-worksheet8.module').then(m => m.Std03ConjunctionsWorksheet8Module)},
      
      // { path: 'std03/conjunctions/worksheet9', component: Std03ConjunctionsWorksheet9Component},
      { path: 'std03/conjunctions/worksheet9', loadChildren: () => import('./std03-conjunctions-worksheet9/std03-conjunctions-worksheet9.module').then(m => m.Std03ConjunctionsWorksheet9Module)},
      
      // { path: 'std03/conjunctions/worksheet10', component: Std03ConjunctionsWorksheet10Component},
      { path: 'std03/conjunctions/worksheet10', loadChildren: () => import('./std03-conjunctions-worksheet10/std03-conjunctions-worksheet10.module').then(m => m.Std03ConjunctionsWorksheet10Module)},
      

      // { path: 'std03/homophones/worksheet1', component: Std03HomophonesWorksheet1Component},
      { path: 'std03/homophones/worksheet1', loadChildren: () => import('./std03-homophones-worksheet1/std03-homophones-worksheet1.module').then(m => m.Std03HomophonesWorksheet1Module)},
      
      // { path: 'std03/homophones/worksheet2', component: Std03HomophonesWorksheet2Component},
      { path: 'std03/homophones/worksheet2', loadChildren: () => import('./std03-homophones-worksheet2/std03-homophones-worksheet2.module').then(m => m.Std03HomophonesWorksheet2Module)},
      
      // { path: 'std03/homophones/worksheet3', component: Std03HomophonesWorksheet3Component},
      { path: 'std03/homophones/worksheet3', loadChildren: () => import('./std03-homophones-worksheet3/std03-homophones-worksheet3.module').then(m => m.Std03HomophonesWorksheet3Module)},
      
      // { path: 'std03/homophones/worksheet4', component: Std03HomophonesWorksheet4Component},
      { path: 'std03/homophones/worksheet4', loadChildren: () => import('./std03-homophones-worksheet4/std03-homophones-worksheet4.module').then(m => m.Std03HomophonesWorksheet4Module)},
      
      // { path: 'std03/homophones/worksheet5', component: Std03HomophonesWorksheet5Component},
      { path: 'std03/homophones/worksheet5', loadChildren: () => import('./std03-homophones-worksheet5/std03-homophones-worksheet5.module').then(m => m.Std03HomophonesWorksheet5Module)},
      
      // { path: 'std03/homophones/worksheet6', component: Std03HomophonesWorksheet6Component},
      { path: 'std03/homophones/worksheet6', loadChildren: () => import('./std03-homophones-worksheet6/std03-homophones-worksheet6.module').then(m => m.Std03HomophonesWorksheet6Module)},
      
      // { path: 'std03/homophones/worksheet7', component: Std03HomophonesWorksheet7Component},
      { path: 'std03/homophones/worksheet7', loadChildren: () => import('./std03-homophones-worksheet7/std03-homophones-worksheet7.module').then(m => m.Std03HomophonesWorksheet7Module)},
      
      // { path: 'std03/homophones/worksheet8', component: Std03HomophonesWorksheet8Component},
      { path: 'std03/homophones/worksheet8', loadChildren: () => import('./std03-homophones-worksheet8/std03-homophones-worksheet8.module').then(m => m.Std03HomophonesWorksheet8Module)},
      
      // { path: 'std03/homophones/worksheet9', component: Std03HomophonesWorksheet9Component},
      { path: 'std03/homophones/worksheet9', loadChildren: () => import('./std03-homophones-worksheet9/std03-homophones-worksheet9.module').then(m => m.Std03HomophonesWorksheet9Module)},
      
      // { path: 'std03/homophones/worksheet10', component: Std03HomophonesWorksheet10Component},
      { path: 'std03/homophones/worksheet10', loadChildren: () => import('./std03-homophones-worksheet10/std03-homophones-worksheet10.module').then(m => m.Std03HomophonesWorksheet10Module)},
      

      // { path: 'std03/common-noun/worksheet1', component: Std03CommonNounWorksheet1Component},
      
      { path: 'std03/common-noun/worksheet1', loadChildren: () => import('./std03-common-noun-worksheet1/std03-common-noun-worksheet1.module').then(m => m.Std03CommonNounWorksheet1Module)},
      // { path: 'std03/common-noun/worksheet2', component: Std03CommonNounWorksheet2Component},
      
      { path: 'std03/common-noun/worksheet2', loadChildren: () => import('./std03-common-noun-worksheet2/std03-common-noun-worksheet2.module').then(m => m.Std03CommonNounWorksheet2Module)},
      // { path: 'std03/common-noun/worksheet3', component: Std03CommonNounWorksheet3Component},
      { path: 'std03/common-noun/worksheet3', loadChildren: () => import('./std03-common-noun-worksheet3/std03-common-noun-worksheet3.module').then(m => m.Std03CommonNounWorksheet3Module)},
      
      // { path: 'std03/common-noun/worksheet4', component: Std03CommonNounWorksheet4Component},
      { path: 'std03/common-noun/worksheet4', loadChildren: () => import('./std03-common-noun-worksheet4/std03-common-noun-worksheet4.module').then(m => m.Std03CommonNounWorksheet4Module)},
      
      // { path: 'std03/common-noun/worksheet5', component: Std03CommonNounWorksheet5Component},
      { path: 'std03/common-noun/worksheet5', loadChildren: () => import('./std03-common-noun-worksheet5/std03-common-noun-worksheet5.module').then(m => m.Std03CommonNounWorksheet5Module)},
      
      
      // { path: 'std03/collective-noun/worksheet1', component: Std03CollectiveNounWorksheet1Component},
      { path: 'std03/collective-noun/worksheet1', loadChildren: () => import('./std03-collective-noun-worksheet1/std03-collective-noun-worksheet1.module').then(m => m.Std03CollectiveNounWorksheet1Module)},
      
      // { path: 'std03/collective-noun/worksheet2', component: Std03CollectiveNounWorksheet2Component},
      { path: 'std03/collective-noun/worksheet2', loadChildren: () => import('./std03-collective-noun-worksheet2/std03-collective-noun-worksheet2.module').then(m => m.Std03CollectiveNounWorksheet2Module)},
      
      // { path: 'std03/collective-noun/worksheet3', component: Std03CollectiveNounWorksheet3Component},
      { path: 'std03/collective-noun/worksheet3', loadChildren: () => import('./std03-collective-noun-worksheet3/std03-collective-noun-worksheet3.module').then(m => m.Std03CollectiveNounWorksheet3Module)},
      
      // { path: 'std03/collective-noun/worksheet4', component: Std03CollectiveNounWorksheet4Component},
      { path: 'std03/collective-noun/worksheet4', loadChildren: () => import('./std03-collective-noun-worksheet4/std03-collective-noun-worksheet4.module').then(m => m.Std03CollectiveNounWorksheet4Module)},
      
      // { path: 'std03/collective-noun/worksheet5', component: Std03CollectiveNounWorksheet5Component},
      { path: 'std03/collective-noun/worksheet5', loadChildren: () => import('./std03-collective-noun-worksheet5/std03-collective-noun-worksheet5.module').then(m => m.Std03CollectiveNounWorksheet5Module)},
      
      // { path: 'std03/collective-noun/worksheet6', component: Std03CollectiveNounWorksheet6Component},
      { path: 'std03/collective-noun/worksheet6', loadChildren: () => import('./std03-collective-noun-worksheet6/std03-collective-noun-worksheet6.module').then(m => m.Std03CollectiveNounWorksheet6Module)},
      
      // { path: 'std03/collective-noun/worksheet7', component: Std03CollectiveNounWorksheet7Component},
      { path: 'std03/collective-noun/worksheet7', loadChildren: () => import('./std03-collective-noun-worksheet7/std03-collective-noun-worksheet7.module').then(m => m.Std03CollectiveNounWorksheet7Module)},
      
      // { path: 'std03/collective-noun/worksheet8', component: Std03CollectiveNounWorksheet8Component},
      { path: 'std03/collective-noun/worksheet8', loadChildren: () => import('./std03-collective-noun-worksheet8/std03-collective-noun-worksheet8.module').then(m => m.Std03CollectiveNounWorksheet8Module)},
      
      // { path: 'std03/collective-noun/worksheet9', component: Std03CollectiveNounWorksheet9Component},
      { path: 'std03/collective-noun/worksheet9', loadChildren: () => import('./std03-collective-noun-worksheet9/std03-collective-noun-worksheet9.module').then(m => m.Std03CollectiveNounWorksheet9Module)},
      
      // { path: 'std03/collective-noun/worksheet10', component: Std03CollectiveNounWorksheet10Component},
      { path: 'std03/collective-noun/worksheet10', loadChildren: () => import('./std03-collective-noun-worksheet10/std03-collective-noun-worksheet10.module').then(m => m.Std03CollectiveNounWorksheet10Module)},
      

      // { path: 'std03/gender-nouns/worksheet1', component: Std03GenderNounsWorksheet1Component},
      { path: 'std03/gender-nouns/worksheet1', loadChildren: () => import('./std03-gender-nouns-worksheet1/std03-gender-nouns-worksheet1.module').then(m => m.Std03GenderNounsWorksheet1Module)},
      
      // { path: 'std03/gender-nouns/worksheet2', component: Std03GenderNounsWorksheet2Component},
      { path: 'std03/gender-nouns/worksheet2', loadChildren: () => import('./std03-gender-nouns-worksheet2/std03-gender-nouns-worksheet2.module').then(m => m.Std03GenderNounsWorksheet2Module)},
      
      // { path: 'std03/gender-nouns/worksheet3', component: Std03GenderNounsWorksheet3Component},
      { path: 'std03/gender-nouns/worksheet3', loadChildren: () => import('./std03-gender-nouns-worksheet3/std03-gender-nouns-worksheet3.module').then(m => m.Std03GenderNounsWorksheet3Module)},
      
      // { path: 'std03/gender-nouns/worksheet4', component: Std03GenderNounsWorksheet4Component},
      { path: 'std03/gender-nouns/worksheet4', loadChildren: () => import('./std03-gender-nouns-worksheet4/std03-gender-nouns-worksheet4.module').then(m => m.Std03GenderNounsWorksheet4Module)},
      
      // { path: 'std03/gender-nouns/worksheet5', component: Std03GenderNounsWorksheet5Component},
      { path: 'std03/gender-nouns/worksheet5', loadChildren: () => import('./std03-gender-nouns-worksheet5/std03-gender-nouns-worksheet5.module').then(m => m.Std03GenderNounsWorksheet5Module)},
      
      // { path: 'std03/gender-nouns/worksheet6', component: Std03GenderNounsWorksheet6Component},
      { path: 'std03/gender-nouns/worksheet6', loadChildren: () => import('./std03-gender-nouns-worksheet6/std03-gender-nouns-worksheet6.module').then(m => m.Std03GenderNounsWorksheet6Module)},
      
      // { path: 'std03/gender-nouns/worksheet7', component: Std03GenderNounsWorksheet7Component},
      { path: 'std03/gender-nouns/worksheet7', loadChildren: () => import('./std03-gender-nouns-worksheet7/std03-gender-nouns-worksheet7.module').then(m => m.Std03GenderNounsWorksheet7Module)},
      
      // { path: 'std03/gender-nouns/worksheet8', component: Std03GenderNounsWorksheet8Component},
      { path: 'std03/gender-nouns/worksheet8', loadChildren: () => import('./std03-gender-nouns-worksheet8/std03-gender-nouns-worksheet8.module').then(m => m.Std03GenderNounsWorksheet8Module)},
      
      // { path: 'std03/gender-nouns/worksheet9', component: Std03GenderNounsWorksheet9Component},
      { path: 'std03/gender-nouns/worksheet9', loadChildren: () => import('./std03-gender-nouns-worksheet9/std03-gender-nouns-worksheet9.module').then(m => m.Std03GenderNounsWorksheet9Module)},
      
      // { path: 'std03/gender-nouns/worksheet10', component: Std03GenderNounsWorksheet10Component},
      { path: 'std03/gender-nouns/worksheet10', loadChildren: () => import('./std03-gender-nouns-worksheet10/std03-gender-nouns-worksheet10.module').then(m => m.Std03GenderNounsWorksheet10Module)},
      

      // { path: 'std03/proper-noun/worksheet1', component: Std03ProperNounWorksheet1Component},
      { path: 'std03/proper-noun/worksheet1', loadChildren: () => import('./std03-proper-noun-worksheet1/std03-proper-noun-worksheet1.module').then(m => m.Std03ProperNounWorksheet1Module)},
      
      // { path: 'std03/proper-noun/worksheet2', component: Std03ProperNounWorksheet2Component},
      { path: 'std03/proper-noun/worksheet2', loadChildren: () => import('./std03-proper-noun-worksheet2/std03-proper-noun-worksheet2.module').then(m => m.Std03ProperNounWorksheet2Module)},
      
      // { path: 'std03/proper-noun/worksheet3', component: Std03ProperNounWorksheet3Component},
      { path: 'std03/proper-noun/worksheet3', loadChildren: () => import('./std03-proper-noun-worksheet3/std03-proper-noun-worksheet3.module').then(m => m.Std03ProperNounWorksheet3Module)},
      
      // { path: 'std03/proper-noun/worksheet4', component: Std03ProperNounWorksheet4Component},
      { path: 'std03/proper-noun/worksheet4', loadChildren: () => import('./std03-proper-noun-worksheet4/std03-proper-noun-worksheet4.module').then(m => m.Std03ProperNounWorksheet4Module)},
      

      // { path: 'std03/mixed-noun/worksheet1', component: Std03MixedNounWorksheet1Component},
      { path: 'std03/mixed-noun/worksheet1', loadChildren: () => import('./std03-mixed-noun-worksheet1/std03-mixed-noun-worksheet1.module').then(m => m.Std03MixedNounWorksheet1Module)},
      
      // { path: 'std03/mixed-noun/worksheet2', component: Std03MixedNounWorksheet2Component},
      { path: 'std03/mixed-noun/worksheet2', loadChildren: () => import('./std03-mixed-noun-worksheet2/std03-mixed-noun-worksheet2.module').then(m => m.Std03MixedNounWorksheet2Module)},
      
      // { path: 'std03/mixed-noun/worksheet3', component: Std03MixedNounWorksheet3Component},
      { path: 'std03/mixed-noun/worksheet3', loadChildren: () => import('./std03-mixed-noun-worksheet3/std03-mixed-noun-worksheet3.module').then(m => m.Std03MixedNounWorksheet3Module)},
      
      // { path: 'std03/mixed-noun/worksheet4', component: Std03MixedNounWorksheet4Component},
      { path: 'std03/mixed-noun/worksheet4', loadChildren: () => import('./std03-mixed-noun-worksheet4/std03-mixed-noun-worksheet4.module').then(m => m.Std03MixedNounWorksheet4Module)},
      

      // { path: 'std03/singular-plural-nouns/worksheet1', component: Std03SingularPluralNounsWorksheet1Component},
      
      { path: 'std03/singular-plural-nouns/worksheet1', loadChildren: () => import('./std03-singular-plural-nouns-worksheet1/std03-singular-plural-nouns-worksheet1.module').then(m => m.Std03SingularPluralNounsWorksheet1Module)},
      // { path: 'std03/singular-plural-nouns/worksheet2', component: Std03SingularPluralNounsWorksheet2Component},
      { path: 'std03/singular-plural-nouns/worksheet2', loadChildren: () => import('./std03-singular-plural-nouns-worksheet2/std03-singular-plural-nouns-worksheet2.module').then(m => m.Std03SingularPluralNounsWorksheet2Module)},
      
      // { path: 'std03/singular-plural-nouns/worksheet3', component: Std03SingularPluralNounsWorksheet3Component},
      { path: 'std03/singular-plural-nouns/worksheet3', loadChildren: () => import('./std03-singular-plural-nouns-worksheet3/std03-singular-plural-nouns-worksheet3.module').then(m => m.Std03SingularPluralNounsWorksheet3Module)},
      
      // { path: 'std03/singular-plural-nouns/worksheet4', component: Std03SingularPluralNounsWorksheet4Component},
      { path: 'std03/singular-plural-nouns/worksheet4', loadChildren: () => import('./std03-singular-plural-nouns-worksheet4/std03-singular-plural-nouns-worksheet4.module').then(m => m.Std03SingularPluralNounsWorksheet4Module)},
      
      // { path: 'std03/singular-plural-nouns/worksheet5', component: Std03SingularPluralNounsWorksheet5Component},
      { path: 'std03/singular-plural-nouns/worksheet5', loadChildren: () => import('./std03-singular-plural-nouns-worksheet5/std03-singular-plural-nouns-worksheet5.module').then(m => m.Std03SingularPluralNounsWorksheet5Module)},
      
      // { path: 'std03/singular-plural-nouns/worksheet6', component: Std03SingularPluralNounsWorksheet6Component},
      { path: 'std03/singular-plural-nouns/worksheet6', loadChildren: () => import('./std03-singular-plural-nouns-worksheet6/std03-singular-plural-nouns-worksheet6.module').then(m => m.Std03SingularPluralNounsWorksheet6Module)},
      
      // { path: 'std03/singular-plural-nouns/worksheet7', component: Std03SingularPluralNounsWorksheet7Component},
      { path: 'std03/singular-plural-nouns/worksheet7', loadChildren: () => import('./std03-singular-plural-nouns-worksheet7/std03-singular-plural-nouns-worksheet7.module').then(m => m.Std03SingularPluralNounsWorksheet7Module)},
      
      // { path: 'std03/singular-plural-nouns/worksheet8', component: Std03SingularPluralNounsWorksheet8Component},
      { path: 'std03/singular-plural-nouns/worksheet8', loadChildren: () => import('./std03-singular-plural-nouns-worksheet8/std03-singular-plural-nouns-worksheet8.module').then(m => m.Std03SingularPluralNounsWorksheet8Module)},
      

      // { path: 'std03/demonstrative-pronoun/worksheet1', component: Std03DemonstrativePronounWorksheet1Component},
      { path: 'std03/demonstrative-pronoun/worksheet1', loadChildren: () => import('./std03-demonstrative-pronoun-worksheet1/std03-demonstrative-pronoun-worksheet1.module').then(m => m.Std03DemonstrativePronounWorksheet1Module)},
      
      // { path: 'std03/demonstrative-pronoun/worksheet2', component: Std03DemonstrativePronounWorksheet2Component},
      { path: 'std03/demonstrative-pronoun/worksheet2', loadChildren: () => import('./std03-demonstrative-pronoun-worksheet2/std03-demonstrative-pronoun-worksheet2.module').then(m => m.Std03DemonstrativePronounWorksheet2Module)},
      

      // { path: 'std03/interrogative-pronouns/worksheet1', component: Std03InterrogativePronounsWorksheet1Component},
      
      { path: 'std03/interrogative-pronouns/worksheet1', loadChildren: () => import('./std03-interrogative-pronouns-worksheet1/std03-interrogative-pronouns-worksheet1.module').then(m => m.Std03InterrogativePronounsWorksheet1Module)},
      // { path: 'std03/interrogative-pronouns/worksheet2', component: Std03InterrogativePronounsWorksheet2Component},
      { path: 'std03/interrogative-pronouns/worksheet2', loadChildren: () => import('./std03-interrogative-pronouns-worksheet2/std03-interrogative-pronouns-worksheet2.module').then(m => m.Std03InterrogativePronounsWorksheet2Module)},
      

      // { path: 'std03/prepositions/worksheet1', component: Std03PrepositionsWorksheet1Component},
      
      { path: 'std03/prepositions/worksheet1', loadChildren: () => import('./std03-prepositions-worksheet1/std03-prepositions-worksheet1.module').then(m => m.Std03PrepositionsWorksheet1Module)},
      // { path: 'std03/prepositions/worksheet2', component: Std03PrepositionsWorksheet2Component},
      
      { path: 'std03/prepositions/worksheet2', loadChildren: () => import('./std03-prepositions-worksheet2/std03-prepositions-worksheet2.module').then(m => m.Std03PrepositionsWorksheet2Module)},
      // { path: 'std03/prepositions/worksheet3', component: Std03PrepositionsWorksheet3Component},
      
      { path: 'std03/prepositions/worksheet3', loadChildren: () => import('./std03-prepositions-worksheet3/std03-prepositions-worksheet3.module').then(m => m.Std03PrepositionsWorksheet3Module)},
      // { path: 'std03/prepositions/worksheet4', component: Std03PrepositionsWorksheet4Component},
      
      { path: 'std03/prepositions/worksheet4', loadChildren: () => import('./std03-prepositions-worksheet4/std03-prepositions-worksheet4.module').then(m => m.Std03PrepositionsWorksheet4Module)},
      // { path: 'std03/prepositions/worksheet5', component: Std03PrepositionsWorksheet5Component},
      
      { path: 'std03/prepositions/worksheet5', loadChildren: () => import('./std03-prepositions-worksheet5/std03-prepositions-worksheet5.module').then(m => m.Std03PrepositionsWorksheet5Module)},
      // { path: 'std03/prepositions/worksheet6', component: Std03PrepositionsWorksheet6Component},
      { path: 'std03/prepositions/worksheet6', loadChildren: () => import('./std03-prepositions-worksheet6/std03-prepositions-worksheet6.module').then(m => m.Std03PrepositionsWorksheet6Module)},
      
      // { path: 'std03/prepositions/worksheet7', component: Std03PrepositionsWorksheet7Component},
      { path: 'std03/prepositions/worksheet7', loadChildren: () => import('./std03-prepositions-worksheet7/std03-prepositions-worksheet7.module').then(m => m.Std03PrepositionsWorksheet7Module)},
      
      // { path: 'std03/prepositions/worksheet8', component: Std03PrepositionsWorksheet8Component},
      { path: 'std03/prepositions/worksheet8', loadChildren: () => import('./std03-prepositions-worksheet8/std03-prepositions-worksheet8.module').then(m => m.Std03PrepositionsWorksheet8Module)},
      
      // { path: 'std03/prepositions/worksheet9', component: Std03PrepositionsWorksheet9Component},
      { path: 'std03/prepositions/worksheet9', loadChildren: () => import('./std03-prepositions-worksheet9/std03-prepositions-worksheet9.module').then(m => m.Std03PrepositionsWorksheet9Module)},
      
      // { path: 'std03/prepositions/worksheet10', component: Std03PrepositionsWorksheet10Component},
      { path: 'std03/prepositions/worksheet10', loadChildren: () => import('./std03-prepositions-worksheet10/std03-prepositions-worksheet10.module').then(m => m.Std03PrepositionsWorksheet10Module)},
      

      // { path: 'std03/comprehensions/worksheet1', component: Std03ComprehensionsWorksheet1Component},
      
      { path: 'std03/comprehensions/worksheet1', loadChildren: () => import('./std03-comprehensions-worksheet1/std03-comprehensions-worksheet1.module').then(m => m.Std03ComprehensionsWorksheet1Module)},
      // { path: 'std03/comprehensions/worksheet2', component: Std03ComprehensionsWorksheet2Component},
      { path: 'std03/comprehensions/worksheet2', loadChildren: () => import('./std03-comprehensions-worksheet2/std03-comprehensions-worksheet2.module').then(m => m.Std03ComprehensionsWorksheet2Module)},
      
      // { path: 'std03/comprehensions/worksheet3', component: Std03ComprehensionsWorksheet3Component},
      { path: 'std03/comprehensions/worksheet3', loadChildren: () => import('./std03-comprehensions-worksheet3/std03-comprehensions-worksheet3.module').then(m => m.Std03ComprehensionsWorksheet3Module)},
      
      // { path: 'std03/comprehensions/worksheet4', component: Std03ComprehensionsWorksheet4Component},
      { path: 'std03/comprehensions/worksheet4', loadChildren: () => import('./std03-comprehensions-worksheet4/std03-comprehensions-worksheet4.module').then(m => m.Std03ComprehensionsWorksheet4Module)},
      
      // { path: 'std03/comprehensions/worksheet5', component: Std03ComprehensionsWorksheet5Component},
      { path: 'std03/comprehensions/worksheet5', loadChildren: () => import('./std03-comprehensions-worksheet5/std03-comprehensions-worksheet5.module').then(m => m.Std03ComprehensionsWorksheet5Module)},
      
      // { path: 'std03/comprehensions/worksheet6', component: Std03ComprehensionsWorksheet6Component},
      { path: 'std03/comprehensions/worksheet6', loadChildren: () => import('./std03-comprehensions-worksheet6/std03-comprehensions-worksheet6.module').then(m => m.Std03ComprehensionsWorksheet6Module)},
      
      // { path: 'std03/comprehensions/worksheet7', component: Std03ComprehensionsWorksheet7Component},
      { path: 'std03/comprehensions/worksheet7', loadChildren: () => import('./std03-comprehensions-worksheet7/std03-comprehensions-worksheet7.module').then(m => m.Std03ComprehensionsWorksheet7Module)},
      

      // { path: 'std03/personal-pronouns/worksheet1', component: Std03PersonalPronounsWorksheet1Component},
      { path: 'std03/personal-pronouns/worksheet1', loadChildren: () => import('./std03-personal-pronouns-worksheet1/std03-personal-pronouns-worksheet1.module').then(m => m.Std03PersonalPronounsWorksheet1Module)},
      
      // { path: 'std03/personal-pronouns/worksheet2', component: Std03PersonalPronounsWorksheet2Component},
      { path: 'std03/personal-pronouns/worksheet2', loadChildren: () => import('./std03-personal-pronouns-worksheet2/std03-personal-pronouns-worksheet2.module').then(m => m.Std03PersonalPronounsWorksheet2Module)},
      
      // { path: 'std03/personal-pronouns/worksheet3', component: Std03PersonalPronounsWorksheet3Component},
      { path: 'std03/personal-pronouns/worksheet3', loadChildren: () => import('./std03-personal-pronouns-worksheet3/std03-personal-pronouns-worksheet3.module').then(m => m.Std03PersonalPronounsWorksheet3Module)},
      
      // { path: 'std03/personal-pronouns/worksheet4', component: Std03PersonalPronounsWorksheet4Component},
      { path: 'std03/personal-pronouns/worksheet4', loadChildren: () => import('./std03-personal-pronouns-worksheet4/std03-personal-pronouns-worksheet4.module').then(m => m.Std03PersonalPronounsWorksheet4Module)},
      
      
      // { path: 'std03/possessive-pronouns/worksheet1', component: Std03PossessivePronounsWorksheet1Component},
      { path: 'std03/possessive-pronouns/worksheet1', loadChildren: () => import('./std03-possessive-pronouns-worksheet1/std03-possessive-pronouns-worksheet1.module').then(m => m.Std03PossessivePronounsWorksheet1Module)},
      
      // { path: 'std03/possessive-pronouns/worksheet2', component: Std03PossessivePronounsWorksheet2Component},
      { path: 'std03/possessive-pronouns/worksheet2', loadChildren: () => import('./std03-possessive-pronouns-worksheet2/std03-possessive-pronouns-worksheet2.module').then(m => m.Std03PossessivePronounsWorksheet2Module)},
      

      // { path: 'std03/capital-letter/worksheet1', component: Std03CapitalLetterWorksheet1Component},
      { path: 'std03/capital-letter/worksheet1', loadChildren: () => import('./std03-capital-letter-worksheet1/std03-capital-letter-worksheet1.module').then(m => m.Std03CapitalLetterWorksheet1Module)},
      
      // { path: 'std03/capital-letter/worksheet2', component: Std03CapitalLetterWorksheet2Component},
      { path: 'std03/capital-letter/worksheet2', loadChildren: () => import('./std03-capital-letter-worksheet2/std03-capital-letter-worksheet2.module').then(m => m.Std03CapitalLetterWorksheet2Module)},
      

      // { path: 'std03/comma/worksheet1', component: Std03CommaWorksheet1Component},
      { path: 'std03/comma/worksheet1', loadChildren: () => import('./std03-comma-worksheet1/std03-comma-worksheet1.module').then(m => m.Std03CommaWorksheet1Module)},
      
      // { path: 'std03/comma/worksheet2', component: Std03CommaWorksheet2Component},
      { path: 'std03/comma/worksheet2', loadChildren: () => import('./std03-comma-worksheet2/std03-comma-worksheet2.module').then(m => m.Std03CommaWorksheet2Module)},
      
      // { path: 'std03/exclamation/worksheet1', component: Std03ExclamationWorksheet1Component},
      { path: 'std03/exclamation/worksheet1', loadChildren: () => import('./std03-exclamation-worksheet1/std03-exclamation-worksheet1.module').then(m => m.Std03ExclamationWorksheet1Module)},
      
      // { path: 'std03/exclamation/worksheet2', component: Std03ExclamationWorksheet2Component},
      { path: 'std03/exclamation/worksheet2', loadChildren: () => import('./std03-exclamation-worksheet2/std03-exclamation-worksheet2.module').then(m => m.Std03ExclamationWorksheet2Module)},
      
      // { path: 'std03/mixed-punctuation/worksheet1', component: Std03MixedPunctuationWorksheet1Component},
      { path: 'std03/mixed-punctuation/worksheet1', loadChildren: () => import('./std03-mixed-punctuation-worksheet1/std03-mixed-punctuation-worksheet1.module').then(m => m.Std03MixedPunctuationWorksheet1Module)},
      
      // { path: 'std03/mixed-punctuation/worksheet2', component: Std03MixedPunctuationWorksheet2Component},
      { path: 'std03/mixed-punctuation/worksheet2', loadChildren: () => import('./std03-mixed-punctuation-worksheet2/std03-mixed-punctuation-worksheet2.module').then(m => m.Std03MixedPunctuationWorksheet2Module)},
      
      // { path: 'std03/mixed-punctuation/worksheet3', component: Std03MixedPunctuationWorksheet3Component},
      { path: 'std03/mixed-punctuation/worksheet3', loadChildren: () => import('./std03-mixed-punctuation-worksheet3/std03-mixed-punctuation-worksheet3.module').then(m => m.Std03MixedPunctuationWorksheet3Module)},
       

      // { path: 'std03/question-mark/worksheet1', component: Std03QuestionMarkWorksheet1Component},
      { path: 'std03/question-mark/worksheet1', loadChildren: () => import('./std03-question-mark-worksheet1/std03-question-mark-worksheet1.module').then(m => m.Std03QuestionMarkWorksheet1Module)},
      
      // { path: 'std03/question-mark/worksheet2', component: Std03QuestionMarkWorksheet2Component},
      { path: 'std03/question-mark/worksheet2', loadChildren: () => import('./std03-question-mark-worksheet2/std03-question-mark-worksheet2.module').then(m => m.Std03QuestionMarkWorksheet2Module)},
      

      // { path: 'std03/rhyming-words/worksheet1', component: Std03RhymingWordsWorksheet1Component},
      { path: 'std03/rhyming-words/worksheet1', loadChildren: () => import('./std03-rhyming-words-worksheet1/std03-rhyming-words-worksheet1.module').then(m => m.Std03RhymingWordsWorksheet1Module)},
      
      // { path: 'std03/rhyming-words/worksheet2', component: Std03RhymingWordsWorksheet2Component},
      { path: 'std03/rhyming-words/worksheet2', loadChildren: () => import('./std03-rhyming-words-worksheet2/std03-rhyming-words-worksheet2.module').then(m => m.Std03RhymingWordsWorksheet2Module)},
      
      // { path: 'std03/rhyming-words/worksheet3', component: Std03RhymingWordsWorksheet3Component},
      { path: 'std03/rhyming-words/worksheet3', loadChildren: () => import('./std03-rhyming-words-worksheet3/std03-rhyming-words-worksheet3.module').then(m => m.Std03RhymingWordsWorksheet3Module)},
      
      // { path: 'std03/rhyming-words/worksheet4', component: Std03RhymingWordsWorksheet4Component},
      { path: 'std03/rhyming-words/worksheet4', loadChildren: () => import('./std03-rhyming-words-worksheet4/std03-rhyming-words-worksheet4.module').then(m => m.Std03RhymingWordsWorksheet4Module)},
      
      // { path: 'std03/rhyming-words/worksheet5', component: Std03RhymingWordsWorksheet5Component},
      { path: 'std03/rhyming-words/worksheet5', loadChildren: () => import('./std03-rhyming-words-worksheet5/std03-rhyming-words-worksheet5.module').then(m => m.Std03RhymingWordsWorksheet5Module)},
      
      // { path: 'std03/rhyming-words/worksheet6', component: Std03RhymingWordsWorksheet6Component},
      { path: 'std03/rhyming-words/worksheet6', loadChildren: () => import('./std03-rhyming-words-worksheet6/std03-rhyming-words-worksheet6.module').then(m => m.Std03RhymingWordsWorksheet6Module)},
      
      // { path: 'std03/rhyming-words/worksheet7', component: Std03RhymingWordsWorksheet7Component},
      { path: 'std03/rhyming-words/worksheet7', loadChildren: () => import('./std03-rhyming-words-worksheet7/std03-rhyming-words-worksheet7.module').then(m => m.Std03RhymingWordsWorksheet7Module)},
      
      // { path: 'std03/rhyming-words/worksheet8', component: Std03RhymingWordsWorksheet8Component},
      { path: 'std03/rhyming-words/worksheet8', loadChildren: () => import('./std03-rhyming-words-worksheet8/std03-rhyming-words-worksheet8.module').then(m => m.Std03RhymingWordsWorksheet8Module)},
      
      // { path: 'std03/rhyming-words/worksheet9', component: Std03RhymingWordsWorksheet9Component},
      { path: 'std03/rhyming-words/worksheet9', loadChildren: () => import('./std03-rhyming-words-worksheet9/std03-rhyming-words-worksheet9.module').then(m => m.Std03RhymingWordsWorksheet9Module)},
      
      // { path: 'std03/rhyming-words/worksheet10', component: Std03RhymingWordsWorksheet10Component},
      { path: 'std03/rhyming-words/worksheet10', loadChildren: () => import('./std03-rhyming-words-worksheet10/std03-rhyming-words-worksheet10.module').then(m => m.Std03RhymingWordsWorksheet10Module)},
      
      
      // { path: 'std03/action-verb/worksheet1', component: Std03ActionVerbWorksheet1Component},
    
      { path: 'std03/action-verb/worksheet1', loadChildren: () => import('./std03-action-verb-worksheet1/std03-action-verb-worksheet1.module').then(m => m.Std03ActionVerbWorksheet1Module)},
      // { path: 'std03/action-verb/worksheet2', component: Std03ActionVerbWorksheet2Component},
      { path: 'std03/action-verb/worksheet2', loadChildren: () => import('./std03-action-verb-worksheet2/std03-action-verb-worksheet2.module').then(m => m.Std03ActionVerbWorksheet2Module)},
    
      // { path: 'std03/action-verb/worksheet3', component: Std03ActionVerbWorksheet3Component},
      { path: 'std03/action-verb/worksheet3', loadChildren: () => import('./std03-action-verb-worksheet3/std03-action-verb-worksheet3.module').then(m => m.Std03ActionVerbWorksheet3Module)},
    
      // { path: 'std03/action-verb/worksheet5', component: Std03ActionVerbWorksheet5Component},
      { path: 'std03/action-verb/worksheet5', loadChildren: () => import('./std03-action-verb-worksheet5/std03-action-verb-worksheet5.module').then(m => m.Std03ActionVerbWorksheet5Module)},
    
      // { path: 'std03/action-verb/worksheet4', component: Std03ActionVerbWorksheet4Component},
      { path: 'std03/action-verb/worksheet4', loadChildren: () => import('./std03-action-verb-worksheet4/std03-action-verb-worksheet4.module').then(m => m.Std03ActionVerbWorksheet4Module)},
     
      
      // { path: 'std03/adverbs/worksheet1', component: Std03AdverbsWorksheet1Component},
      { path: 'std03/adverbs/worksheet1', loadChildren: () => import('./std03-adverbs-worksheet1/std03-adverbs-worksheet1.module').then(m => m.Std03AdverbsWorksheet1Module)},
      
      // { path: 'std03/adverbs/worksheet2', component: Std03AdverbsWorksheet2Component},
      { path: 'std03/adverbs/worksheet2', loadChildren: () => import('./std03-adverbs-worksheet2/std03-adverbs-worksheet2.module').then(m => m.Std03AdverbsWorksheet2Module)},
      
      // { path: 'std03/adverbs/worksheet3', component: Std03AdverbsWorksheet3Component},
      { path: 'std03/adverbs/worksheet3', loadChildren: () => import('./std03-adverbs-worksheet3/std03-adverbs-worksheet3.module').then(m => m.Std03AdverbsWorksheet3Module)},
      
      // { path: 'std03/adverbs/worksheet4', component: Std03AdverbsWorksheet4Component},
      { path: 'std03/adverbs/worksheet4', loadChildren: () => import('./std03-adverbs-worksheet4/std03-adverbs-worksheet4.module').then(m => m.Std03AdverbsWorksheet4Module)},
      
      // { path: 'std03/adverbs/worksheet5', component: Std03AdverbsWorksheet5Component},
      { path: 'std03/adverbs/worksheet5', loadChildren: () => import('./std03-adverbs-worksheet5/std03-adverbs-worksheet5.module').then(m => m.Std03AdverbsWorksheet5Module)},
      
      // { path: 'std03/adverbs/worksheet6', component: Std03AdverbsWorksheet6Component},
      { path: 'std03/adverbs/worksheet6', loadChildren: () => import('./std03-adverbs-worksheet6/std03-adverbs-worksheet6.module').then(m => m.Std03AdverbsWorksheet6Module)},
      
      // { path: 'std03/adverbs/worksheet7', component: Std03AdverbsWorksheet7Component},
      { path: 'std03/adverbs/worksheet7', loadChildren: () => import('./std03-adverbs-worksheet7/std03-adverbs-worksheet7.module').then(m => m.Std03AdverbsWorksheet7Module)},
      
      // { path: 'std03/adverbs/worksheet8', component: Std03AdverbsWorksheet8Component},
      { path: 'std03/adverbs/worksheet8', loadChildren: () => import('./std03-adverbs-worksheet8/std03-adverbs-worksheet8.module').then(m => m.Std03AdverbsWorksheet8Module)},
      
      // { path: 'std03/adverbs/worksheet9', component: Std03AdverbsWorksheet9Component},
      { path: 'std03/adverbs/worksheet9', loadChildren: () => import('./std03-adverbs-worksheet9/std03-adverbs-worksheet9.module').then(m => m.Std03AdverbsWorksheet9Module)},
      
      // { path: 'std03/adverbs/worksheet10', component: Std03AdverbsWorksheet10Component},
      { path: 'std03/adverbs/worksheet10', loadChildren: () => import('./std03-adverbs-worksheet10/std03-adverbs-worksheet10.module').then(m => m.Std03AdverbsWorksheet10Module)},
      

      // { path: 'std03/apostrophe/worksheet1', component: Std03ApostropheWorksheet1Component},
      { path: 'std03/apostrophe/worksheet1', loadChildren: () => import('./std03-apostrophe-worksheet1/std03-apostrophe-worksheet1.module').then(m => m.Std03ApostropheWorksheet1Module)},
      
      // { path: 'std03/apostrophe/worksheet2', component: Std03ApostropheWorksheet2Component},
      { path: 'std03/apostrophe/worksheet2', loadChildren: () => import('./std03-apostrophe-worksheet2/std03-apostrophe-worksheet2.module').then(m => m.Std03ApostropheWorksheet2Module)},
      

      // { path: 'std03/future-tense/worksheet1', component: Std03FutureTenseWorksheet1Component},
      { path: 'std03/future-tense/worksheet1', loadChildren: () => import('./std03-future-tense-worksheet1/std03-future-tense-worksheet1.module').then(m => m.Std03FutureTenseWorksheet1Module)},
      
      // { path: 'std03/future-tense/worksheet2', component: Std03FutureTenseWorksheet2Component},
      { path: 'std03/future-tense/worksheet2', loadChildren: () => import('./std03-future-tense-worksheet2/std03-future-tense-worksheet2.module').then(m => m.Std03FutureTenseWorksheet2Module)},
      
      // { path: 'std03/future-tense/worksheet3', component: Std03FutureTenseWorksheet3Component},
      { path: 'std03/future-tense/worksheet3', loadChildren: () => import('./std03-future-tense-worksheet3/std03-future-tense-worksheet3.module').then(m => m.Std03FutureTenseWorksheet3Module)},
      

      // { path: 'std03/synonyms/worksheet1', component: Std03SynonymsWorksheet1Component},
      { path: 'std03/synonyms/worksheet1', loadChildren: () => import('./std03-synonyms-worksheet1/std03-synonyms-worksheet1.module').then(m => m.Std03SynonymsWorksheet1Module)},
      
      // { path: 'std03/synonyms/worksheet2', component: Std03SynonymsWorksheet2Component},
      { path: 'std03/synonyms/worksheet2', loadChildren: () => import('./std03-synonyms-worksheet2/std03-synonyms-worksheet2.module').then(m => m.Std03SynonymsWorksheet2Module)},
      
      // { path: 'std03/synonyms/worksheet3', component: Std03SynonymsWorksheet3Component},
      { path: 'std03/synonyms/worksheet3', loadChildren: () => import('./std03-synonyms-worksheet3/std03-synonyms-worksheet3.module').then(m => m.Std03SynonymsWorksheet3Module)},
      
      // { path: 'std03/synonyms/worksheet4', component: Std03SynonymsWorksheet4Component},
      { path: 'std03/synonyms/worksheet4', loadChildren: () => import('./std03-synonyms-worksheet4/std03-synonyms-worksheet4.module').then(m => m.Std03SynonymsWorksheet4Module)},
      
      // { path: 'std03/synonyms/worksheet5', component: Std03SynonymsWorksheet5Component},
      { path: 'std03/synonyms/worksheet5', loadChildren: () => import('./std03-synonyms-worksheet5/std03-synonyms-worksheet5.module').then(m => m.Std03SynonymsWorksheet5Module)},
      
      // { path: 'std03/synonyms/worksheet6', component: Std03SynonymsWorksheet6Component},
      { path: 'std03/synonyms/worksheet6', loadChildren: () => import('./std03-synonyms-worksheet6/std03-synonyms-worksheet6.module').then(m => m.Std03SynonymsWorksheet6Module)},
      
      // { path: 'std03/synonyms/worksheet7', component: Std03SynonymsWorksheet7Component},
      { path: 'std03/synonyms/worksheet7', loadChildren: () => import('./std03-synonyms-worksheet7/std03-synonyms-worksheet7.module').then(m => m.Std03SynonymsWorksheet7Module)},
      
      // { path: 'std03/synonyms/worksheet8', component: Std03SynonymsWorksheet8Component},
      { path: 'std03/synonyms/worksheet8', loadChildren: () => import('./std03-synonyms-worksheet8/std03-synonyms-worksheet8.module').then(m => m.Std03SynonymsWorksheet8Module)},
      
      // { path: 'std03/synonyms/worksheet9', component: Std03SynonymsWorksheet9Component},
      { path: 'std03/synonyms/worksheet9', loadChildren: () => import('./std03-synonyms-worksheet9/std03-synonyms-worksheet9.module').then(m => m.Std03SynonymsWorksheet9Module)},
      
      // { path: 'std03/synonyms/worksheet10', component: Std03SynonymsWorksheet10Component},
      { path: 'std03/synonyms/worksheet10', loadChildren: () => import('./std03-synonyms-worksheet10/std03-synonyms-worksheet10.module').then(m => m.Std03SynonymsWorksheet10Module)},
      

      // { path: 'std03/mixed-tense/worksheet1', component: Std03MixedTenseWorksheet1Component},
      { path: 'std03/mixed-tense/worksheet1', loadChildren: () => import('./std03-mixed-tense-worksheet1/std03-mixed-tense-worksheet1.module').then(m => m.Std03MixedTenseWorksheet1Module)},
      
      // { path: 'std03/mixed-tense/worksheet2', component: Std03MixedTenseWorksheet2Component},
      { path: 'std03/mixed-tense/worksheet2', loadChildren: () => import('./std03-mixed-tense-worksheet2/std03-mixed-tense-worksheet2.module').then(m => m.Std03MixedTenseWorksheet2Module)},
      
      // { path: 'std03/mixed-tense/worksheet3', component: Std03MixedTenseWorksheet3Component},
      { path: 'std03/mixed-tense/worksheet3', loadChildren: () => import('./std03-mixed-tense-worksheet3/std03-mixed-tense-worksheet3.module').then(m => m.Std03MixedTenseWorksheet3Module)},
      
      // { path: 'std03/mixed-tense/worksheet4', component: Std03MixedTenseWorksheet4Component},
      { path: 'std03/mixed-tense/worksheet4', loadChildren: () => import('./std03-mixed-tense-worksheet4/std03-mixed-tense-worksheet4.module').then(m => m.Std03MixedTenseWorksheet4Module)},
      

      // { path: 'std03/past-tense/worksheet1', component: Std03PastTenseWorksheet1Component},
      { path: 'std03/past-tense/worksheet1', loadChildren: () => import('./std03-past-tense-worksheet1/std03-past-tense-worksheet1.module').then(m => m.Std03PastTenseWorksheet1Module)},
      
      // { path: 'std03/past-tense/worksheet2', component: Std03PastTenseWorksheet2Component},
      { path: 'std03/past-tense/worksheet2', loadChildren: () => import('./std03-past-tense-worksheet2/std03-past-tense-worksheet2.module').then(m => m.Std03PastTenseWorksheet2Module)},
      
      // { path: 'std03/past-tense/worksheet3', component: Std03PastTenseWorksheet3Component},
      { path: 'std03/past-tense/worksheet3', loadChildren: () => import('./std03-past-tense-worksheet3/std03-past-tense-worksheet3.module').then(m => m.Std03PastTenseWorksheet3Module)},
      
      // { path: 'std03/past-tense/worksheet4', component: Std03PastTenseWorksheet4Component},
      { path: 'std03/past-tense/worksheet4', loadChildren: () => import('./std03-past-tense-worksheet4/std03-past-tense-worksheet4.module').then(m => m.Std03PastTenseWorksheet4Module)},
      

      // { path: 'std03/present-tense/worksheet1', component: Std03PresentTenseWorksheet1Component},
      { path: 'std03/present-tense/worksheet1', loadChildren: () => import('./std03-present-tense-worksheet1/std03-present-tense-worksheet1.module').then(m => m.Std03PresentTenseWorksheet1Module)},
      
      // { path: 'std03/present-tense/worksheet2', component: Std03PresentTenseWorksheet2Component},
      { path: 'std03/present-tense/worksheet2', loadChildren: () => import('./std03-present-tense-worksheet2/std03-present-tense-worksheet2.module').then(m => m.Std03PresentTenseWorksheet2Module)},
      
      // { path: 'std03/present-tense/worksheet3', component: Std03PresentTenseWorksheet3Component},
      { path: 'std03/present-tense/worksheet3', loadChildren: () => import('./std03-present-tense-worksheet3/std03-present-tense-worksheet3.module').then(m => m.Std03PresentTenseWorksheet3Module)},
      
      // { path: 'std03/present-tense/worksheet4', component: Std03PresentTenseWorksheet4Component},
      { path: 'std03/present-tense/worksheet4', loadChildren: () => import('./std03-present-tense-worksheet4/std03-present-tense-worksheet4.module').then(m => m.Std03PresentTenseWorksheet4Module)},
      

      // { path: 'std03/helping-verbs/worksheet1', component: Std03HelpingVerbsWorksheet1Component},
      { path: 'std03/helping-verbs/worksheet1', loadChildren: () => import('./std03-helping-verbs-worksheet1/std03-helping-verbs-worksheet1.module').then(m => m.Std03HelpingVerbsWorksheet1Module)},
      
      // { path: 'std03/helping-verbs/worksheet2', component: Std03HelpingVerbsWorksheet2Component},
      { path: 'std03/helping-verbs/worksheet2', loadChildren: () => import('./std03-helping-verbs-worksheet2/std03-helping-verbs-worksheet2.module').then(m => m.Std03HelpingVerbsWorksheet2Module)},
      
      // { path: 'std03/helping-verbs/worksheet3', component: Std03HelpingVerbsWorksheet3Component},
      { path: 'std03/helping-verbs/worksheet3', loadChildren: () => import('./std03-helping-verbs-worksheet3/std03-helping-verbs-worksheet3.module').then(m => m.Std03HelpingVerbsWorksheet3Module)},
      
      // { path: 'std03/helping-verbs/worksheet4', component: Std03HelpingVerbsWorksheet4Component},
      { path: 'std03/helping-verbs/worksheet4', loadChildren: () => import('./std03-helping-verbs-worksheet4/std03-helping-verbs-worksheet4.module').then(m => m.Std03HelpingVerbsWorksheet4Module)},
      
      // { path: 'std03/helping-verbs/worksheet5', component: Std03HelpingVerbsWorksheet5Component},
      { path: 'std03/helping-verbs/worksheet5', loadChildren: () => import('./std03-helping-verbs-worksheet5/std03-helping-verbs-worksheet5.module').then(m => m.Std03HelpingVerbsWorksheet5Module)},
      

      // { path: 'std03/mixed-verb/worksheet1', component: Std03MixedVerbWorksheet1Component},
      { path: 'std03/mixed-verb/worksheet1', loadChildren: () => import('./std03-mixed-verb-worksheet1/std03-mixed-verb-worksheet1.module').then(m => m.Std03MixedVerbWorksheet1Module)},
      
      // { path: 'std03/mixed-verb/worksheet2', component: Std03MixedVerbWorksheet2Component},
      { path: 'std03/mixed-verb/worksheet2', loadChildren: () => import('./std03-mixed-verb-worksheet2/std03-mixed-verb-worksheet2.module').then(m => m.Std03MixedVerbWorksheet2Module)},
      
      // { path: 'std03/mixed-verb/worksheet3', component: Std03MixedVerbWorksheet3Component},
      { path: 'std03/mixed-verb/worksheet3', loadChildren: () => import('./std03-mixed-verb-worksheet3/std03-mixed-verb-worksheet3.module').then(m => m.Std03MixedVerbWorksheet3Module)},
      
      // { path: 'std03/mixed-verb/worksheet4', component: Std03MixedVerbWorksheet4Component},
      { path: 'std03/mixed-verb/worksheet4', loadChildren: () => import('./std03-mixed-verb-worksheet4/std03-mixed-verb-worksheet4.module').then(m => m.Std03MixedVerbWorksheet4Module)},
      
      // { path: 'std03/mixed-verb/worksheet5', component: Std03MixedVerbWorksheet5Component},
      { path: 'std03/mixed-verb/worksheet5', loadChildren: () => import('./std03-mixed-verb-worksheet5/std03-mixed-verb-worksheet5.module').then(m => m.Std03MixedVerbWorksheet5Module)},
      

      // { path: 'std03/vocabulary/worksheet1', component: Std03VocabularyWorksheet1Component},
      { path: 'std03/vocabulary/worksheet1', loadChildren: () => import('./std03-vocabulary-worksheet1/std03-vocabulary-worksheet1.module').then(m => m.Std03VocabularyWorksheet1Module)},
      
      // { path: 'std03/vocabulary/worksheet2', component: Std03VocabularyWorksheet2Component},
      { path: 'std03/vocabulary/worksheet2', loadChildren: () => import('./std03-vocabulary-worksheet2/std03-vocabulary-worksheet2.module').then(m => m.Std03VocabularyWorksheet2Module)},
      
      // { path: 'std03/vocabulary/worksheet3', component: Std03VocabularyWorksheet3Component},
      { path: 'std03/vocabulary/worksheet3', loadChildren: () => import('./std03-vocabulary-worksheet3/std03-vocabulary-worksheet3.module').then(m => m.Std03VocabularyWorksheet3Module)},
      
      // { path: 'std03/vocabulary/worksheet4', component: Std03VocabularyWorksheet4Component},
      { path: 'std03/vocabulary/worksheet4', loadChildren: () => import('./std03-vocabulary-worksheet4/std03-vocabulary-worksheet4.module').then(m => m.Std03VocabularyWorksheet4Module)},
      
      // { path: 'std03/vocabulary/worksheet5', component: Std03VocabularyWorksheet5Component},
      { path: 'std03/vocabulary/worksheet5', loadChildren: () => import('./std03-vocabulary-worksheet5/std03-vocabulary-worksheet5.module').then(m => m.Std03VocabularyWorksheet5Module)},
      
      // { path: 'std03/vocabulary/worksheet6', component: Std03VocabularyWorksheet6Component},
      { path: 'std03/vocabulary/worksheet6', loadChildren: () => import('./std03-vocabulary-worksheet6/std03-vocabulary-worksheet6.module').then(m => m.Std03VocabularyWorksheet6Module)},
      
      // { path: 'std03/vocabulary/worksheet7', component: Std03VocabularyWorksheet7Component},
      { path: 'std03/vocabulary/worksheet7', loadChildren: () => import('./std03-vocabulary-worksheet7/std03-vocabulary-worksheet7.module').then(m => m.Std03VocabularyWorksheet7Module)},
      
      // { path: 'std03/vocabulary/worksheet8', component: Std03VocabularyWorksheet8Component},
      { path: 'std03/vocabulary/worksheet8', loadChildren: () => import('./std03-vocabulary-worksheet8/std03-vocabulary-worksheet8.module').then(m => m.Std03VocabularyWorksheet8Module)},
      
      // { path: 'std03/vocabulary/worksheet9', component: Std03VocabularyWorksheet9Component},
      { path: 'std03/vocabulary/worksheet9', loadChildren: () => import('./std03-vocabulary-worksheet9/std03-vocabulary-worksheet9.module').then(m => m.Std03VocabularyWorksheet9Module)},
      
      // { path: 'std03/vocabulary/worksheet10', component: Std03VocabularyWorksheet10Component},
      { path: 'std03/vocabulary/worksheet10', loadChildren: () => import('./std03-vocabulary-worksheet10/std03-vocabulary-worksheet10.module').then(m => m.Std03VocabularyWorksheet10Module)},
      
      // { path: 'std03/vocabulary/worksheet11', component: Std03VocabularyWorksheet11Component},
      { path: 'std03/vocabulary/worksheet11', loadChildren: () => import('./std03-vocabulary-worksheet11/std03-vocabulary-worksheet11.module').then(m => m.Std03VocabularyWorksheet11Module)},
      
      // { path: 'std03/vocabulary/worksheet12', component: Std03VocabularyWorksheet12Component},
      { path: 'std03/vocabulary/worksheet12', loadChildren: () => import('./std03-vocabulary-worksheet12/std03-vocabulary-worksheet12.module').then(m => m.Std03VocabularyWorksheet12Module)},
      

      // { path: 'std03/reflexive-pronouns/worksheet1', component: Std03ReflexivePronounsWorksheet1Component},
      { path: 'std03/reflexive-pronouns/worksheet1', loadChildren: () => import('./std03-reflexive-pronouns-worksheet1/std03-reflexive-pronouns-worksheet1.module').then(m => m.Std03ReflexivePronounsWorksheet1Module)},
      
      // { path: 'std03/reflexive-pronouns/worksheet2', component: Std03ReflexivePronounsWorksheet2Component},
      { path: 'std03/reflexive-pronouns/worksheet2', loadChildren: () => import('./std03-reflexive-pronouns-worksheet2/std03-reflexive-pronouns-worksheet2.module').then(m => m.Std03ReflexivePronounsWorksheet2Module)},
      

      // { path: 'std03/quotation-marks/worksheet1', component: Std03QuotationMarksWorksheet1Component},
      { path: 'std03/quotation-marks/worksheet3', loadChildren: () => import('./std03-quotation-marks-worksheet1/std03-quotation-marks-worksheet1.module').then(m => m.Std03QuotationMarksWorksheet1Module)},

      // { path: 'std03/semicolon-colon/worksheet1', component: Std03SemicolonColonWorksheet1Component},
      { path: 'std03/semicolon-colon/worksheet1', loadChildren: () => import('./std03-semicolon-colon-worksheet1/std03-semicolon-colon-worksheet1.module').then(m => m.Std03SemicolonColonWorksheet1Module)},
      
      // { path: 'std03/subject-predicate/worksheet1', component: Std03SubjectPredicateWorksheet1Component},
      { path: 'std03/subject-predicate/worksheet1', loadChildren: () => import('./std03-subject-predicate-worksheet1/std03-subject-predicate-worksheet1.module').then(m => m.Std03SubjectPredicateWorksheet1Module)},

      // { path: 'std03/subject-predicate/worksheet2', component: Std03SubjectPredicateWorksheet2Component},
      { path: 'std03/subject-predicate/worksheet2', loadChildren: () => import('./std03-subject-predicate-worksheet2/std03-subject-predicate-worksheet2.module').then(m => m.Std03SubjectPredicateWorksheet2Module)},

      // { path: 'std03/subject-predicate/worksheet3', component: Std03SubjectPredicateWorksheet3Component},
      { path: 'std03/subject-predicate/worksheet3', loadChildren: () => import('./std03-subject-predicate-worksheet3/std03-subject-predicate-worksheet3.module').then(m => m.Std03SubjectPredicateWorksheet3Module)},

      // { path: 'std03/subject-predicate/worksheet4', component: Std03SubjectPredicateWorksheet4Component},
      { path: 'std03/subject-predicate/worksheet4', loadChildren: () => import('./std03-subject-predicate-worksheet4/std03-subject-predicate-worksheet4.module').then(m => m.Std03SubjectPredicateWorksheet4Module)},

      // { path: 'std03/subject-predicate/worksheet5', component: Std03SubjectPredicateWorksheet5Component},
      { path: 'std03/subject-predicate/worksheet5', loadChildren: () => import('./std03-subject-predicate-worksheet5/std03-subject-predicate-worksheet5.module').then(m => m.Std03SubjectPredicateWorksheet5Module)},

      // { path: 'std03/subject-predicate/worksheet6', component: Std03SubjectPredicateWorksheet6Component},
      { path: 'std03/subject-predicate/worksheet6', loadChildren: () => import('./std03-subject-predicate-worksheet6/std03-subject-predicate-worksheet6.module').then(m => m.Std03SubjectPredicateWorksheet6Module)},

      // { path: 'std03/subject-predicate/worksheet7', component: Std03SubjectPredicateWorksheet7Component},
      { path: 'std03/subject-predicate/worksheet7', loadChildren: () => import('./std03-subject-predicate-worksheet7/std03-subject-predicate-worksheet7.module').then(m => m.Std03SubjectPredicateWorksheet7Module)},

      // { path: 'std03/subject-predicate/worksheet8', component: Std03SubjectPredicateWorksheet8Component},
      { path: 'std03/subject-predicate/worksheet8', loadChildren: () => import('./std03-subject-predicate-worksheet8/std03-subject-predicate-worksheet8.module').then(m => m.Std03SubjectPredicateWorksheet8Module)},

      
      // { path: 'std03/prefix/worksheet1', component: Std03PrefixWorksheet1Component},
      { path: 'std03/prefix/worksheet1', loadChildren: () => import('./std03-prefix-worksheet1/std03-prefix-worksheet1.module').then(m => m.Std03PrefixWorksheet1Module)},
      
      // { path: 'std03/prefix/worksheet2', component: Std03PrefixWorksheet2Component},
      { path: 'std03/prefix/worksheet2', loadChildren: () => import('./std03-prefix-worksheet2/std03-prefix-worksheet2.module').then(m => m.Std03PrefixWorksheet2Module)},
      
      // { path: 'std03/prefix/worksheet3', component: Std03PrefixWorksheet3Component},
      { path: 'std03/prefix/worksheet3', loadChildren: () => import('./std03-prefix-worksheet3/std03-prefix-worksheet3.module').then(m => m.Std03PrefixWorksheet3Module)},
      
      // { path: 'std03/prefix/worksheet4', component: Std03PrefixWorksheet4Component},
      { path: 'std03/prefix/worksheet4', loadChildren: () => import('./std03-prefix-worksheet4/std03-prefix-worksheet4.module').then(m => m.Std03PrefixWorksheet4Module)},
      
      // { path: 'std03/prefix/worksheet5', component: Std03PrefixWorksheet5Component},
      { path: 'std03/prefix/worksheet5', loadChildren: () => import('./std03-prefix-worksheet5/std03-prefix-worksheet5.module').then(m => m.Std03PrefixWorksheet5Module)},
       

      // { path: 'std03/suffix/worksheet1', component: Std03SuffixWorksheet1Component},
      { path: 'std03/suffix/worksheet1', loadChildren: () => import('./std03-suffix-worksheet1/std03-suffix-worksheet1.module').then(m => m.Std03SuffixWorksheet1Module)},
      
      // { path: 'std03/suffix/worksheet2', component: Std03SuffixWorksheet2Component},
      { path: 'std03/suffix/worksheet2', loadChildren: () => import('./std03-suffix-worksheet2/std03-suffix-worksheet2.module').then(m => m.Std03SuffixWorksheet2Module)},
      
      // { path: 'std03/suffix/worksheet3', component: Std03SuffixWorksheet3Component},
      { path: 'std03/suffix/worksheet3', loadChildren: () => import('./std03-suffix-worksheet3/std03-suffix-worksheet3.module').then(m => m.Std03SuffixWorksheet3Module)},
      
      // { path: 'std03/suffix/worksheet4', component: Std03SuffixWorksheet4Component},
      { path: 'std03/suffix/worksheet4', loadChildren: () => import('./std03-suffix-worksheet4/std03-suffix-worksheet4.module').then(m => m.Std03SuffixWorksheet4Module)},
      
      // { path: 'std03/suffix/worksheet5', component: Std03SuffixWorksheet5Component},
      { path: 'std03/suffix/worksheet5', loadChildren: () => import('./std03-suffix-worksheet5/std03-suffix-worksheet5.module').then(m => m.Std03SuffixWorksheet5Module)},
      
      //////////////End//////////////////

      // { path: 'std02/adjective/worksheet1', component: Std02AdjectivesWorksheet1Component},
      { path: 'std02/adjective/worksheet1', loadChildren: () => import('./std02-adjectives-worksheet1/std02-adjectives-worksheet1.module').then(m => m.Std02AdjectivesWorksheet1Module)},

      // { path: 'std02/adjective/worksheet2', component: Std02AdjectivesWorksheet2Component},
      { path: 'std02/adjective/worksheet2', loadChildren: () => import('./std02-adjectives-worksheet2/std02-adjectives-worksheet2.module').then(m => m.Std02AdjectivesWorksheet2Module)},

      // { path: 'std02/adjective/worksheet3', component: Std02AdjectivesWorksheet3Component},
      { path: 'std02/adjective/worksheet3', loadChildren: () => import('./std02-adjectives-worksheet3/std02-adjectives-worksheet3.module').then(m => m.Std02AdjectivesWorksheet3Module)},

      // { path: 'std02/adjective/worksheet4', component: Std02AdjectivesWorksheet4Component},
      { path: 'std02/adjective/worksheet4', loadChildren: () => import('./std02-adjectives-worksheet4/std02-adjectives-worksheet4.module').then(m => m.Std02AdjectivesWorksheet4Module)},

      // { path: 'std02/adjective/worksheet5', component: Std02AdjectivesWorksheet5Component},
      { path: 'std02/adjective/worksheet5', loadChildren: () => import('./std02-adjectives-worksheet5/std02-adjectives-worksheet5.module').then(m => m.Std02AdjectivesWorksheet5Module)},

      // { path: 'std02/adjective/worksheet6', component: Std02AdjectivesWorksheet6Component},
      { path: 'std02/adjective/worksheet6', loadChildren: () => import('./std02-adjectives-worksheet6/std02-adjectives-worksheet6.module').then(m => m.Std02AdjectivesWorksheet6Module)},

      // { path: 'std02/adjective/worksheet7', component: Std02AdjectivesWorksheet7Component},
      { path: 'std02/adjective/worksheet7', loadChildren: () => import('./std02-adjectives-worksheet7/std02-adjectives-worksheet7.module').then(m => m.Std02AdjectivesWorksheet7Module)},

      // { path: 'std02/adjective/worksheet8', component: Std02AdjectivesWorksheet8Component},
      { path: 'std02/adjective/worksheet8', loadChildren: () => import('./std02-adjectives-worksheet8/std02-adjectives-worksheet8.module').then(m => m.Std02AdjectivesWorksheet8Module)},

      // { path: 'std02/adjective/worksheet9', component: Std02AdjectivesWorksheet9Component},
      { path: 'std02/adjective/worksheet9', loadChildren: () => import('./std02-adjectives-worksheet9/std02-adjectives-worksheet9.module').then(m => m.Std02AdjectivesWorksheet9Module)},

      // { path: 'std02/adjective/worksheet10', component: Std02AdjectivesWorksheet10Component},
      { path: 'std02/adjective/worksheet10', loadChildren: () => import('./std02-adjectives-worksheet10/std02-adjectives-worksheet10.module').then(m => m.Std02AdjectivesWorksheet10Module)},

      
      // { path: 'std02/articles/worksheet1', component: Std02ArticlesWorksheet1Component},
      { path: 'std02/articles/worksheet1', loadChildren: () => import('./std02-articles-worksheet1/std02-articles-worksheet1.module').then(m => m.Std02ArticlesWorksheet1Module)},

      // { path: 'std02/articles/worksheet2', component: Std02ArticlesWorksheet2Component},
      { path: 'std02/articles/worksheet2', loadChildren: () => import('./std02-articles-worksheet2/std02-articles-worksheet2.module').then(m => m.Std02ArticlesWorksheet2Module)},

      // { path: 'std02/articles/worksheet3', component: Std02ArticlesWorksheet3Component},
      { path: 'std02/articles/worksheet3', loadChildren: () => import('./std02-articles-worksheet3/std02-articles-worksheet3.module').then(m => m.Std02ArticlesWorksheet3Module)},

      // { path: 'std02/articles/worksheet4', component: Std02ArticlesWorksheet4Component},
      { path: 'std02/articles/worksheet4', loadChildren: () => import('./std02-articles-worksheet4/std02-articles-worksheet4.module').then(m => m.Std02ArticlesWorksheet4Module)},

      // { path: 'std02/articles/worksheet5', component: Std02ArticlesWorksheet5Component},
      { path: 'std02/articles/worksheet5', loadChildren: () => import('./std02-articles-worksheet5/std02-articles-worksheet5.module').then(m => m.Std02ArticlesWorksheet5Module)},

      // { path: 'std02/articles/worksheet6', component: Std02ArticlesWorksheet6Component},
      { path: 'std02/articles/worksheet6', loadChildren: () => import('./std02-articles-worksheet6/std02-articles-worksheet6.module').then(m => m.Std02ArticlesWorksheet6Module)},

      // { path: 'std02/articles/worksheet7', component: Std02ArticlesWorksheet7Component},
      { path: 'std02/articles/worksheet7', loadChildren: () => import('./std02-articles-worksheet7/std02-articles-worksheet7.module').then(m => m.Std02ArticlesWorksheet7Module)},

      // { path: 'std02/articles/worksheet8', component: Std02ArticlesWorksheet8Component},
      { path: 'std02/articles/worksheet8', loadChildren: () => import('./std02-articles-worksheet8/std02-articles-worksheet8.module').then(m => m.Std02ArticlesWorksheet8Module)},

      // { path: 'std02/articles/worksheet9', component: Std02ArticlesWorksheet9Component},
      { path: 'std02/articles/worksheet9', loadChildren: () => import('./std02-articles-worksheet9/std02-articles-worksheet9.module').then(m => m.Std02ArticlesWorksheet9Module)},

      // { path: 'std02/articles/worksheet10', component: Std02ArticlesWorksheet10Component},
      { path: 'std02/articles/worksheet10', loadChildren: () => import('./std02-articles-worksheet10/std02-articles-worksheet10.module').then(m => m.Std02ArticlesWorksheet10Module)},


      
      // { path: 'std02/compound-word/worksheet1', component:Std02CompoundWordsWorksheet1Component },
      { path: 'std02/compound-word/worksheet1', loadChildren: () => import('./std02-compound-words-worksheet1/std02-compound-words-worksheet1.module').then(m => m.Std02CompoundWordsWorksheet1Module)},

      // { path: 'std02/compound-word/worksheet2', component: Std02CompoundWordsWorksheet2Component},
      { path: 'std02/compound-word/worksheet2', loadChildren: () => import('./std02-compound-words-worksheet2/std02-compound-words-worksheet2.module').then(m => m.Std02CompoundWordsWorksheet2Module)},

      // { path: 'std02/compound-word/worksheet3', component: Std02CompoundWordsWorksheet3Component},
      { path: 'std02/compound-word/worksheet3', loadChildren: () => import('./std02-compound-words-worksheet3/std02-compound-words-worksheet3.module').then(m => m.Std02CompoundWordsWorksheet3Module)},

      // { path: 'std02/compound-word/worksheet4', component: Std02CompoundWordsWorksheet4Component},
      { path: 'std02/compound-word/worksheet4', loadChildren: () => import('./std02-compound-words-worksheet4/std02-compound-words-worksheet4.module').then(m => m.Std02CompoundWordsWorksheet4Module)},

      // { path: 'std02/compound-word/worksheet5', component: Std02CompoundWordsWorksheet5Component},
      { path: 'std02/compound-word/worksheet5', loadChildren: () => import('./std02-compound-words-worksheet5/std02-compound-words-worksheet5.module').then(m => m.Std02CompoundWordsWorksheet5Module)},

      // { path: 'std02/compound-word/worksheet6', component:Std02CompoundWordsWorksheet6Component },
      { path: 'std02/compound-word/worksheet6', loadChildren: () => import('./std02-compound-words-worksheet6/std02-compound-words-worksheet6.module').then(m => m.Std02CompoundWordsWorksheet6Module)},

      // { path: 'std02/compound-word/worksheet7', component: Std02CompoundWordsWorksheet7Component},
      { path: 'std02/compound-word/worksheet7', loadChildren: () => import('./std02-compound-words-worksheet7/std02-compound-words-worksheet7.module').then(m => m.Std02CompoundWordsWorksheet7Module)},

      // { path: 'std02/compound-word/worksheet8', component: Std02CompoundWordsWorksheet8Component},
      { path: 'std02/compound-word/worksheet8', loadChildren: () => import('./std02-compound-words-worksheet8/std02-compound-words-worksheet8.module').then(m => m.Std02CompoundWordsWorksheet8Module)},

      // { path: 'std02/compound-word/worksheet9', component: Std02CompoundWordsWorksheet9Component},
      { path: 'std02/compound-word/worksheet9', loadChildren: () => import('./std02-compound-words-worksheet9/std02-compound-words-worksheet9.module').then(m => m.Std02CompoundWordsWorksheet9Module)},

      // { path: 'std02/compound-word/worksheet10', component: Std02CompoundWordsWorksheet10Component},
      { path: 'std02/compound-word/worksheet10', loadChildren: () => import('./std02-compound-words-worksheet10/std02-compound-words-worksheet10.module').then(m => m.Std02CompoundWordsWorksheet10Module)},

      
      // { path: 'std02/comprehensions/worksheet8', component: Std02ComprehensionsWorksheet8Component},
      { path: 'std02/comprehensions/worksheet8', loadChildren: () => import('./std02-comprehensions-worksheet8/std02-comprehensions-worksheet8.module').then(m => m.Std02ComprehensionsWorksheet8Module)},

      // { path: 'std02/comprehensions/worksheet9', component: Std02ComprehensionsWorksheet9Component},
      { path: 'std02/comprehensions/worksheet9', loadChildren: () => import('./std02-comprehensions-worksheet9/std02-comprehensions-worksheet9.module').then(m => m.Std02ComprehensionsWorksheet9Module)},

      // { path: 'std02/comprehensions/worksheet10', component: Std02ComprehensionsWorksheet10Component},
      { path: 'std02/comprehensions/worksheet10', loadChildren: () => import('./std02-comprehensions-worksheet10/std02-comprehensions-worksheet10.module').then(m => m.Std02ComprehensionsWorksheet10Module)},

      
      // { path: 'std02/homophones/worksheet1', component:Std02HomophonesWorksheet1Component },
      { path: 'std02/homophones/worksheet1', loadChildren: () => import('./std01-homophones-worksheet1/std01-homophones-worksheet1.module').then(m => m.Std01HomophonesWorksheet1Module)},

      // { path: 'std02/homophones/worksheet2', component:Std02HomophonesWorksheet2Component },
      { path: 'std02/homophones/worksheet2', loadChildren: () => import('./std01-homophones-worksheet2/std01-homophones-worksheet2.module').then(m => m.Std01HomophonesWorksheet2Module)},

      // { path: 'std02/homophones/worksheet3', component:Std02HomophonesWorksheet3Component },
      { path: 'std02/homophones/worksheet3', loadChildren: () => import('./std01-homophones-worksheet3/std01-homophones-worksheet3.module').then(m => m.Std01HomophonesWorksheet3Module)},

      // { path: 'std02/homophones/worksheet4', component:Std02HomophonesWorksheet4Component },
      { path: 'std02/homophones/worksheet4', loadChildren: () => import('./std01-homophones-worksheet4/std01-homophones-worksheet4.module').then(m => m.Std01HomophonesWorksheet4Module)},

      // { path: 'std02/homophones/worksheet5', component:Std02HomophonesWorksheet5Component },
      { path: 'std02/homophones/worksheet5', loadChildren: () => import('./std01-homophones-worksheet5/std01-homophones-worksheet5.module').then(m => m.Std01HomophonesWorksheet5Module)},

      // { path: 'std02/homophones/worksheet6', component:Std02HomophonesWorksheet6Component },
      { path: 'std02/homophones/worksheet6', loadChildren: () => import('./std01-homophones-worksheet6/std01-homophones-worksheet6.module').then(m => m.Std01HomophonesWorksheet6Module)},

      // { path: 'std02/homophones/worksheet7', component:Std02HomophonesWorksheet7Component },
      { path: 'std02/homophones/worksheet7', loadChildren: () => import('./std01-homophones-worksheet7/std01-homophones-worksheet7.module').then(m => m.Std01HomophonesWorksheet7Module)},

      // { path: 'std02/homophones/worksheet8', component:Std02HomophonesWorksheet8Component },
      { path: 'std02/homophones/worksheet8', loadChildren: () => import('./std01-homophones-worksheet8/std01-homophones-worksheet8.module').then(m => m.Std01HomophonesWorksheet8Module)},

      // { path: 'std02/homophones/worksheet9', component:Std02HomophonesWorksheet9Component },
      // { path: 'std02/homophones/worksheet9', loadChildren: () => import('./std01-homophones-worksheet').then(m => m.Std02ArticlesWorksheet10Module)},

      // { path: 'std02/homophones/worksheet10', component:Std02HomophonesWorksheet10Component },
      // { path: 'std02/homophones/worksheet10', loadChildren: () => import('./std01-homophones-worksheet10/std01-homophones-worksheet10.module').then(m => m.Std02ArticlesWorksheet10Module)},

      
      // { path: 'std02/mixed-noun/worksheet1', component:Std02MixedNounsWorksheet1Component },
      { path: 'std02/mixed-noun/worksheet1', loadChildren: () => import('./std02-mixed-nouns-worksheet1/std02-mixed-nouns-worksheet1.module').then(m => m.Std02MixedNounsWorksheet1Module)},

      // { path: 'std02/mixed-noun/worksheet2', component:Std02MixedNounsWorksheet2Component },
      { path: 'std02/mixed-noun/worksheet2', loadChildren: () => import('./std02-mixed-nouns-worksheet2/std02-mixed-nouns-worksheet2.module').then(m => m.Std02MixedNounsWorksheet2Module)},

      // { path: 'std02/mixed-noun/worksheet3', component:Std02MixedNounsWorksheet3Component },
      { path: 'std02/mixed-noun/worksheet3', loadChildren: () => import('./std02-mixed-nouns-worksheet3/std02-mixed-nouns-worksheet3.module').then(m => m.Std02MixedNounsWorksheet3Module)},

      // { path: 'std02/mixed-noun/worksheet4', component:Std02MixedNounsWorksheet4Component },
      { path: 'std02/mixed-noun/worksheet4', loadChildren: () => import('./std02-mixed-nouns-worksheet4/std02-mixed-nouns-worksheet4.module').then(m => m.Std02MixedNounsWorksheet4Module)},

      // { path: 'std02/mixed-noun/worksheet5', component:Std02MixedNounsWorksheet5Component },
      { path: 'std02/mixed-noun/worksheet5', loadChildren: () => import('./std02-mixed-nouns-worksheet5/std02-mixed-nouns-worksheet5.module').then(m => m.Std02MixedNounsWorksheet5Module)},

      // { path: 'std02/mixed-noun/worksheet6', component:Std02MixedNounsWorksheet6Component },
      { path: 'std02/mixed-noun/worksheet6', loadChildren: () => import('./std02-mixed-nouns-worksheet6/std02-mixed-nouns-worksheet6.module').then(m => m.Std02MixedNounsWorksheet6Module)},

      
      // { path: 'std02/proper-noun/worksheet1', component: Std02ProperNounsWorksheet1Component},
      { path: 'std02/proper-noun/worksheet1', loadChildren: () => import('./std02-proper-nouns-worksheet1/std02-proper-nouns-worksheet1.module').then(m => m.Std02ProperNounsWorksheet1Module)},

      // { path: 'std02/proper-noun/worksheet2', component: Std02ProperNounsWorksheet2Component},
      { path: 'std02/proper-noun/worksheet2', loadChildren: () => import('./std02-proper-nouns-worksheet2/std02-proper-nouns-worksheet2.module').then(m => m.Std02ProperNounsWorksheet2Module)},

      // { path: 'std02/proper-noun/worksheet3', component: Std02ProperNounsWorksheet3Component},
      { path: 'std02/proper-noun/worksheet3', loadChildren: () => import('./std02-proper-nouns-worksheet3/std02-proper-nouns-worksheet3.module').then(m => m.Std02ProperNounsWorksheet3Module)},

      // { path: 'std02/proper-noun/worksheet4', component: Std02ProperNounsWorksheet4Component},
      { path: 'std02/proper-noun/worksheet4', loadChildren: () => import('./std02-proper-nouns-worksheet4/std02-proper-nouns-worksheet4.module').then(m => m.Std02ProperNounsWorksheet4Module)},

      
      // { path: 'std02/prepositions/worksheet1', component: Std02PrepositionsWorksheet1Component},
      { path: 'std02/prepositions/worksheet1', loadChildren: () => import('./std02-prepositions-worksheet1/std02-prepositions-worksheet1.module').then(m => m.Std02PrepositionsWorksheet1Module)},

      // { path: 'std02/prepositions/worksheet2', component: Std02PrepositionsWorksheet2Component},
      { path: 'std02/prepositions/worksheet2', loadChildren: () => import('./std02-prepositions-worksheet2/std02-prepositions-worksheet2.module').then(m => m.Std02PrepositionsWorksheet2Module)},

      // { path: 'std02/prepositions/worksheet3', component: Std02PrepositionsWorksheet3Component},
      { path: 'std02/prepositions/worksheet3', loadChildren: () => import('./std02-prepositions-worksheet3/std02-prepositions-worksheet3.module').then(m => m.Std02PrepositionsWorksheet3Module)},

      // { path: 'std02/prepositions/worksheet4', component: Std02PrepositionsWorksheet4Component},
      { path: 'std02/prepositions/worksheet4', loadChildren: () => import('./std02-prepositions-worksheet4/std02-prepositions-worksheet4.module').then(m => m.Std02PrepositionsWorksheet4Module)},

      // { path: 'std02/prepositions/worksheet5', component: Std02PrepositionsWorksheet5Component},
      { path: 'std02/prepositions/worksheet5', loadChildren: () => import('./std02-prepositions-worksheet5/std02-prepositions-worksheet5.module').then(m => m.Std02PrepositionsWorksheet5Module)},

      // { path: 'std02/prepositions/worksheet6', component: Std02PrepositionsWorksheet6Component},
      { path: 'std02/prepositions/worksheet6', loadChildren: () => import('./std02-prepositions-worksheet6/std02-prepositions-worksheet6.module').then(m => m.Std02PrepositionsWorksheet6Module)},

      // { path: 'std02/prepositions/worksheet7', component: Std02PrepositionsWorksheet7Component},
      { path: 'std02/prepositions/worksheet7', loadChildren: () => import('./std02-prepositions-worksheet7/std02-prepositions-worksheet7.module').then(m => m.Std02PrepositionsWorksheet7Module)},

      // { path: 'std02/prepositions/worksheet8', component: Std02PrepositionsWorksheet8Component},
      { path: 'std02/prepositions/worksheet8', loadChildren: () => import('./std02-prepositions-worksheet8/std02-prepositions-worksheet8.module').then(m => m.Std02PrepositionsWorksheet8Module)},

      // { path: 'std02/prepositions/worksheet9', component: Std02PrepositionsWorksheet9Component},
      { path: 'std02/prepositions/worksheet9', loadChildren: () => import('./std02-prepositions-worksheet9/std02-prepositions-worksheet9.module').then(m => m.Std02PrepositionsWorksheet9Module)},

      // { path: 'std02/prepositions/worksheet10', component: Std02PrepositionsWorksheet10Component},
      { path: 'std02/prepositions/worksheet10', loadChildren: () => import('./std02-prepositions-worksheet10/std02-prepositions-worksheet10.module').then(m => m.Std02PrepositionsWorksheet10Module)},

      
      // { path: 'std02/comma/worksheet1', component: Std02CommaWorksheet1Component},
      { path: 'std02/comma/worksheet1', loadChildren: () => import('./std02-comma-worksheet1/std02-comma-worksheet1.module').then(m => m.Std02CommaWorksheet1Module)},

      // { path: 'std02/comma/worksheet2', component: Std02CommaWorksheet2Component},
      { path: 'std02/comma/worksheet2', loadChildren: () => import('./std02-comma-worksheet2/std02-comma-worksheet2.module').then(m => m.Std02CommaWorksheet2Module)},

      
      // { path: 'std02/mixed-punctuation/worksheet1', component: Std02MixedPunctuationWorksheet1Component},
      { path: 'std02/mixed-punctuation/worksheet1', loadChildren: () => import('./std02-mixed-punctuation-worksheet1/std02-mixed-punctuation-worksheet1.module').then(m => m.Std02MixedPunctuationWorksheet1Module)},
     
      // { path: 'std02/mixed-punctuation/worksheet2', component: Std02MixedPunctuationWorksheet2Component},
      { path: 'std02/mixed-punctuation/worksheet2', loadChildren: () => import('./std02-mixed-punctuation-worksheet2/std02-mixed-punctuation-worksheet2.module').then(m => m.Std02MixedPunctuationWorksheet2Module)},

      // { path: 'std02/mixed-punctuation/worksheet3', component: Std02MixedPunctuationWorksheet3Component},
      { path: 'std02/mixed-punctuation/worksheet3', loadChildren: () => import('./std02-mixed-punctuation-worksheet3/std02-mixed-punctuation-worksheet3.module').then(m => m.Std02MixedPunctuationWorksheet3Module)},
      

      // { path: 'std02/synonyms/worksheet1', component: Std02SynonymsWorksheet1Component},
      { path: 'std02/synonyms/worksheet1', loadChildren: () => import('./std02-synonyms-worksheet1/std02-synonyms-worksheet1.module').then(m => m.Std02SynonymsWorksheet1Module)},

      // { path: 'std02/synonyms/worksheet2', component: Std02SynonymsWorksheet2Component},
      { path: 'std02/synonyms/worksheet2', loadChildren: () => import('./std02-synonyms-worksheet2/std02-synonyms-worksheet2.module').then(m => m.Std02SynonymsWorksheet2Module)},

      // { path: 'std02/synonyms/worksheet3', component: Std02SynonymsWorksheet3Component},
      { path: 'std02/synonyms/worksheet3', loadChildren: () => import('./std02-synonyms-worksheet3/std02-synonyms-worksheet3.module').then(m => m.Std02SynonymsWorksheet3Module)},

      // { path: 'std02/synonyms/worksheet4', component: Std02SynonymsWorksheet4Component},
      { path: 'std02/synonyms/worksheet4', loadChildren: () => import('./std02-synonyms-worksheet4/std02-synonyms-worksheet4.module').then(m => m.Std02SynonymsWorksheet4Module)},

      // { path: 'std02/synonyms/worksheet5', component: Std02SynonymsWorksheet5Component},
      { path: 'std02/synonyms/worksheet5', loadChildren: () => import('./std02-synonyms-worksheet5/std02-synonyms-worksheet5.module').then(m => m.Std02SynonymsWorksheet5Module)},

      // { path: 'std02/synonyms/worksheet6', component: Std02SynonymsWorksheet6Component},
      { path: 'std02/synonyms/worksheet6', loadChildren: () => import('./std02-synonyms-worksheet6/std02-synonyms-worksheet6.module').then(m => m.Std02SynonymsWorksheet6Module)},

      // { path: 'std02/synonyms/worksheet7', component: Std02SynonymsWorksheet7Component},
      { path: 'std02/synonyms/worksheet7', loadChildren: () => import('./std02-synonyms-worksheet7/std02-synonyms-worksheet7.module').then(m => m.Std02SynonymsWorksheet7Module)},

      // { path: 'std02/synonyms/worksheet8', component: Std02SynonymsWorksheet8Component},
      { path: 'std02/synonyms/worksheet8', loadChildren: () => import('./std02-synonyms-worksheet8/std02-synonyms-worksheet8.module').then(m => m.Std02SynonymsWorksheet8Module)},

      // { path: 'std02/synonyms/worksheet9', component: Std02SynonymsWorksheet9Component},
      { path: 'std02/synonyms/worksheet9', loadChildren: () => import('./std02-synonyms-worksheet9/std02-synonyms-worksheet9.module').then(m => m.Std02SynonymsWorksheet9Module)},

      // { path: 'std02/synonyms/worksheet10', component: Std02SynonymsWorksheet10Component},
      { path: 'std02/synonyms/worksheet10', loadChildren: () => import('./std02-synonyms-worksheet10/std02-synonyms-worksheet10.module').then(m => m.Std02SynonymsWorksheet10Module)},

      
      // { path: 'std02/future-tense/worksheet1', component: Std02FutureTenseWorksheet1Component},
      { path: 'std02/future-tense/worksheet1', loadChildren: () => import('./std02-future-tense-worksheet1/std02-future-tense-worksheet1.module').then(m => m.Std02FutureTenseWorksheet1Module)},

      // { path: 'std02/future-tense/worksheet2', component: Std02FutureTenseWorksheet2Component},
      { path: 'std02/future-tense/worksheet2', loadChildren: () => import('./std02-future-tense-worksheet2/std02-future-tense-worksheet2.module').then(m => m.Std02FutureTenseWorksheet2Module)},

      // { path: 'std02/future-tense/worksheet3', component: Std02FutureTenseWorksheet3Component},
      { path: 'std02/future-tense/worksheet3', loadChildren: () => import('./std02-future-tense-worksheet3/std02-future-tense-worksheet3.module').then(m => m.Std02FutureTenseWorksheet3Module)},

      
      // { path: 'std02/past-tense/worksheet1', component: Std02PastTenseWorksheet1Component},
      { path: 'std02/past-tense/worksheet1', loadChildren: () => import('./std02-past-tense-worksheet1/std02-past-tense-worksheet1.module').then(m => m.Std02PastTenseWorksheet1Module)},

      // { path: 'std02/past-tense/worksheet2', component: Std02PastTenseWorksheet2Component},
      { path: 'std02/past-tense/worksheet2', loadChildren: () => import('./std02-past-tense-worksheet2/std02-past-tense-worksheet2.module').then(m => m.Std02PastTenseWorksheet2Module)},

      // { path: 'std02/past-tense/worksheet3', component: Std02PastTenseWorksheet3Component},
      { path: 'std02/past-tense/worksheet3', loadChildren: () => import('./std02-past-tense-worksheet3/std02-past-tense-worksheet3.module').then(m => m.Std02PastTenseWorksheet3Module)},

      // { path: 'std02/past-tense/worksheet4', component: Std02PastTenseWorksheet4Component},
      { path: 'std02/past-tense/worksheet4', loadChildren: () => import('./std02-past-tense-worksheet4/std02-past-tense-worksheet4.module').then(m => m.Std02PastTenseWorksheet4Module)},

      
      // { path: 'std02/action-verb/worksheet1', component: Std02ActionVerbsWorksheet1Component},
      { path: 'std02/action-verb/worksheet1', loadChildren: () => import('./std02-action-verbs-worksheet1/std02-action-verbs-worksheet1.module').then(m => m.Std02ActionVerbsWorksheet1Module)},

      // { path: 'std02/action-verb/worksheet2', component: Std02ActionVerbsWorksheet2Component},
      { path: 'std02/action-verb/worksheet2', loadChildren: () => import('./std02-action-verbs-worksheet2/std02-action-verbs-worksheet2.module').then(m => m.Std02ActionVerbsWorksheet2Module)},

      // { path: 'std02/action-verb/worksheet3', component: Std02ActionVerbsWorksheet3Component},
      { path: 'std02/action-verb/worksheet3', loadChildren: () => import('./std02-action-verbs-worksheet3/std02-action-verbs-worksheet3.module').then(m => m.Std02ActionVerbsWorksheet3Module)},

      // { path: 'std02/action-verb/worksheet4', component: Std02ActionVerbsWorksheet4Component},
      { path: 'std02/action-verb/worksheet4', loadChildren: () => import('./std02-action-verbs-worksheet4/std02-action-verbs-worksheet4.module').then(m => m.Std02ActionVerbsWorksheet4Module)},

      // { path: 'std02/action-verb/worksheet5', component: Std02ActionVerbsWorksheet5Component},
      { path: 'std02/action-verb/worksheet5', loadChildren: () => import('./std02-action-verbs-worksheet5/std02-action-verbs-worksheet5.module').then(m => m.Std02ActionVerbsWorksheet5Module)},

      
      // { path: 'std02/mixed-verb/worksheet1', component: Std02MixedVerbWorksheet1Component},
      { path: 'std02/mixed-verb/worksheet1', loadChildren: () => import('./std02-mixed-verb-worksheet1/std02-mixed-verb-worksheet1.module').then(m => m.Std02MixedVerbWorksheet1Module)},

      // { path: 'std02/mixed-verb/worksheet2', component: Std02MixedVerbWorksheet2Component},
      { path: 'std02/mixed-verb/worksheet2', loadChildren: () => import('./std02-mixed-verb-worksheet2/std02-mixed-verb-worksheet2.module').then(m => m.Std02MixedVerbWorksheet2Module)},

      // { path: 'std02/mixed-verb/worksheet3', component: Std02MixedVerbWorksheet3Component},
      { path: 'std02/mixed-verb/worksheet3', loadChildren: () => import('./std02-mixed-verb-worksheet3/std02-mixed-verb-worksheet3.module').then(m => m.Std02MixedVerbWorksheet3Module)},

      // { path: 'std02/mixed-verb/worksheet4', component: Std02MixedVerbWorksheet4Component},
      { path: 'std02/mixed-verb/worksheet4', loadChildren: () => import('./std02-mixed-verb-worksheet4/std02-mixed-verb-worksheet4.module').then(m => m.Std02MixedVerbWorksheet4Module)},

      // { path: 'std02/mixed-verb/worksheet5', component: Std02MixedVerbWorksheet5Component},
      { path: 'std02/mixed-verb/worksheet5', loadChildren: () => import('./std02-mixed-verb-worksheet5/std02-mixed-verb-worksheet5.module').then(m => m.Std02MixedVerbWorksheet5Module)},

      
      // { path: 'std02/vocabulary/worksheet1', component: Std02VocabularyWorksheet1Component},
      { path: 'std02/vocabulary/worksheet1', loadChildren: () => import('./std02-vocabulary-worksheet1/std02-vocabulary-worksheet1.module').then(m => m.Std02VocabularyWorksheet1Module)},

      // { path: 'std02/vocabulary/worksheet2', component: Std02VocabularyWorksheet2Component},
      { path: 'std02/vocabulary/worksheet2', loadChildren: () => import('./std02-vocabulary-worksheet2/std02-vocabulary-worksheet2.module').then(m => m.Std02VocabularyWorksheet2Module)},

      // { path: 'std02/vocabulary/worksheet3', component: Std02VocabularyWorksheet3Component},
      { path: 'std02/vocabulary/worksheet3', loadChildren: () => import('./std02-vocabulary-worksheet3/std02-vocabulary-worksheet3.module').then(m => m.Std02VocabularyWorksheet3Module)},

      // { path: 'std02/vocabulary/worksheet4', component: Std02VocabularyWorksheet4Component},
      { path: 'std02/vocabulary/worksheet4', loadChildren: () => import('./std02-vocabulary-worksheet4/std02-vocabulary-worksheet4.module').then(m => m.Std02VocabularyWorksheet4Module)},

      // { path: 'std02/vocabulary/worksheet5', component: Std02VocabularyWorksheet5Component},
      { path: 'std02/vocabulary/worksheet5', loadChildren: () => import('./std02-vocabulary-worksheet5/std02-vocabulary-worksheet5.module').then(m => m.Std02VocabularyWorksheet5Module)},

      // { path: 'std02/vocabulary/worksheet6', component: Std02VocabularyWorksheet6Component},
      { path: 'std02/vocabulary/worksheet6', loadChildren: () => import('./std02-vocabulary-worksheet6/std02-vocabulary-worksheet6.module').then(m => m.Std02VocabularyWorksheet6Module)},

      // { path: 'std02/vocabulary/worksheet7', component: Std02VocabularyWorksheet7Component},
      { path: 'std02/vocabulary/worksheet7', loadChildren: () => import('./std02-vocabulary-worksheet7/std02-vocabulary-worksheet7.module').then(m => m.Std02VocabularyWorksheet7Module)},

      // { path: 'std02/vocabulary/worksheet8', component: Std02VocabularyWorksheet8Component},
      { path: 'std02/vocabulary/worksheet8', loadChildren: () => import('./std02-vocabulary-worksheet8/std02-vocabulary-worksheet8.module').then(m => m.Std02VocabularyWorksheet8Module)},

      // { path: 'std02/vocabulary/worksheet9', component: Std02VocabularyWorksheet9Component},
      { path: 'std02/vocabulary/worksheet9', loadChildren: () => import('./std02-vocabulary-worksheet9/std02-vocabulary-worksheet9.module').then(m => m.Std02VocabularyWorksheet9Module)},

      // { path: 'std02/vocabulary/worksheet10', component: Std02VocabularyWorksheet10Component},
      { path: 'std02/vocabulary/worksheet10', loadChildren: () => import('./std02-vocabulary-worksheet10/std02-vocabulary-worksheet10.module').then(m => m.Std02VocabularyWorksheet10Module)},

      
      // { path: 'std02/reference-list/adverbs', component: Std02AdverbsReferenceListComponent},
      { path: 'std02/reference-list/adverbs', loadChildren: () => import('./std02-adverbs-reference-list/std02-adverbs-reference-list.module').then(m => m.Std02AdverbsReferenceListModule)},

      // { path: 'std02/reference-list/antonyms', component: Std02AntonymsReferenceListComponent},
      { path: 'std02/reference-list/antonyms', loadChildren: () => import('./std02-antonyms-reference-list/std02-antonyms-reference-list.module').then(m => m.Std02AntonymsReferenceListModule)},

      // { path: 'std02/reference-list/collective-nouns', component: Std02CollectiveNounsReferenceListComponent},
      { path: 'std02/reference-list/collective-nouns', loadChildren: () => import('./std02-collective-nouns-reference-list/std02-collective-nouns-reference-list.module').then(m => m.Std02CollectiveNounsReferenceListModule)},

      // { path: 'std02/reference-list/compound-words', component: Std02CompoundWordsReferenceListComponent},
      { path: 'std02/reference-list/compound-words', loadChildren: () => import('./std02-compound-words-reference-list/std02-compound-words-reference-list.module').then(m => m.Std02CompoundWordsReferenceListModule)},

      // { path: 'std02/reference-list/gender-nouns', component: Std02GenderNounsReferenceListComponent},
      { path: 'std02/reference-list/gender-nouns', loadChildren: () => import('./std02-gender-nouns-reference-list/std02-gender-nouns-reference-list.module').then(m => m.Std02GenderNounsReferenceListModule)},

      // { path: 'std02/reference-list/homophones', component: Std02HomophonesReferenceListComponent},
      { path: 'std02/reference-list/homophones', loadChildren: () => import('./std02-homophones-reference-list/std02-homophones-reference-list.module').then(m => m.Std02HomophonesReferenceListModule)},

      // { path: 'std02/reference-list/rhyming-words', component: Std02RhymingWordsReferenceListComponent},
      { path: 'std02/reference-list/rhyming-words', loadChildren: () => import('./std02-rhyming-words-reference-list/std02-rhyming-words-reference-list.module').then(m => m.Std02RhymingWordsReferenceListModule)},

      // { path: 'std02/reference-list/synonyms', component: Std02SynonymsReferenceListComponent},
      { path: 'std02/reference-list/synonyms', loadChildren: () => import('./std02-synonyms-reference-list/std02-synonyms-reference-list.module').then(m => m.Std02SynonymsReferenceListModule)},

      
      // { path: 'std03/reference-list/abstract-nouns', component: Std03AbstractNounsReferenceListComponent},
      { path: 'std03/reference-list/abstract-nouns', loadChildren: () => import('./std03-abstract-nouns-reference-list/std03-abstract-nouns-reference-list.module').then(m => m.Std03AbstractNounsReferenceListModule)},

      // { path: 'std03/reference-list/adverbs', component: Std03AdverbsReferenceListComponent},
      { path: 'std03/reference-list/adverbs', loadChildren: () => import('./std03-adverbs-reference-list/std03-adverbs-reference-list.module').then(m => m.Std03AdverbsReferenceListModule)},

      // { path: 'std03/reference-list/antonyms', component: Std03AntonymsReferenceListComponent},
      { path: 'std03/reference-list/antonyms', loadChildren: () => import('./std03-antonyms-reference-list/std03-antonyms-reference-list.module').then(m => m.Std03AntonymsReferenceListModule)},

      // { path: 'std03/reference-list/collective-nouns', component: Std03CollectiveNounsReferenceListComponent},
      { path: 'std03/reference-list/collective-nouns', loadChildren: () => import('./std03-collective-nouns-reference-list/std03-collective-nouns-reference-list.module').then(m => m.Std03CollectiveNounsReferenceListModule)},

      // { path: 'std03/reference-list/compound-words', component: Std03CompoundWordsReferenceListComponent},
      { path: 'std03/reference-list/compound-words', loadChildren: () => import('./std03-compound-words-reference-list/std03-compound-words-reference-list.module').then(m => m.Std03CompoundWordsReferenceListModule)},

      // { path: 'std03/reference-list/gender-nouns', component: Std03GenderNounsReferenceListComponent},
      { path: 'std03/reference-list/gender-nouns', loadChildren: () => import('./std03-gender-nouns-reference-list/std03-gender-nouns-reference-list.module').then(m => m.Std03GenderNounsReferenceListModule)},

      // { path: 'std03/reference-list/homophones', component: Std03HomophonesReferenceListComponent},
      { path: 'std03/reference-list/homophones', loadChildren: () => import('./std03-homophones-reference-list/std03-homophones-reference-list.module').then(m => m.Std03HomophonesReferenceListModule)},

      // { path: 'std03/reference-list/prefix', component: Std03PrefixReferenceListComponent},
      { path: 'std03/reference-list/prefix', loadChildren: () => import('./std03-prefix-reference-list/std03-prefix-reference-list.module').then(m => m.Std03PrefixReferenceListModule)},

      // { path: 'std03/reference-list/suffix', component: Std03SuffixReferenceListComponent},
      { path: 'std03/reference-list/suffix', loadChildren: () => import('./std03-suffix-reference-list/std03-suffix-reference-list.module').then(m => m.Std03SuffixReferenceListModule)},

      // { path: 'std03/reference-list/synonyms', component: Std03SynonymsReferenceListComponent},
      { path: 'std03/reference-list/synonyms', loadChildren: () => import('./std03-synonyms-reference-list/std03-synonyms-reference-list.module').then(m => m.Std03SynonymsReferenceListModule)},

      
      // { path: 'std03/abstract-noun/worksheet1', component:Std03AbstractNounWorksheet1Component },
      { path: 'std03/abstract-noun/worksheet1', loadChildren: () => import('./std03-abstract-noun-worksheet1/std03-abstract-noun-worksheet1.module').then(m => m.Std03AbstractNounWorksheet1Module)},

      // { path: 'std03/abstract-noun/worksheet2', component:Std03AbstractNounWorksheet2Component },
      { path: 'std03/abstract-noun/worksheet2', loadChildren: () => import('./std03-abstract-noun-worksheet2/std03-abstract-noun-worksheet2.module').then(m => m.Std03AbstractNounWorksheet2Module)},

      // { path: 'std03/abstract-noun/worksheet3', component:Std03AbstractNounWorksheet3Component },
      { path: 'std03/abstract-noun/worksheet3', loadChildren: () => import('./std03-abstract-noun-worksheet3/std03-abstract-noun-worksheet3.module').then(m => m.Std03AbstractNounWorksheet3Module)},

      // { path: 'std03/abstract-noun/worksheet4', component:Std03AbstractNounWorksheet4Component },
      { path: 'std03/abstract-noun/worksheet4', loadChildren: () => import('./std03-abstract-noun-worksheet4/std03-abstract-noun-worksheet4.module').then(m => m.Std03AbstractNounWorksheet4Module)},

      // { path: 'std03/abstract-noun/worksheet5', component:Std03AbstractNounWorksheet5Component },
      { path: 'std03/abstract-noun/worksheet5', loadChildren: () => import('./std03-abstract-noun-worksheet5/std03-abstract-noun-worksheet5.module').then(m => m.Std03AbstractNounWorksheet5Module)},

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class WorksheetLayoutRoutingModule { }
