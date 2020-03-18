import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorksheetLayoutComponent } from 'src/app/worksheet-layout/worksheet-layout.component';
// import { NounComponent } from 'src/app/worksheet-layout/noun/noun.component';
// import { Std01AdjectiveWorksheet4Component } from './std01-adjective-worksheet4/std01-adjective-worksheet4.component';
// import { Std01AdjectiveWorksheet5Component } from './std01-adjective-worksheet5/std01-adjective-worksheet5.component';
// import { Std01ActionVerbWorksheet1Component } from './std01-action-verb-worksheet1/std01-action-verb-worksheet1.component';
// import { Std01ActionVerbWorksheet2Component } from './std01-action-verb-worksheet2/std01-action-verb-worksheet2.component';
// import { Std01ActionVerbWorksheet3Component } from './std01-action-verb-worksheet3/std01-action-verb-worksheet3.component';
// import { Std01AntonymsWorksheet9Component } from './std01-antonyms-worksheet9/std01-antonyms-worksheet9.component';
// import { Std01AntonymsWorksheet10Component } from './std01-antonyms-worksheet10/std01-antonyms-worksheet10.component';
// import { Std01AntonymsWorksheet8Component } from './std01-antonyms-worksheet8/std01-antonyms-worksheet8.component';
// import { Std01AntonymsWorksheet7Component } from './std01-antonyms-worksheet7/std01-antonyms-worksheet7.component';
// import { Std01ArticlesWorksheet1Component } from './std01-articles-worksheet1/std01-articles-worksheet1.component';
// import { Std01ArticlesWorksheet2Component } from './std01-articles-worksheet2/std01-articles-worksheet2.component';
// import { Std01ArticlesWorksheet3Component } from './std01-articles-worksheet3/std01-articles-worksheet3.component';
// import { Std01ArticlesWorksheet4Component } from './std01-articles-worksheet4/std01-articles-worksheet4.component';
// import { Std01ArticlesWorksheet5Component } from './std01-articles-worksheet5/std01-articles-worksheet5.component';
// import { Std01ArticlesWorksheet6Component } from './std01-articles-worksheet6/std01-articles-worksheet6.component';
// import { Std01ArticlesWorksheet7Component } from './std01-articles-worksheet7/std01-articles-worksheet7.component';
// import { Std01ArticlesWorksheet8Component } from './std01-articles-worksheet8/std01-articles-worksheet8.component';
// import { Std01ArticlesWorksheet9Component } from './std01-articles-worksheet9/std01-articles-worksheet9.component';
// import { Std01ArticlesWorksheet10Component } from './std01-articles-worksheet10/std01-articles-worksheet10.component';
// import { Std01CompoundWordWorksheet1Component } from './std01-compound-word-worksheet1/std01-compound-word-worksheet1.component';
// import { Std01CompoundWordWorksheet2Component } from './std01-compound-word-worksheet2/std01-compound-word-worksheet2.component';
// import { Std01CompoundWordWorksheet3Component } from './std01-compound-word-worksheet3/std01-compound-word-worksheet3.component';
// import { Std01CompoundWordWorksheet4Component } from './std01-compound-word-worksheet4/std01-compound-word-worksheet4.component';
// import { Std01CompoundWordWorksheet5Component } from './std01-compound-word-worksheet5/std01-compound-word-worksheet5.component';
// import { Std01CompoundWordWorksheet6Component } from './std01-compound-word-worksheet6/std01-compound-word-worksheet6.component';
// import { Std01CompoundWordWorksheet7Component } from './std01-compound-word-worksheet7/std01-compound-word-worksheet7.component';
// import { Std01CompoundWordWorksheet8Component } from './std01-compound-word-worksheet8/std01-compound-word-worksheet8.component';
// import { Std01CompoundWordWorksheet9Component } from './std01-compound-word-worksheet9/std01-compound-word-worksheet9.component';
// import { Std01HomophonesWorksheet2Component } from './std01-homophones-worksheet2/std01-homophones-worksheet2.component';
// import { Std01HomophonesWorksheet3Component } from './std01-homophones-worksheet3/std01-homophones-worksheet3.component';
// import { Std01HomophonesWorksheet4Component } from './std01-homophones-worksheet4/std01-homophones-worksheet4.component';
// import { Std01HomophonesWorksheet5Component } from './std01-homophones-worksheet5/std01-homophones-worksheet5.component';
// import { Std01HomophonesWorksheet6Component } from './std01-homophones-worksheet6/std01-homophones-worksheet6.component';
// import { Std01HomophonesWorksheet7Component } from './std01-homophones-worksheet7/std01-homophones-worksheet7.component';
// import { Std01HomophonesWorksheet8Component } from './std01-homophones-worksheet8/std01-homophones-worksheet8.component';
// import { Std01HomophonesWorksheet1Component } from './std01-homophones-worksheet1/std01-homophones-worksheet1.component';

// import { Std01AdjectiveWorksheet10Component } from './std01-adjective-worksheet10/std01-adjective-worksheet10.component';
// import { Std01AdjectiveWorksheet9Component } from './std01-adjective-worksheet9/std01-adjective-worksheet9.component';
// import { Std01AdjectiveWorksheet8Component } from './std01-adjective-worksheet8/std01-adjective-worksheet8.component';
// import { Std01AdjectiveWorksheet7Component } from './std01-adjective-worksheet7/std01-adjective-worksheet7.component';
// import { Std01AdjectiveWorksheet6Component } from './std01-adjective-worksheet6/std01-adjective-worksheet6.component';
// import { Std01ActionVerbWorksheet5Component } from './std01-action-verb-worksheet5/std01-action-verb-worksheet5.component';
// import { Std01ActionVerbWorksheet4Component } from './std01-action-verb-worksheet4/std01-action-verb-worksheet4.component';
// import { Std01AntonymsWorksheet1Component } from './std01-antonyms-worksheet1/std01-antonyms-worksheet1.component';
// import { Std01AntonymsWorksheet2Component } from './std01-antonyms-worksheet2/std01-antonyms-worksheet2.component';
// import { Std01AntonymsWorksheet3Component } from './std01-antonyms-worksheet3/std01-antonyms-worksheet3.component';
// import { Std01AntonymsWorksheet4Component } from './std01-antonyms-worksheet4/std01-antonyms-worksheet4.component';
// import { Std01AntonymsWorksheet5Component } from './std01-antonyms-worksheet5/std01-antonyms-worksheet5.component';
// import { Std01AntonymsWorksheet6Component } from './std01-antonyms-worksheet6/std01-antonyms-worksheet6.component';
// import { Std01CompoundWordsWorksheet10Component } from './std01-compound-words-worksheet10/std01-compound-words-worksheet10.component';

// import { Std01ConjunctionsWorksheet1Component } from './std01-conjunctions-worksheet1/std01-conjunctions-worksheet1.component';
// import { Std01ConjunctionsWorksheet2Component } from './std01-conjunctions-worksheet2/std01-conjunctions-worksheet2.component';
// import { Std01ConjunctionsWorksheet3Component } from './std01-conjunctions-worksheet3/std01-conjunctions-worksheet3.component';
// import { Std01ConjunctionsWorksheet4Component } from './std01-conjunctions-worksheet4/std01-conjunctions-worksheet4.component';
// import { Std01ConjunctionsWorksheet5Component } from './std01-conjunctions-worksheet5/std01-conjunctions-worksheet5.component';
// import { Std01ConjunctionsWorksheet6Component } from './std01-conjunctions-worksheet6/std01-conjunctions-worksheet6.component';
// import { Std01GenderNounsWorksheet1Component } from './std01-gender-nouns-worksheet1/std01-gender-nouns-worksheet1.component';
// import { Std01GenderNounsWorksheet2Component } from './std01-gender-nouns-worksheet2/std01-gender-nouns-worksheet2.component';
// import { Std01GenderNounsWorksheet3Component } from './std01-gender-nouns-worksheet3/std01-gender-nouns-worksheet3.component';
// import { Std01GenderNounsWorksheet4Component } from './std01-gender-nouns-worksheet4/std01-gender-nouns-worksheet4.component';
// import { Std01GenderNounsWorksheet5Component } from './std01-gender-nouns-worksheet5/std01-gender-nouns-worksheet5.component';
// import { Std01GenderNounsWorksheet6Component } from './std01-gender-nouns-worksheet6/std01-gender-nouns-worksheet6.component';
// import { Std01GenderNounsWorksheet7Component } from './std01-gender-nouns-worksheet7/std01-gender-nouns-worksheet7.component';
// import { Std01GenderNounsWorksheet8Component } from './std01-gender-nouns-worksheet8/std01-gender-nouns-worksheet8.component';
// import { Std01GenderNounsWorksheet9Component } from './std01-gender-nouns-worksheet9/std01-gender-nouns-worksheet9.component';
// import { Std01GenderNounsWorksheet10Component } from './std01-gender-nouns-worksheet10/std01-gender-nouns-worksheet10.component';
// import { Std01RhymingWordsWorksheet10Component } from './std01-rhyming-words-worksheet10/std01-rhyming-words-worksheet10.component';
// import { Std01RhymingWordsWorksheet15Component } from './std01-rhyming-words-worksheet15/std01-rhyming-words-worksheet15.component';
// import { Std01RhymingWordsWorksheet11Component } from './std01-rhyming-words-worksheet11/std01-rhyming-words-worksheet11.component';
// import { Std01RhymingWordsWorksheet12Component } from './std01-rhyming-words-worksheet12/std01-rhyming-words-worksheet12.component';
// import { Std01RhymingWordsWorksheet13Component } from './std01-rhyming-words-worksheet13/std01-rhyming-words-worksheet13.component';
// import { Std01RhymingWordsWorksheet14Component } from './std01-rhyming-words-worksheet14/std01-rhyming-words-worksheet14.component';
// import { Std01SingularPluralNounsWorksheet1Component } from './std01-singular-plural-nouns-worksheet1/std01-singular-plural-nouns-worksheet1.component';
// import { Std01SingularPluralNounsWorksheet2Component } from './std01-singular-plural-nouns-worksheet2/std01-singular-plural-nouns-worksheet2.component';
// import { Std01SingularPluralNounsWorksheet3Component } from './std01-singular-plural-nouns-worksheet3/std01-singular-plural-nouns-worksheet3.component';
// import { Std01SingularPluralNounsWorksheet4Component } from './std01-singular-plural-nouns-worksheet4/std01-singular-plural-nouns-worksheet4.component';
// import { Std01SingularPluralNounsWorksheet5Component } from './std01-singular-plural-nouns-worksheet5/std01-singular-plural-nouns-worksheet5.component';
// import { Std01SingularPluralNounsWorksheet6Component } from './std01-singular-plural-nouns-worksheet6/std01-singular-plural-nouns-worksheet6.component';
// import { Std01SingularPluralNounsWorksheet7Component } from './std01-singular-plural-nouns-worksheet7/std01-singular-plural-nouns-worksheet7.component';
// import { Std01SingularPluralNounsWorksheet8Component } from './std01-singular-plural-nouns-worksheet8/std01-singular-plural-nouns-worksheet8.component';
// import { Std01SingularPluralNounsWorksheet10Component } from './std01-singular-plural-nouns-worksheet10/std01-singular-plural-nouns-worksheet10.component';
// import { Std01SingularPluralNounsWorksheet9Component } from './std01-singular-plural-nouns-worksheet9/std01-singular-plural-nouns-worksheet9.component';
// import { Std01PrepositionsWorksheet1Component } from './std01-prepositions-worksheet1/std01-prepositions-worksheet1.component';
// import { Std01PrepositionsWorksheet2Component } from './std01-prepositions-worksheet2/std01-prepositions-worksheet2.component';
// import { Std01PrepositionsWorksheet3Component } from './std01-prepositions-worksheet3/std01-prepositions-worksheet3.component';
// import { Std01PrepositionsWorksheet4Component } from './std01-prepositions-worksheet4/std01-prepositions-worksheet4.component';
// import { Std01PrepositionsWorksheet5Component } from './std01-prepositions-worksheet5/std01-prepositions-worksheet5.component';
// import { Std01PrepositionsWorksheet6Component } from './std01-prepositions-worksheet6/std01-prepositions-worksheet6.component';
// import { Std01PrepositionsWorksheet7Component } from './std01-prepositions-worksheet7/std01-prepositions-worksheet7.component';
// import { Std01PrepositionsWorksheet8Component } from './std01-prepositions-worksheet8/std01-prepositions-worksheet8.component';
// import { Std01PrepositionsWorksheet9Component } from './std01-prepositions-worksheet9/std01-prepositions-worksheet9.component';
// import { Std01PrepositionsWorksheet10Component } from './std01-prepositions-worksheet10/std01-prepositions-worksheet10.component';
// import { Std01PossessivePronounsWorksheet1Component } from './std01-possessive-pronouns-worksheet1/std01-possessive-pronouns-worksheet1.component';
// import { Std01PossessivePronounsWorksheet2Component } from './std01-possessive-pronouns-worksheet2/std01-possessive-pronouns-worksheet2.component';
// import { Std01PossessivePronounsWorksheet3Component } from './std01-possessive-pronouns-worksheet3/std01-possessive-pronouns-worksheet3.component';
// import { Std01InterrogativePronounsWorksheet1Component } from './std01-interrogative-pronouns-worksheet1/std01-interrogative-pronouns-worksheet1.component';
// import { Std01InterrogativePronounsWorksheet2Component } from './std01-interrogative-pronouns-worksheet2/std01-interrogative-pronouns-worksheet2.component';
// import { Std01InterrogativePronounsWorksheet3Component } from './std01-interrogative-pronouns-worksheet3/std01-interrogative-pronouns-worksheet3.component';
// import { Std01PersonalPronounsWorksheet1Component } from './std01-personal-pronouns-worksheet1/std01-personal-pronouns-worksheet1.component';
// import { Std01PersonalPronounsWorksheet2Component } from './std01-personal-pronouns-worksheet2/std01-personal-pronouns-worksheet2.component';
// import { Std01PersonalPronounsWorksheet3Component } from './std01-personal-pronouns-worksheet3/std01-personal-pronouns-worksheet3.component';
// import { Std01PersonalPronounsWorksheet4Component } from './std01-personal-pronouns-worksheet4/std01-personal-pronouns-worksheet4.component';
// import { Std01PersonalPronounsWorksheet5Component } from './std01-personal-pronouns-worksheet5/std01-personal-pronouns-worksheet5.component';
// import { Std01ExclamationWorksheet1Component } from './std01-exclamation-worksheet1/std01-exclamation-worksheet1.component';
// import { Std01MixedPunctuationWorksheet1Component } from './std01-mixed-punctuation-worksheet1/std01-mixed-punctuation-worksheet1.component';
// import { Std01MixedPunctuationWorksheet2Component } from './std01-mixed-punctuation-worksheet2/std01-mixed-punctuation-worksheet2.component';
// import { Std01MixedPunctuationWorksheet3Component } from './std01-mixed-punctuation-worksheet3/std01-mixed-punctuation-worksheet3.component';
// import { Std01SynonymsWorksheet1Component } from './std01-synonyms-worksheet1/std01-synonyms-worksheet1.component';
// import { Std01SynonymsWorksheet2Component } from './std01-synonyms-worksheet2/std01-synonyms-worksheet2.component';
// import { Std01SynonymsWorksheet3Component } from './std01-synonyms-worksheet3/std01-synonyms-worksheet3.component';
// import { Std01SynonymsWorksheet4Component } from './std01-synonyms-worksheet4/std01-synonyms-worksheet4.component';
// import { Std01SynonymsWorksheet5Component } from './std01-synonyms-worksheet5/std01-synonyms-worksheet5.component';
// import { Std01SynonymsWorksheet6Component } from './std01-synonyms-worksheet6/std01-synonyms-worksheet6.component';
// import { Std01SynonymsWorksheet7Component } from './std01-synonyms-worksheet7/std01-synonyms-worksheet7.component';
// import { Std01SynonymsWorksheet8Component } from './std01-synonyms-worksheet8/std01-synonyms-worksheet8.component';
// import { Std01SynonymsWorksheet9Component } from './std01-synonyms-worksheet9/std01-synonyms-worksheet9.component';
// import { Std01SynonymsWorksheet10Component } from './std01-synonyms-worksheet10/std01-synonyms-worksheet10.component';
// import { Std01HelpingVerbsWorksheet1Component } from './std01-helping-verbs-worksheet1/std01-helping-verbs-worksheet1.component';
// import { Std01HelpingVerbsWorksheet2Component } from './std01-helping-verbs-worksheet2/std01-helping-verbs-worksheet2.component';
// import { Std01HelpingVerbsWorksheet3Component } from './std01-helping-verbs-worksheet3/std01-helping-verbs-worksheet3.component';
// import { Std01HelpingVerbsWorksheet4Component } from './std01-helping-verbs-worksheet4/std01-helping-verbs-worksheet4.component';
// import { Std01HelpingVerbsWorksheet5Component } from './std01-helping-verbs-worksheet5/std01-helping-verbs-worksheet5.component';
// import { Std01HelpingVerbsWorksheet6Component } from './std01-helping-verbs-worksheet6/std01-helping-verbs-worksheet6.component';
// import { Std01HelpingVerbsWorksheet7Component } from './std01-helping-verbs-worksheet7/std01-helping-verbs-worksheet7.component';
// import { Std01HelpingVerbsWorksheet8Component } from './std01-helping-verbs-worksheet8/std01-helping-verbs-worksheet8.component';
// import { Std01HelpingVerbsWorksheet9Component } from './std01-helping-verbs-worksheet9/std01-helping-verbs-worksheet9.component';

// import { Std01ComprehensionsWorksheet3Component } from './std01-comprehensions-worksheet3/std01-comprehensions-worksheet3.component';
// import { Std01ComprehensionsWorksheet1Component } from './std01-comprehensions-worksheet1/std01-comprehensions-worksheet1.component';
// import { Std01ComprehensionsWorksheet8Component } from './std01-comprehensions-worksheet8/std01-comprehensions-worksheet8.component';
// import { Std01ComprehensionsWorksheet2Component } from './std01-comprehensions-worksheet2/std01-comprehensions-worksheet2.component';
// import { Std01ComprehensionsWorksheet4Component } from './std01-comprehensions-worksheet4/std01-comprehensions-worksheet4.component';
// import { Std01ComprehensionsWorksheet5Component } from './std01-comprehensions-worksheet5/std01-comprehensions-worksheet5.component';

// import { Std01RhymingWordsWorksheet1Component } from './std01-rhyming-words-worksheet1/std01-rhyming-words-worksheet1.component';
// import { Std01RhymingWordsWorksheet2Component } from './std01-rhyming-words-worksheet2/std01-rhyming-words-worksheet2.component';
// import { Std01RhymingWordsWorksheet3Component } from './std01-rhyming-words-worksheet3/std01-rhyming-words-worksheet3.component';
// import { Std01RhymingWordsWorksheet4Component } from './std01-rhyming-words-worksheet4/std01-rhyming-words-worksheet4.component';
// import { Std01RhymingWordsWorksheet5Component } from './std01-rhyming-words-worksheet5/std01-rhyming-words-worksheet5.component';
// import { Std01RhymingWordsWorksheet6Component } from './std01-rhyming-words-worksheet6/std01-rhyming-words-worksheet6.component';
// import { Std01RhymingWordsWorksheet7Component } from './std01-rhyming-words-worksheet7/std01-rhyming-words-worksheet7.component';
// import { Std01RhymingWordsWorksheet8Component } from './std01-rhyming-words-worksheet8/std01-rhyming-words-worksheet8.component';
// import { Std01RhymingWordsWorksheet9Component } from './std01-rhyming-words-worksheet9/std01-rhyming-words-worksheet9.component';
// import { Std01CommonNounWorksheet1Component } from './std01-common-noun-worksheet1/std01-common-noun-worksheet1.component';
// import { Std01CommonNounWorksheet2Component } from './std01-common-noun-worksheet2/std01-common-noun-worksheet2.component';
// import { Std01CommonNounWorksheet3Component } from './std01-common-noun-worksheet3/std01-common-noun-worksheet3.component';
// import { Std01CommonNounWorksheet4Component } from './std01-common-noun-worksheet4/std01-common-noun-worksheet4.component';
// import { Std01CommonNounWorksheet5Component } from './std01-common-noun-worksheet5/std01-common-noun-worksheet5.component';
// import { Std01MixedNounWorksheet1Component } from './std01-mixed-noun-worksheet1/std01-mixed-noun-worksheet1.component';
// import { Std01MixedNounWorksheet2Component } from './std01-mixed-noun-worksheet2/std01-mixed-noun-worksheet2.component';
// import { Std01MixedNounWorksheet3Component } from './std01-mixed-noun-worksheet3/std01-mixed-noun-worksheet3.component';
// import { Std01MixedNounWorksheet4Component } from './std01-mixed-noun-worksheet4/std01-mixed-noun-worksheet4.component';
// import { Std01MixedNounWorksheet5Component } from './std01-mixed-noun-worksheet5/std01-mixed-noun-worksheet5.component';
// import { Std01ProperNounWorksheet1Component } from './std01-proper-noun-worksheet1/std01-proper-noun-worksheet1.component';
// import { Std01ProperNounWorksheet2Component } from './std01-proper-noun-worksheet2/std01-proper-noun-worksheet2.component';
// import { Std01ProperNounWorksheet3Component } from './std01-proper-noun-worksheet3/std01-proper-noun-worksheet3.component';
// import { Std01ProperNounWorksheet4Component } from './std01-proper-noun-worksheet4/std01-proper-noun-worksheet4.component';
// import { Std01ProperNounWorksheet5Component } from './std01-proper-noun-worksheet5/std01-proper-noun-worksheet5.component';
// import { Std01DemostrativePronounWorksheet1Component } from './std01-demostrative-pronoun-worksheet1/std01-demostrative-pronoun-worksheet1.component';
// import { Std01DemostrativePronounWorksheet2Component } from './std01-demostrative-pronoun-worksheet2/std01-demostrative-pronoun-worksheet2.component';
// import { Std01DemostrativePronounWorksheet3Component } from './std01-demostrative-pronoun-worksheet3/std01-demostrative-pronoun-worksheet3.component';
// import { Std01DemostrativePronounWorksheet4Component } from './std01-demostrative-pronoun-worksheet4/std01-demostrative-pronoun-worksheet4.component';
// import { Std01DemostrativePronounWorksheet5Component } from './std01-demostrative-pronoun-worksheet5/std01-demostrative-pronoun-worksheet5.component';
// import { Std01CollectiveNounWorksheet1Component } from './std01-collective-noun-worksheet1/std01-collective-noun-worksheet1.component';
// import { Std01CollectiveNounWorksheet2Component } from './std01-collective-noun-worksheet2/std01-collective-noun-worksheet2.component';
// import { Std01CollectiveNounWorksheet3Component } from './std01-collective-noun-worksheet3/std01-collective-noun-worksheet3.component';
// import { Std01CollectiveNounWorksheet4Component } from './std01-collective-noun-worksheet4/std01-collective-noun-worksheet4.component';
// import { Std01CollectiveNounWorksheet5Component } from './std01-collective-noun-worksheet5/std01-collective-noun-worksheet5.component';
// import { Std01CollectiveNounWorksheet6Component } from './std01-collective-noun-worksheet6/std01-collective-noun-worksheet6.component';
// import { Std01CollectiveNounWorksheet7Component } from './std01-collective-noun-worksheet7/std01-collective-noun-worksheet7.component';
// import { Std01CollectiveNounWorksheet8Component } from './std01-collective-noun-worksheet8/std01-collective-noun-worksheet8.component';
// import { Std01CollectiveNounWorksheet9Component } from './std01-collective-noun-worksheet9/std01-collective-noun-worksheet9.component';
// import { Std01CollectiveNounWorksheet10Component } from './std01-collective-noun-worksheet10/std01-collective-noun-worksheet10.component';
// import { Std01QuestionMarkWorksheet1Component } from './std01-question-mark-worksheet1/std01-question-mark-worksheet1.component';
// import { Std01QuestionMarkWorksheet2Component } from './std01-question-mark-worksheet2/std01-question-mark-worksheet2.component';
// import { Std01QuestionMarkWorksheet3Component } from './std01-question-mark-worksheet3/std01-question-mark-worksheet3.component';
// import { Std01CapitalLetterWorksheet1Component } from './std01-capital-letter-worksheet1/std01-capital-letter-worksheet1.component';
// import { Std01CapitalLetterWorksheet2Component } from './std01-capital-letter-worksheet2/std01-capital-letter-worksheet2.component';
// import { Std01CapitalLetterWorksheet3Component } from './std01-capital-letter-worksheet3/std01-capital-letter-worksheet3.component';
// import { Std01FutureTenseWorksheet1Component } from './std01-future-tense-worksheet1/std01-future-tense-worksheet1.component';
// import { Std01FutureTenseWorksheet2Component } from './std01-future-tense-worksheet2/std01-future-tense-worksheet2.component';
// import { Std01FutureTenseWorksheet3Component } from './std01-future-tense-worksheet3/std01-future-tense-worksheet3.component';
// import { Std01MixedTenseWorksheet1Component } from './std01-mixed-tense-worksheet1/std01-mixed-tense-worksheet1.component';
// import { Std01MixedTenseWorksheet2Component } from './std01-mixed-tense-worksheet2/std01-mixed-tense-worksheet2.component';
// import { Std01MixedTenseWorksheet3Component } from './std01-mixed-tense-worksheet3/std01-mixed-tense-worksheet3.component';
// import { Std01MixedTenseWorksheet4Component } from './std01-mixed-tense-worksheet4/std01-mixed-tense-worksheet4.component';
// import { Std01PastTenseWorksheet1Component } from './std01-past-tense-worksheet1/std01-past-tense-worksheet1.component';
// import { Std01PastTenseWorksheet2Component } from './std01-past-tense-worksheet2/std01-past-tense-worksheet2.component';
// import { Std01PastTenseWorksheet3Component } from './std01-past-tense-worksheet3/std01-past-tense-worksheet3.component';
// import { Std01PastTenseWorksheet4Component } from './std01-past-tense-worksheet4/std01-past-tense-worksheet4.component';
// import { Std01PresentTenseWorksheet1Component } from './std01-present-tense-worksheet1/std01-present-tense-worksheet1.component';
// import { Std01PresentTenseWorksheet2Component } from './std01-present-tense-worksheet2/std01-present-tense-worksheet2.component';
// import { Std01PresentTenseWorksheet3Component } from './std01-present-tense-worksheet3/std01-present-tense-worksheet3.component';
// import { Std01PresentTenseWorksheet4Component } from './std01-present-tense-worksheet4/std01-present-tense-worksheet4.component';
// import { Std01CommaWorksheet1Component } from './std01-comma-worksheet1/std01-comma-worksheet1.component';
// import { Std01CommaWorksheet2Component } from './std01-comma-worksheet2/std01-comma-worksheet2.component';
// import { Std01MixedVerbWorksheet1Component } from './std01-mixed-verb-worksheet1/std01-mixed-verb-worksheet1.component';
// import { Std01MixedVerbWorksheet2Component } from './std01-mixed-verb-worksheet2/std01-mixed-verb-worksheet2.component';
// import { Std01ComprehensionsWorksheet9Component } from './std01-comprehensions-worksheet9/std01-comprehensions-worksheet9.component';
// import { Std01ComprehensionsWorksheet10Component } from './std01-comprehensions-worksheet10/std01-comprehensions-worksheet10.component';
// import { Std01ComprehensionsWorksheet7Component } from './std01-comprehensions-worksheet7/std01-comprehensions-worksheet7.component';
// import { Std01ComprehensionsWorksheet6Component } from './std01-comprehensions-worksheet6/std01-comprehensions-worksheet6.component';
// import { Std01AntonymsReferenceListComponent } from './std01-antonyms-reference-list/std01-antonyms-reference-list.component';
// import { Std01CollectiveNounsReferenceListComponent } from './std01-collective-nouns-reference-list/std01-collective-nouns-reference-list.component';
// import { Std01CompoundWordsReferenceListComponent } from './std01-compound-words-reference-list/std01-compound-words-reference-list.component';
// import { Std01GenderNounsReferenceListComponent } from './std01-gender-nouns-reference-list/std01-gender-nouns-reference-list.component';
// import { Std01HomophonesReferenceListComponent } from './std01-homophones-reference-list/std01-homophones-reference-list.component';
// import { Std01RhymingWordsReferenceListComponent } from './std01-rhyming-words-reference-list/std01-rhyming-words-reference-list.component';
// import { Std01SynonymsReferenceListComponent } from './std01-synonyms-reference-list/std01-synonyms-reference-list.component';
// import { Std02AntonymsWorksheet1Component } from './std02-antonyms-worksheet1/std02-antonyms-worksheet1.component';
// import { Std02AntonymsWorksheet2Component } from './std02-antonyms-worksheet2/std02-antonyms-worksheet2.component';
// import { Std02AntonymsWorksheet3Component } from './std02-antonyms-worksheet3/std02-antonyms-worksheet3.component';
// import { Std02AntonymsWorksheet4Component } from './std02-antonyms-worksheet4/std02-antonyms-worksheet4.component';
// import { Std02AntonymsWorksheet5Component } from './std02-antonyms-worksheet5/std02-antonyms-worksheet5.component';
// import { Std02AntonymsWorksheet6Component } from './std02-antonyms-worksheet6/std02-antonyms-worksheet6.component';
// import { Std02AntonymsWorksheet7Component } from './std02-antonyms-worksheet7/std02-antonyms-worksheet7.component';
// import { Std02AntonymsWorksheet8Component } from './std02-antonyms-worksheet8/std02-antonyms-worksheet8.component';
// import { Std02AntonymsWorksheet9Component } from './std02-antonyms-worksheet9/std02-antonyms-worksheet9.component';
// import { Std02AntonymsWorksheet10Component } from './std02-antonyms-worksheet10/std02-antonyms-worksheet10.component';
// import { Std02CapitalLetterWorksheet1Component } from './std02-capital-letter-worksheet1/std02-capital-letter-worksheet1.component';
// import { Std02CapitalLetterWorksheet2Component } from './std02-capital-letter-worksheet2/std02-capital-letter-worksheet2.component';
// import { Std02CapitalLetterWorksheet3Component } from './std02-capital-letter-worksheet3/std02-capital-letter-worksheet3.component';
// import { Std02ConjunctionsWorksheet1Component } from './std02-conjunctions-worksheet1/std02-conjunctions-worksheet1.component';
// import { Std02ConjunctionsWorksheet3Component } from './std02-conjunctions-worksheet3/std02-conjunctions-worksheet3.component';
// import { Std02ConjunctionsWorksheet4Component } from './std02-conjunctions-worksheet4/std02-conjunctions-worksheet4.component';
// import { Std02ConjunctionsWorksheet5Component } from './std02-conjunctions-worksheet5/std02-conjunctions-worksheet5.component';
// import { Std02ConjunctionsWorksheet6Component } from './std02-conjunctions-worksheet6/std02-conjunctions-worksheet6.component';
// import { Std02ConjunctionsWorksheet7Component } from './std02-conjunctions-worksheet7/std02-conjunctions-worksheet7.component';
// import { Std02ConjunctionsWorksheet8Component } from './std02-conjunctions-worksheet8/std02-conjunctions-worksheet8.component';
// import { Std02ConjunctionsWorksheet2Component } from './std02-conjunctions-worksheet2/std02-conjunctions-worksheet2.component';
// import { Std02CollectiveNounWorksheet1Component } from './std02-collective-noun-worksheet1/std02-collective-noun-worksheet1.component';
// import { Std02CollectiveNounWorksheet2Component } from './std02-collective-noun-worksheet2/std02-collective-noun-worksheet2.component';
// import { Std02CollectiveNounWorksheet3Component } from './std02-collective-noun-worksheet3/std02-collective-noun-worksheet3.component';
// import { Std02CollectiveNounWorksheet4Component } from './std02-collective-noun-worksheet4/std02-collective-noun-worksheet4.component';
// import { Std02CollectiveNounWorksheet5Component } from './std02-collective-noun-worksheet5/std02-collective-noun-worksheet5.component';
// import { Std02CollectiveNounWorksheet6Component } from './std02-collective-noun-worksheet6/std02-collective-noun-worksheet6.component';
// import { Std02CollectiveNounWorksheet7Component } from './std02-collective-noun-worksheet7/std02-collective-noun-worksheet7.component';
// import { Std02CollectiveNounWorksheet8Component } from './std02-collective-noun-worksheet8/std02-collective-noun-worksheet8.component';
// import { Std02CollectiveNounWorksheet9Component } from './std02-collective-noun-worksheet9/std02-collective-noun-worksheet9.component';
// import { Std02CollectiveNounWorksheet10Component } from './std02-collective-noun-worksheet10/std02-collective-noun-worksheet10.component';
// import { Std02CommonNounWorksheet1Component } from './std02-common-noun-worksheet1/std02-common-noun-worksheet1.component';
// import { Std02CommonNounWorksheet2Component } from './std02-common-noun-worksheet2/std02-common-noun-worksheet2.component';
// import { Std02CommonNounWorksheet3Component } from './std02-common-noun-worksheet3/std02-common-noun-worksheet3.component';
// import { Std02CommonNounWorksheet4Component } from './std02-common-noun-worksheet4/std02-common-noun-worksheet4.component';
// import { Std02CommonNounWorksheet5Component } from './std02-common-noun-worksheet5/std02-common-noun-worksheet5.component';
// import { Std02GenderNounsWorksheet1Component } from './std02-gender-nouns-worksheet1/std02-gender-nouns-worksheet1.component';
// import { Std02GenderNounsWorksheet2Component } from './std02-gender-nouns-worksheet2/std02-gender-nouns-worksheet2.component';
// import { Std02GenderNounsWorksheet3Component } from './std02-gender-nouns-worksheet3/std02-gender-nouns-worksheet3.component';
// import { Std02GenderNounsWorksheet4Component } from './std02-gender-nouns-worksheet4/std02-gender-nouns-worksheet4.component';
// import { Std02GenderNounsWorksheet5Component } from './std02-gender-nouns-worksheet5/std02-gender-nouns-worksheet5.component';
// import { Std02GenderNounsWorksheet6Component } from './std02-gender-nouns-worksheet6/std02-gender-nouns-worksheet6.component';
// import { Std02GenderNounsWorksheet7Component } from './std02-gender-nouns-worksheet7/std02-gender-nouns-worksheet7.component';
// import { Std02GenderNounsWorksheet8Component } from './std02-gender-nouns-worksheet8/std02-gender-nouns-worksheet8.component';
// import { Std02GenderNounsWorksheet9Component } from './std02-gender-nouns-worksheet9/std02-gender-nouns-worksheet9.component';
// import { Std01AdjectiveWorksheet1Component } from './std01-adjective-worksheet1/std01-adjective-worksheet1.component';
// import { Std01AdjectiveWorksheet2Component } from './std01-adjective-worksheet2/std01-adjective-worksheet2.component';
// import { Std01AdjectiveWorksheet3Component } from './std01-adjective-worksheet3/std01-adjective-worksheet3.component';
// import { Std02GenderNounsWorksheet10Component } from './std02-gender-nouns-worksheet10/std02-gender-nouns-worksheet10.component';
// import { Std02SingularPluralNounsWorksheet1Component } from './std02-singular-plural-nouns-worksheet1/std02-singular-plural-nouns-worksheet1.component';
// import { Std02SingularPluralNounsWorksheet2Component } from './std02-singular-plural-nouns-worksheet2/std02-singular-plural-nouns-worksheet2.component';
// import { Std02SingularPluralNounsWorksheet3Component } from './std02-singular-plural-nouns-worksheet3/std02-singular-plural-nouns-worksheet3.component';
// import { Std02SingularPluralNounsWorksheet4Component } from './std02-singular-plural-nouns-worksheet4/std02-singular-plural-nouns-worksheet4.component';
// import { Std02SingularPluralNounsWorksheet5Component } from './std02-singular-plural-nouns-worksheet5/std02-singular-plural-nouns-worksheet5.component';
// import { Std02SingularPluralNounsWorksheet6Component } from './std02-singular-plural-nouns-worksheet6/std02-singular-plural-nouns-worksheet6.component';
// import { Std02SingularPluralNounsWorksheet7Component } from './std02-singular-plural-nouns-worksheet7/std02-singular-plural-nouns-worksheet7.component';
// import { Std02SingularPluralNounsWorksheet8Component } from './std02-singular-plural-nouns-worksheet8/std02-singular-plural-nouns-worksheet8.component';
// import { Std02SingularPluralNounsWorksheet9Component } from './std02-singular-plural-nouns-worksheet9/std02-singular-plural-nouns-worksheet9.component';
// import { Std02SingularPluralNounsWorksheet10Component } from './std02-singular-plural-nouns-worksheet10/std02-singular-plural-nouns-worksheet10.component';
// import { Std02DemonstrativePronounWorksheet1Component } from './std02-demonstrative-pronoun-worksheet1/std02-demonstrative-pronoun-worksheet1.component';
// import { Std02DemonstrativePronounWorksheet2Component } from './std02-demonstrative-pronoun-worksheet2/std02-demonstrative-pronoun-worksheet2.component';
// import { Std02DemonstrativePronounWorksheet3Component } from './std02-demonstrative-pronoun-worksheet3/std02-demonstrative-pronoun-worksheet3.component';
// import { Std02DemonstrativePronounWorksheet4Component } from './std02-demonstrative-pronoun-worksheet4/std02-demonstrative-pronoun-worksheet4.component';
// import { Std02DemonstrativePronounWorksheet5Component } from './std02-demonstrative-pronoun-worksheet5/std02-demonstrative-pronoun-worksheet5.component';
// import { Std02InterrogativePronounsWorksheet1Component } from './std02-interrogative-pronouns-worksheet1/std02-interrogative-pronouns-worksheet1.component';
// import { Std02InterrogativePronounsWorksheet2Component } from './std02-interrogative-pronouns-worksheet2/std02-interrogative-pronouns-worksheet2.component';
// import { Std02InterrogativePronounsWorksheet3Component } from './std02-interrogative-pronouns-worksheet3/std02-interrogative-pronouns-worksheet3.component';
// import { Std02InterrogativePronounsWorksheet4Component } from './std02-interrogative-pronouns-worksheet4/std02-interrogative-pronouns-worksheet4.component';
// import { Std02PersonalPronounsWorksheet1Component } from './std02-personal-pronouns-worksheet1/std02-personal-pronouns-worksheet1.component';
// import { Std02PersonalPronounsWorksheet2Component } from './std02-personal-pronouns-worksheet2/std02-personal-pronouns-worksheet2.component';
// import { Std02PersonalPronounsWorksheet3Component } from './std02-personal-pronouns-worksheet3/std02-personal-pronouns-worksheet3.component';
// import { Std02PersonalPronounsWorksheet4Component } from './std02-personal-pronouns-worksheet4/std02-personal-pronouns-worksheet4.component';
// import { Std02PersonalPronounsWorksheet5Component } from './std02-personal-pronouns-worksheet5/std02-personal-pronouns-worksheet5.component';
// import { Std02PossessivePronounsWorksheet1Component } from './std02-possessive-pronouns-worksheet1/std02-possessive-pronouns-worksheet1.component';
// import { Std02PossessivePronounsWorksheet2Component } from './std02-possessive-pronouns-worksheet2/std02-possessive-pronouns-worksheet2.component';
// import { Std02PossessivePronounsWorksheet3Component } from './std02-possessive-pronouns-worksheet3/std02-possessive-pronouns-worksheet3.component';
// import { Std02PossessivePronounsWorksheet4Component } from './std02-possessive-pronouns-worksheet4/std02-possessive-pronouns-worksheet4.component';
// import { Std02ExclamationWorksheet1Component } from './std02-exclamation-worksheet1/std02-exclamation-worksheet1.component';
// import { Std02QuestionMarkWorksheet1Component } from './std02-question-mark-worksheet1/std02-question-mark-worksheet1.component';
// import { Std02QuestionMarkWorksheet2Component } from './std02-question-mark-worksheet2/std02-question-mark-worksheet2.component';
// import { Std02QuestionMarkWorksheet3Component } from './std02-question-mark-worksheet3/std02-question-mark-worksheet3.component';
// import { Std02RhymingWordsWorksheet1Component } from './std02-rhyming-words-worksheet1/std02-rhyming-words-worksheet1.component';
// import { Std02RhymingWordsWorksheet2Component } from './std02-rhyming-words-worksheet2/std02-rhyming-words-worksheet2.component';
// import { Std02RhymingWordsWorksheet3Component } from './std02-rhyming-words-worksheet3/std02-rhyming-words-worksheet3.component';
// import { Std02RhymingWordsWorksheet4Component } from './std02-rhyming-words-worksheet4/std02-rhyming-words-worksheet4.component';
// import { Std02RhymingWordsWorksheet5Component } from './std02-rhyming-words-worksheet5/std02-rhyming-words-worksheet5.component';
// import { Std02RhymingWordsWorksheet6Component } from './std02-rhyming-words-worksheet6/std02-rhyming-words-worksheet6.component';
// import { Std02RhymingWordsWorksheet7Component } from './std02-rhyming-words-worksheet7/std02-rhyming-words-worksheet7.component';
// import { Std02RhymingWordsWorksheet8Component } from './std02-rhyming-words-worksheet8/std02-rhyming-words-worksheet8.component';
// import { Std02RhymingWordsWorksheet9Component } from './std02-rhyming-words-worksheet9/std02-rhyming-words-worksheet9.component';
// import { Std02RhymingWordsWorksheet10Component } from './std02-rhyming-words-worksheet10/std02-rhyming-words-worksheet10.component';
// import { Std02RhymingWordsWorksheet11Component } from './std02-rhyming-words-worksheet11/std02-rhyming-words-worksheet11.component';
// import { Std02RhymingWordsWorksheet12Component } from './std02-rhyming-words-worksheet12/std02-rhyming-words-worksheet12.component';
// import { Std02MixedTenseWorksheet1Component } from './std02-mixed-tense-worksheet1/std02-mixed-tense-worksheet1.component';
// import { Std02MixedTenseWorksheet2Component } from './std02-mixed-tense-worksheet2/std02-mixed-tense-worksheet2.component';
// import { Std02MixedTenseWorksheet3Component } from './std02-mixed-tense-worksheet3/std02-mixed-tense-worksheet3.component';
// import { Std02MixedTenseWorksheet4Component } from './std02-mixed-tense-worksheet4/std02-mixed-tense-worksheet4.component';
// import { Std02PresentTenseWorksheet1Component } from './std02-present-tense-worksheet1/std02-present-tense-worksheet1.component';
// import { Std02PresentTenseWorksheet2Component } from './std02-present-tense-worksheet2/std02-present-tense-worksheet2.component';
// import { Std02PresentTenseWorksheet3Component } from './std02-present-tense-worksheet3/std02-present-tense-worksheet3.component';
// import { Std02PresentTenseWorksheet4Component } from './std02-present-tense-worksheet4/std02-present-tense-worksheet4.component';
// import { Std02HelpingVerbsWorksheet1Component } from './std02-helping-verbs-worksheet1/std02-helping-verbs-worksheet1.component';
// import { Std02HelpingVerbsWorksheet2Component } from './std02-helping-verbs-worksheet2/std02-helping-verbs-worksheet2.component';
// import { Std02HelpingVerbsWorksheet3Component } from './std02-helping-verbs-worksheet3/std02-helping-verbs-worksheet3.component';
// import { Std02HelpingVerbsWorksheet4Component } from './std02-helping-verbs-worksheet4/std02-helping-verbs-worksheet4.component';
// import { Std02HelpingVerbsWorksheet5Component } from './std02-helping-verbs-worksheet5/std02-helping-verbs-worksheet5.component';
// import { Std02AdverbsWorksheet1Component } from './std02-adverbs-worksheet1/std02-adverbs-worksheet1.component';
// import { Std02AdverbsWorksheet8Component } from './std02-adverbs-worksheet8/std02-adverbs-worksheet8.component';
// import { Std02AdverbsWorksheet7Component } from './std02-adverbs-worksheet7/std02-adverbs-worksheet7.component';
// import { Std02AdverbsWorksheet6Component } from './std02-adverbs-worksheet6/std02-adverbs-worksheet6.component';
// import { Std02AdverbsWorksheet5Component } from './std02-adverbs-worksheet5/std02-adverbs-worksheet5.component';
// import { Std02AdverbsWorksheet4Component } from './std02-adverbs-worksheet4/std02-adverbs-worksheet4.component';
// import { Std02AdverbsWorksheet3Component } from './std02-adverbs-worksheet3/std02-adverbs-worksheet3.component';
// import { Std02AdverbsWorksheet2Component } from './std02-adverbs-worksheet2/std02-adverbs-worksheet2.component';
// import { Std02ApostropheWorksheet1Component } from './std02-apostrophe-worksheet1/std02-apostrophe-worksheet1.component';
// import { Std02ApostropheWorksheet2Component } from './std02-apostrophe-worksheet2/std02-apostrophe-worksheet2.component';
// import { Std02ApostropheWorksheet3Component } from './std02-apostrophe-worksheet3/std02-apostrophe-worksheet3.component';
// import { Std02ApostropheWorksheet4Component } from './std02-apostrophe-worksheet4/std02-apostrophe-worksheet4.component';
// import { Std02ComprehensionsWorksheet1Component } from './std02-comprehensions-worksheet1/std02-comprehensions-worksheet1.component';
// import { Std02ComprehensionsWorksheet2Component } from './std02-comprehensions-worksheet2/std02-comprehensions-worksheet2.component';
// import { Std02ComprehensionsWorksheet3Component } from './std02-comprehensions-worksheet3/std02-comprehensions-worksheet3.component';
// import { Std02ComprehensionsWorksheet4Component } from './std02-comprehensions-worksheet4/std02-comprehensions-worksheet4.component';
// import { Std02ComprehensionsWorksheet5Component } from './std02-comprehensions-worksheet5/std02-comprehensions-worksheet5.component';
// import { Std02ComprehensionsWorksheet6Component } from './std02-comprehensions-worksheet6/std02-comprehensions-worksheet6.component';
// import { Std02ComprehensionsWorksheet7Component } from './std02-comprehensions-worksheet7/std02-comprehensions-worksheet7.component';
// import { Std03AdjectivesOfQualityWorksheet1Component } from './std03-adjectives-of-quality-worksheet1/std03-adjectives-of-quality-worksheet1.component';
// import { Std03AdjectivesOfQualityWorksheet2Component } from './std03-adjectives-of-quality-worksheet2/std03-adjectives-of-quality-worksheet2.component';
// import { Std03AdjectivesOfNumberWorksheet2Component } from './std03-adjectives-of-number-worksheet2/std03-adjectives-of-number-worksheet2.component';
// import { Std03AdjectivesOfNumberWorksheet1Component } from './std03-adjectives-of-number-worksheet1/std03-adjectives-of-number-worksheet1.component';
// import { Std03AdjectivesOfQuantityWorksheet1Component } from './std03-adjectives-of-quantity-worksheet1/std03-adjectives-of-quantity-worksheet1.component';
// import { Std03AdjectivesOfQuantityWorksheet2Component } from './std03-adjectives-of-quantity-worksheet2/std03-adjectives-of-quantity-worksheet2.component';
// import { Std03MixedAdjectivesWorksheet1Component } from './std03-mixed-adjectives-worksheet1/std03-mixed-adjectives-worksheet1.component';
// import { Std03MixedAdjectivesWorksheet2Component } from './std03-mixed-adjectives-worksheet2/std03-mixed-adjectives-worksheet2.component';
// import { Std03MixedAdjectivesWorksheet3Component } from './std03-mixed-adjectives-worksheet3/std03-mixed-adjectives-worksheet3.component';
// import { Std03MixedAdjectivesWorksheet4Component } from './std03-mixed-adjectives-worksheet4/std03-mixed-adjectives-worksheet4.component';
// import { Std03DegressOfComparisonWorksheet1Component } from './std03-degress-of-comparison-worksheet1/std03-degress-of-comparison-worksheet1.component';
// import { Std03DegressOfComparisonWorksheet2Component } from './std03-degress-of-comparison-worksheet2/std03-degress-of-comparison-worksheet2.component';
// import { Std03DegressOfComparisonWorksheet3Component } from './std03-degress-of-comparison-worksheet3/std03-degress-of-comparison-worksheet3.component';
// import { Std03DegressOfComparisonWorksheet4Component } from './std03-degress-of-comparison-worksheet4/std03-degress-of-comparison-worksheet4.component';
// import { Std03DegressOfComparisonWorksheet5Component } from './std03-degress-of-comparison-worksheet5/std03-degress-of-comparison-worksheet5.component';
// import { Std03DegressOfComparisonWorksheet6Component } from './std03-degress-of-comparison-worksheet6/std03-degress-of-comparison-worksheet6.component';
// import { Std03AntonymsWorksheet1Component } from './std03-antonyms-worksheet1/std03-antonyms-worksheet1.component';
// import { Std03AntonymsWorksheet2Component } from './std03-antonyms-worksheet2/std03-antonyms-worksheet2.component';
// import { Std03AntonymsWorksheet3Component } from './std03-antonyms-worksheet3/std03-antonyms-worksheet3.component';
// import { Std03AntonymsWorksheet4Component } from './std03-antonyms-worksheet4/std03-antonyms-worksheet4.component';
// import { Std03AntonymsWorksheet5Component } from './std03-antonyms-worksheet5/std03-antonyms-worksheet5.component';
// import { Std03AntonymsWorksheet6Component } from './std03-antonyms-worksheet6/std03-antonyms-worksheet6.component';
// import { Std03AntonymsWorksheet7Component } from './std03-antonyms-worksheet7/std03-antonyms-worksheet7.component';
// import { Std03AntonymsWorksheet8Component } from './std03-antonyms-worksheet8/std03-antonyms-worksheet8.component';
// import { Std03AntonymsWorksheet9Component } from './std03-antonyms-worksheet9/std03-antonyms-worksheet9.component';
// import { Std03AntonymsWorksheet10Component } from './std03-antonyms-worksheet10/std03-antonyms-worksheet10.component';
// import { Std03ArticlesWorksheet1Component } from './std03-articles-worksheet1/std03-articles-worksheet1.component';
// import { Std03ArticlesWorksheet2Component } from './std03-articles-worksheet2/std03-articles-worksheet2.component';
// import { Std03ArticlesWorksheet3Component } from './std03-articles-worksheet3/std03-articles-worksheet3.component';
// import { Std03ArticlesWorksheet4Component } from './std03-articles-worksheet4/std03-articles-worksheet4.component';
// import { Std03ArticlesWorksheet5Component } from './std03-articles-worksheet5/std03-articles-worksheet5.component';
// import { Std03ArticlesWorksheet6Component } from './std03-articles-worksheet6/std03-articles-worksheet6.component';
// import { Std03ArticlesWorksheet7Component } from './std03-articles-worksheet7/std03-articles-worksheet7.component';
// import { Std03ArticlesWorksheet8Component } from './std03-articles-worksheet8/std03-articles-worksheet8.component';
// import { Std03ArticlesWorksheet9Component } from './std03-articles-worksheet9/std03-articles-worksheet9.component';
// import { Std03ArticlesWorksheet10Component } from './std03-articles-worksheet10/std03-articles-worksheet10.component';
// import { Std03CompoundWordWorksheet1Component } from './std03-compound-word-worksheet1/std03-compound-word-worksheet1.component';
// import { Std03CompoundWordWorksheet2Component } from './std03-compound-word-worksheet2/std03-compound-word-worksheet2.component';
// import { Std03CompoundWordWorksheet3Component } from './std03-compound-word-worksheet3/std03-compound-word-worksheet3.component';
// import { Std03CompoundWordWorksheet5Component } from './std03-compound-word-worksheet5/std03-compound-word-worksheet5.component';
// import { Std03CompoundWordWorksheet4Component } from './std03-compound-word-worksheet4/std03-compound-word-worksheet4.component';
// import { Std03CompoundWordWorksheet6Component } from './std03-compound-word-worksheet6/std03-compound-word-worksheet6.component';
// import { Std03CompoundWordWorksheet7Component } from './std03-compound-word-worksheet7/std03-compound-word-worksheet7.component';
// import { Std03CompoundWordWorksheet8Component } from './std03-compound-word-worksheet8/std03-compound-word-worksheet8.component';
// import { Std03CompoundWordWorksheet9Component } from './std03-compound-word-worksheet9/std03-compound-word-worksheet9.component';
// import { Std03CompoundWordWorksheet10Component } from './std03-compound-word-worksheet10/std03-compound-word-worksheet10.component';
// import { Std03ConjunctionsWorksheet1Component } from './std03-conjunctions-worksheet1/std03-conjunctions-worksheet1.component';
// import { Std03ConjunctionsWorksheet2Component } from './std03-conjunctions-worksheet2/std03-conjunctions-worksheet2.component';
// import { Std03ConjunctionsWorksheet3Component } from './std03-conjunctions-worksheet3/std03-conjunctions-worksheet3.component';
// import { Std03ConjunctionsWorksheet4Component } from './std03-conjunctions-worksheet4/std03-conjunctions-worksheet4.component';
// import { Std03ConjunctionsWorksheet5Component } from './std03-conjunctions-worksheet5/std03-conjunctions-worksheet5.component';
// import { Std03ConjunctionsWorksheet6Component } from './std03-conjunctions-worksheet6/std03-conjunctions-worksheet6.component';
// import { Std03ConjunctionsWorksheet7Component } from './std03-conjunctions-worksheet7/std03-conjunctions-worksheet7.component';
// import { Std03ConjunctionsWorksheet9Component } from './std03-conjunctions-worksheet9/std03-conjunctions-worksheet9.component';
// import { Std03ConjunctionsWorksheet8Component } from './std03-conjunctions-worksheet8/std03-conjunctions-worksheet8.component';
// import { Std03ConjunctionsWorksheet10Component } from './std03-conjunctions-worksheet10/std03-conjunctions-worksheet10.component';
// import { Std03HomophonesWorksheet1Component } from './std03-homophones-worksheet1/std03-homophones-worksheet1.component';
// import { Std03HomophonesWorksheet2Component } from './std03-homophones-worksheet2/std03-homophones-worksheet2.component';
// import { Std03HomophonesWorksheet3Component } from './std03-homophones-worksheet3/std03-homophones-worksheet3.component';
// import { Std03HomophonesWorksheet4Component } from './std03-homophones-worksheet4/std03-homophones-worksheet4.component';
// import { Std03HomophonesWorksheet5Component } from './std03-homophones-worksheet5/std03-homophones-worksheet5.component';
// import { Std03HomophonesWorksheet6Component } from './std03-homophones-worksheet6/std03-homophones-worksheet6.component';
// import { Std03HomophonesWorksheet7Component } from './std03-homophones-worksheet7/std03-homophones-worksheet7.component';
// import { Std03HomophonesWorksheet8Component } from './std03-homophones-worksheet8/std03-homophones-worksheet8.component';
// import { Std03HomophonesWorksheet9Component } from './std03-homophones-worksheet9/std03-homophones-worksheet9.component';
// import { Std03HomophonesWorksheet10Component } from './std03-homophones-worksheet10/std03-homophones-worksheet10.component';
// import { Std03CommonNounWorksheet1Component } from './std03-common-noun-worksheet1/std03-common-noun-worksheet1.component';
// import { Std03CommonNounWorksheet2Component } from './std03-common-noun-worksheet2/std03-common-noun-worksheet2.component';
// import { Std03CommonNounWorksheet3Component } from './std03-common-noun-worksheet3/std03-common-noun-worksheet3.component';
// import { Std03CommonNounWorksheet4Component } from './std03-common-noun-worksheet4/std03-common-noun-worksheet4.component';
// import { Std03CommonNounWorksheet5Component } from './std03-common-noun-worksheet5/std03-common-noun-worksheet5.component';
// import { Std03CollectiveNounWorksheet1Component } from './std03-collective-noun-worksheet1/std03-collective-noun-worksheet1.component';
// import { Std03CollectiveNounWorksheet2Component } from './std03-collective-noun-worksheet2/std03-collective-noun-worksheet2.component';
// import { Std03CollectiveNounWorksheet3Component } from './std03-collective-noun-worksheet3/std03-collective-noun-worksheet3.component';
// import { Std03CollectiveNounWorksheet4Component } from './std03-collective-noun-worksheet4/std03-collective-noun-worksheet4.component';
// import { Std03CollectiveNounWorksheet5Component } from './std03-collective-noun-worksheet5/std03-collective-noun-worksheet5.component';
// import { Std03CollectiveNounWorksheet6Component } from './std03-collective-noun-worksheet6/std03-collective-noun-worksheet6.component';
// import { Std03CollectiveNounWorksheet7Component } from './std03-collective-noun-worksheet7/std03-collective-noun-worksheet7.component';
// import { Std03CollectiveNounWorksheet8Component } from './std03-collective-noun-worksheet8/std03-collective-noun-worksheet8.component';
// import { Std03CollectiveNounWorksheet9Component } from './std03-collective-noun-worksheet9/std03-collective-noun-worksheet9.component';
// import { Std03CollectiveNounWorksheet10Component } from './std03-collective-noun-worksheet10/std03-collective-noun-worksheet10.component';
// import { Std03GenderNounsWorksheet1Component } from './std03-gender-nouns-worksheet1/std03-gender-nouns-worksheet1.component';
// import { Std03GenderNounsWorksheet2Component } from './std03-gender-nouns-worksheet2/std03-gender-nouns-worksheet2.component';
// import { Std03GenderNounsWorksheet3Component } from './std03-gender-nouns-worksheet3/std03-gender-nouns-worksheet3.component';
// import { Std03GenderNounsWorksheet4Component } from './std03-gender-nouns-worksheet4/std03-gender-nouns-worksheet4.component';
// import { Std03GenderNounsWorksheet5Component } from './std03-gender-nouns-worksheet5/std03-gender-nouns-worksheet5.component';
// import { Std03GenderNounsWorksheet6Component } from './std03-gender-nouns-worksheet6/std03-gender-nouns-worksheet6.component';
// import { Std03GenderNounsWorksheet7Component } from './std03-gender-nouns-worksheet7/std03-gender-nouns-worksheet7.component';
// import { Std03GenderNounsWorksheet8Component } from './std03-gender-nouns-worksheet8/std03-gender-nouns-worksheet8.component';
// import { Std03GenderNounsWorksheet9Component } from './std03-gender-nouns-worksheet9/std03-gender-nouns-worksheet9.component';
// import { Std03GenderNounsWorksheet10Component } from './std03-gender-nouns-worksheet10/std03-gender-nouns-worksheet10.component';
// import { Std03ProperNounWorksheet1Component } from './std03-proper-noun-worksheet1/std03-proper-noun-worksheet1.component';
// import { Std03ProperNounWorksheet2Component } from './std03-proper-noun-worksheet2/std03-proper-noun-worksheet2.component';
// import { Std03ProperNounWorksheet3Component } from './std03-proper-noun-worksheet3/std03-proper-noun-worksheet3.component';
// import { Std03ProperNounWorksheet4Component } from './std03-proper-noun-worksheet4/std03-proper-noun-worksheet4.component';
// import { Std03MixedNounWorksheet1Component } from './std03-mixed-noun-worksheet1/std03-mixed-noun-worksheet1.component';
// import { Std03MixedNounWorksheet2Component } from './std03-mixed-noun-worksheet2/std03-mixed-noun-worksheet2.component';
// import { Std03MixedNounWorksheet3Component } from './std03-mixed-noun-worksheet3/std03-mixed-noun-worksheet3.component';
// import { Std03MixedNounWorksheet4Component } from './std03-mixed-noun-worksheet4/std03-mixed-noun-worksheet4.component';
// import { Std03SingularPluralNounsWorksheet1Component } from './std03-singular-plural-nouns-worksheet1/std03-singular-plural-nouns-worksheet1.component';
// import { Std03SingularPluralNounsWorksheet2Component } from './std03-singular-plural-nouns-worksheet2/std03-singular-plural-nouns-worksheet2.component';
// import { Std03SingularPluralNounsWorksheet3Component } from './std03-singular-plural-nouns-worksheet3/std03-singular-plural-nouns-worksheet3.component';
// import { Std03SingularPluralNounsWorksheet4Component } from './std03-singular-plural-nouns-worksheet4/std03-singular-plural-nouns-worksheet4.component';
// import { Std03SingularPluralNounsWorksheet5Component } from './std03-singular-plural-nouns-worksheet5/std03-singular-plural-nouns-worksheet5.component';
// import { Std03SingularPluralNounsWorksheet6Component } from './std03-singular-plural-nouns-worksheet6/std03-singular-plural-nouns-worksheet6.component';
// import { Std03SingularPluralNounsWorksheet7Component } from './std03-singular-plural-nouns-worksheet7/std03-singular-plural-nouns-worksheet7.component';
// import { Std03SingularPluralNounsWorksheet8Component } from './std03-singular-plural-nouns-worksheet8/std03-singular-plural-nouns-worksheet8.component';
// import { Std03DemonstrativePronounWorksheet1Component } from './std03-demonstrative-pronoun-worksheet1/std03-demonstrative-pronoun-worksheet1.component';
// import { Std03DemonstrativePronounWorksheet2Component } from './std03-demonstrative-pronoun-worksheet2/std03-demonstrative-pronoun-worksheet2.component';
// import { Std03InterrogativePronounsWorksheet1Component } from './std03-interrogative-pronouns-worksheet1/std03-interrogative-pronouns-worksheet1.component';
// import { Std03InterrogativePronounsWorksheet2Component } from './std03-interrogative-pronouns-worksheet2/std03-interrogative-pronouns-worksheet2.component';
// import { Std03PrepositionsWorksheet1Component } from './std03-prepositions-worksheet1/std03-prepositions-worksheet1.component';
// import { Std03PrepositionsWorksheet2Component } from './std03-prepositions-worksheet2/std03-prepositions-worksheet2.component';
// import { Std03PrepositionsWorksheet3Component } from './std03-prepositions-worksheet3/std03-prepositions-worksheet3.component';
// import { Std03PrepositionsWorksheet4Component } from './std03-prepositions-worksheet4/std03-prepositions-worksheet4.component';
// import { Std03PrepositionsWorksheet5Component } from './std03-prepositions-worksheet5/std03-prepositions-worksheet5.component';
// import { Std03PrepositionsWorksheet6Component } from './std03-prepositions-worksheet6/std03-prepositions-worksheet6.component';
// import { Std03PrepositionsWorksheet7Component } from './std03-prepositions-worksheet7/std03-prepositions-worksheet7.component';
// import { Std03PrepositionsWorksheet8Component } from './std03-prepositions-worksheet8/std03-prepositions-worksheet8.component';
// import { Std03PrepositionsWorksheet9Component } from './std03-prepositions-worksheet9/std03-prepositions-worksheet9.component';
// import { Std03PrepositionsWorksheet10Component } from './std03-prepositions-worksheet10/std03-prepositions-worksheet10.component';
// import { Std03ComprehensionsWorksheet1Component } from './std03-comprehensions-worksheet1/std03-comprehensions-worksheet1.component';
// import { Std03ComprehensionsWorksheet2Component } from './std03-comprehensions-worksheet2/std03-comprehensions-worksheet2.component';
// import { Std03ComprehensionsWorksheet3Component } from './std03-comprehensions-worksheet3/std03-comprehensions-worksheet3.component';
// import { Std03ComprehensionsWorksheet4Component } from './std03-comprehensions-worksheet4/std03-comprehensions-worksheet4.component';
// import { Std03ComprehensionsWorksheet5Component } from './std03-comprehensions-worksheet5/std03-comprehensions-worksheet5.component';
// import { Std03ComprehensionsWorksheet6Component } from './std03-comprehensions-worksheet6/std03-comprehensions-worksheet6.component';
// import { Std03ComprehensionsWorksheet7Component } from './std03-comprehensions-worksheet7/std03-comprehensions-worksheet7.component';
// import { Std03PersonalPronounsWorksheet1Component } from './std03-personal-pronouns-worksheet1/std03-personal-pronouns-worksheet1.component';
// import { Std03PersonalPronounsWorksheet2Component } from './std03-personal-pronouns-worksheet2/std03-personal-pronouns-worksheet2.component';
// import { Std03PersonalPronounsWorksheet3Component } from './std03-personal-pronouns-worksheet3/std03-personal-pronouns-worksheet3.component';
// import { Std03PersonalPronounsWorksheet4Component } from './std03-personal-pronouns-worksheet4/std03-personal-pronouns-worksheet4.component';
// import { Std03PossessivePronounsWorksheet1Component } from './std03-possessive-pronouns-worksheet1/std03-possessive-pronouns-worksheet1.component';
// import { Std03PossessivePronounsWorksheet2Component } from './std03-possessive-pronouns-worksheet2/std03-possessive-pronouns-worksheet2.component';
// import { Std03CapitalLetterWorksheet1Component } from './std03-capital-letter-worksheet1/std03-capital-letter-worksheet1.component';
// import { Std03CapitalLetterWorksheet2Component } from './std03-capital-letter-worksheet2/std03-capital-letter-worksheet2.component';
// import { Std03CommaWorksheet1Component } from './std03-comma-worksheet1/std03-comma-worksheet1.component';
// import { Std03CommaWorksheet2Component } from './std03-comma-worksheet2/std03-comma-worksheet2.component';
// import { Std03ExclamationWorksheet1Component } from './std03-exclamation-worksheet1/std03-exclamation-worksheet1.component';
// import { Std03ExclamationWorksheet2Component } from './std03-exclamation-worksheet2/std03-exclamation-worksheet2.component';
// import { Std03MixedPunctuationWorksheet1Component } from './std03-mixed-punctuation-worksheet1/std03-mixed-punctuation-worksheet1.component';
// import { Std03MixedPunctuationWorksheet2Component } from './std03-mixed-punctuation-worksheet2/std03-mixed-punctuation-worksheet2.component';
// import { Std03MixedPunctuationWorksheet3Component } from './std03-mixed-punctuation-worksheet3/std03-mixed-punctuation-worksheet3.component';
// import { Std03QuestionMarkWorksheet1Component } from './std03-question-mark-worksheet1/std03-question-mark-worksheet1.component';
// import { Std03QuestionMarkWorksheet2Component } from './std03-question-mark-worksheet2/std03-question-mark-worksheet2.component';
// import { Std03RhymingWordsWorksheet1Component } from './std03-rhyming-words-worksheet1/std03-rhyming-words-worksheet1.component';
// import { Std03RhymingWordsWorksheet2Component } from './std03-rhyming-words-worksheet2/std03-rhyming-words-worksheet2.component';
// import { Std03RhymingWordsWorksheet3Component } from './std03-rhyming-words-worksheet3/std03-rhyming-words-worksheet3.component';
// import { Std03RhymingWordsWorksheet4Component } from './std03-rhyming-words-worksheet4/std03-rhyming-words-worksheet4.component';
// import { Std03RhymingWordsWorksheet5Component } from './std03-rhyming-words-worksheet5/std03-rhyming-words-worksheet5.component';
// import { Std03RhymingWordsWorksheet6Component } from './std03-rhyming-words-worksheet6/std03-rhyming-words-worksheet6.component';
// import { Std03RhymingWordsWorksheet7Component } from './std03-rhyming-words-worksheet7/std03-rhyming-words-worksheet7.component';
// import { Std03RhymingWordsWorksheet8Component } from './std03-rhyming-words-worksheet8/std03-rhyming-words-worksheet8.component';
// import { Std03RhymingWordsWorksheet9Component } from './std03-rhyming-words-worksheet9/std03-rhyming-words-worksheet9.component';
// import { Std03RhymingWordsWorksheet10Component } from './std03-rhyming-words-worksheet10/std03-rhyming-words-worksheet10.component';
// import { Std03ActionVerbWorksheet1Component } from './std03-action-verb-worksheet1/std03-action-verb-worksheet1.component';
// import { Std03ActionVerbWorksheet2Component } from './std03-action-verb-worksheet2/std03-action-verb-worksheet2.component';
// import { Std03ActionVerbWorksheet3Component } from './std03-action-verb-worksheet3/std03-action-verb-worksheet3.component';
// import { Std03ActionVerbWorksheet5Component } from './std03-action-verb-worksheet5/std03-action-verb-worksheet5.component';
// import { Std03ActionVerbWorksheet4Component } from './std03-action-verb-worksheet4/std03-action-verb-worksheet4.component';
// import { Std03AdverbsWorksheet1Component } from './std03-adverbs-worksheet1/std03-adverbs-worksheet1.component';
// import { Std03AdverbsWorksheet2Component } from './std03-adverbs-worksheet2/std03-adverbs-worksheet2.component';
// import { Std03AdverbsWorksheet3Component } from './std03-adverbs-worksheet3/std03-adverbs-worksheet3.component';
// import { Std03AdverbsWorksheet4Component } from './std03-adverbs-worksheet4/std03-adverbs-worksheet4.component';
// import { Std03AdverbsWorksheet5Component } from './std03-adverbs-worksheet5/std03-adverbs-worksheet5.component';
// import { Std03AdverbsWorksheet6Component } from './std03-adverbs-worksheet6/std03-adverbs-worksheet6.component';
// import { Std03AdverbsWorksheet7Component } from './std03-adverbs-worksheet7/std03-adverbs-worksheet7.component';
// import { Std03AdverbsWorksheet8Component } from './std03-adverbs-worksheet8/std03-adverbs-worksheet8.component';
// import { Std03AdverbsWorksheet9Component } from './std03-adverbs-worksheet9/std03-adverbs-worksheet9.component';
// import { Std03AdverbsWorksheet10Component } from './std03-adverbs-worksheet10/std03-adverbs-worksheet10.component';
// import { Std03ApostropheWorksheet1Component } from './std03-apostrophe-worksheet1/std03-apostrophe-worksheet1.component';
// import { Std03ApostropheWorksheet2Component } from './std03-apostrophe-worksheet2/std03-apostrophe-worksheet2.component';
// import { Std03FutureTenseWorksheet1Component } from './std03-future-tense-worksheet1/std03-future-tense-worksheet1.component';
// import { Std03FutureTenseWorksheet2Component } from './std03-future-tense-worksheet2/std03-future-tense-worksheet2.component';
// import { Std03FutureTenseWorksheet3Component } from './std03-future-tense-worksheet3/std03-future-tense-worksheet3.component';
// import { Std03SynonymsWorksheet1Component } from './std03-synonyms-worksheet1/std03-synonyms-worksheet1.component';
// import { Std03SynonymsWorksheet2Component } from './std03-synonyms-worksheet2/std03-synonyms-worksheet2.component';
// import { Std03SynonymsWorksheet3Component } from './std03-synonyms-worksheet3/std03-synonyms-worksheet3.component';
// import { Std03SynonymsWorksheet4Component } from './std03-synonyms-worksheet4/std03-synonyms-worksheet4.component';
// import { Std03SynonymsWorksheet5Component } from './std03-synonyms-worksheet5/std03-synonyms-worksheet5.component';
// import { Std03SynonymsWorksheet6Component } from './std03-synonyms-worksheet6/std03-synonyms-worksheet6.component';
// import { Std03SynonymsWorksheet7Component } from './std03-synonyms-worksheet7/std03-synonyms-worksheet7.component';
// import { Std03SynonymsWorksheet8Component } from './std03-synonyms-worksheet8/std03-synonyms-worksheet8.component';
// import { Std03SynonymsWorksheet9Component } from './std03-synonyms-worksheet9/std03-synonyms-worksheet9.component';
// import { Std03SynonymsWorksheet10Component } from './std03-synonyms-worksheet10/std03-synonyms-worksheet10.component';
// import { Std03MixedTenseWorksheet1Component } from './std03-mixed-tense-worksheet1/std03-mixed-tense-worksheet1.component';
// import { Std03MixedTenseWorksheet2Component } from './std03-mixed-tense-worksheet2/std03-mixed-tense-worksheet2.component';
// import { Std03MixedTenseWorksheet3Component } from './std03-mixed-tense-worksheet3/std03-mixed-tense-worksheet3.component';
// import { Std03MixedTenseWorksheet4Component } from './std03-mixed-tense-worksheet4/std03-mixed-tense-worksheet4.component';
// import { Std03PastTenseWorksheet1Component } from './std03-past-tense-worksheet1/std03-past-tense-worksheet1.component';
// import { Std03PastTenseWorksheet2Component } from './std03-past-tense-worksheet2/std03-past-tense-worksheet2.component';
// import { Std03PastTenseWorksheet3Component } from './std03-past-tense-worksheet3/std03-past-tense-worksheet3.component';
// import { Std03PastTenseWorksheet4Component } from './std03-past-tense-worksheet4/std03-past-tense-worksheet4.component';
// import { Std03PresentTenseWorksheet1Component } from './std03-present-tense-worksheet1/std03-present-tense-worksheet1.component';
// import { Std03PresentTenseWorksheet2Component } from './std03-present-tense-worksheet2/std03-present-tense-worksheet2.component';
// import { Std03PresentTenseWorksheet3Component } from './std03-present-tense-worksheet3/std03-present-tense-worksheet3.component';
// import { Std03PresentTenseWorksheet4Component } from './std03-present-tense-worksheet4/std03-present-tense-worksheet4.component';
// import { Std03HelpingVerbsWorksheet1Component } from './std03-helping-verbs-worksheet1/std03-helping-verbs-worksheet1.component';
// import { Std03HelpingVerbsWorksheet2Component } from './std03-helping-verbs-worksheet2/std03-helping-verbs-worksheet2.component';
// import { Std03HelpingVerbsWorksheet3Component } from './std03-helping-verbs-worksheet3/std03-helping-verbs-worksheet3.component';
// import { Std03HelpingVerbsWorksheet4Component } from './std03-helping-verbs-worksheet4/std03-helping-verbs-worksheet4.component';
// import { Std03HelpingVerbsWorksheet5Component } from './std03-helping-verbs-worksheet5/std03-helping-verbs-worksheet5.component';
// import { Std03MixedVerbWorksheet1Component } from './std03-mixed-verb-worksheet1/std03-mixed-verb-worksheet1.component';
// import { Std03MixedVerbWorksheet2Component } from './std03-mixed-verb-worksheet2/std03-mixed-verb-worksheet2.component';
// import { Std03MixedVerbWorksheet3Component } from './std03-mixed-verb-worksheet3/std03-mixed-verb-worksheet3.component';
// import { Std03MixedVerbWorksheet4Component } from './std03-mixed-verb-worksheet4/std03-mixed-verb-worksheet4.component';
// import { Std03MixedVerbWorksheet5Component } from './std03-mixed-verb-worksheet5/std03-mixed-verb-worksheet5.component';
// import { Std03VocabularyWorksheet1Component } from './std03-vocabulary-worksheet1/std03-vocabulary-worksheet1.component';
// import { Std03VocabularyWorksheet2Component } from './std03-vocabulary-worksheet2/std03-vocabulary-worksheet2.component';
// import { Std03VocabularyWorksheet3Component } from './std03-vocabulary-worksheet3/std03-vocabulary-worksheet3.component';
// import { Std03VocabularyWorksheet4Component } from './std03-vocabulary-worksheet4/std03-vocabulary-worksheet4.component';
// import { Std03VocabularyWorksheet5Component } from './std03-vocabulary-worksheet5/std03-vocabulary-worksheet5.component';
// import { Std03VocabularyWorksheet6Component } from './std03-vocabulary-worksheet6/std03-vocabulary-worksheet6.component';
// import { Std03VocabularyWorksheet7Component } from './std03-vocabulary-worksheet7/std03-vocabulary-worksheet7.component';
// import { Std03VocabularyWorksheet8Component } from './std03-vocabulary-worksheet8/std03-vocabulary-worksheet8.component';
// import { Std03VocabularyWorksheet9Component } from './std03-vocabulary-worksheet9/std03-vocabulary-worksheet9.component';
// import { Std03VocabularyWorksheet10Component } from './std03-vocabulary-worksheet10/std03-vocabulary-worksheet10.component';
// import { Std03VocabularyWorksheet11Component } from './std03-vocabulary-worksheet11/std03-vocabulary-worksheet11.component';
// import { Std03VocabularyWorksheet12Component } from './std03-vocabulary-worksheet12/std03-vocabulary-worksheet12.component';
// import { Std03ReflexivePronounsWorksheet1Component } from './std03-reflexive-pronouns-worksheet1/std03-reflexive-pronouns-worksheet1.component';
// import { Std03ReflexivePronounsWorksheet2Component } from './std03-reflexive-pronouns-worksheet2/std03-reflexive-pronouns-worksheet2.component';
// import { Std03QuotationMarksWorksheet1Component } from './std03-quotation-marks-worksheet1/std03-quotation-marks-worksheet1.component';
// import { Std03SubjectPredicateWorksheet1Component } from './std03-subject-predicate-worksheet1/std03-subject-predicate-worksheet1.component';
// import { Std03SubjectPredicateWorksheet2Component } from './std03-subject-predicate-worksheet2/std03-subject-predicate-worksheet2.component';
// import { Std03SubjectPredicateWorksheet3Component } from './std03-subject-predicate-worksheet3/std03-subject-predicate-worksheet3.component';
// import { Std03SubjectPredicateWorksheet4Component } from './std03-subject-predicate-worksheet4/std03-subject-predicate-worksheet4.component';
// import { Std03SubjectPredicateWorksheet5Component } from './std03-subject-predicate-worksheet5/std03-subject-predicate-worksheet5.component';
// import { Std03SubjectPredicateWorksheet6Component } from './std03-subject-predicate-worksheet6/std03-subject-predicate-worksheet6.component';
// import { Std03SubjectPredicateWorksheet7Component } from './std03-subject-predicate-worksheet7/std03-subject-predicate-worksheet7.component';
// import { Std03SubjectPredicateWorksheet8Component } from './std03-subject-predicate-worksheet8/std03-subject-predicate-worksheet8.component';
// import { Std03PrefixWorksheet1Component } from './std03-prefix-worksheet1/std03-prefix-worksheet1.component';
// import { Std03PrefixWorksheet2Component } from './std03-prefix-worksheet2/std03-prefix-worksheet2.component';
// import { Std03PrefixWorksheet3Component } from './std03-prefix-worksheet3/std03-prefix-worksheet3.component';
// import { Std03PrefixWorksheet4Component } from './std03-prefix-worksheet4/std03-prefix-worksheet4.component';
// import { Std03PrefixWorksheet5Component } from './std03-prefix-worksheet5/std03-prefix-worksheet5.component';
// import { Std03SuffixWorksheet1Component } from './std03-suffix-worksheet1/std03-suffix-worksheet1.component';
// import { Std03SuffixWorksheet2Component } from './std03-suffix-worksheet2/std03-suffix-worksheet2.component';
// import { Std03SuffixWorksheet3Component } from './std03-suffix-worksheet3/std03-suffix-worksheet3.component';
// import { Std03SuffixWorksheet4Component } from './std03-suffix-worksheet4/std03-suffix-worksheet4.component';
// import { Std03SuffixWorksheet5Component } from './std03-suffix-worksheet5/std03-suffix-worksheet5.component';
// import { Std03SemicolonColonWorksheet1Component } from './std03-semicolon-colon-worksheet1/std03-semicolon-colon-worksheet1.component';


// import { Std02AdjectivesWorksheet1Component } from './std02-adjectives-worksheet1/std02-adjectives-worksheet1.component';
// import { Std02AdjectivesWorksheet2Component } from './std02-adjectives-worksheet2/std02-adjectives-worksheet2.component';
// import { Std02AdjectivesWorksheet3Component } from './std02-adjectives-worksheet3/std02-adjectives-worksheet3.component';
// import { Std02AdjectivesWorksheet4Component } from './std02-adjectives-worksheet4/std02-adjectives-worksheet4.component';
// import { Std02AdjectivesWorksheet5Component } from './std02-adjectives-worksheet5/std02-adjectives-worksheet5.component';
// import { Std02AdjectivesWorksheet6Component } from './std02-adjectives-worksheet6/std02-adjectives-worksheet6.component';
// import { Std02AdjectivesWorksheet7Component } from './std02-adjectives-worksheet7/std02-adjectives-worksheet7.component';
// import { Std02AdjectivesWorksheet8Component } from './std02-adjectives-worksheet8/std02-adjectives-worksheet8.component';
// import { Std02AdjectivesWorksheet9Component } from './std02-adjectives-worksheet9/std02-adjectives-worksheet9.component';
// import { Std02AdjectivesWorksheet10Component } from './std02-adjectives-worksheet10/std02-adjectives-worksheet10.component';
// import { Std02ArticlesWorksheet1Component } from './std02-articles-worksheet1/std02-articles-worksheet1.component';
// import { Std02ArticlesWorksheet2Component } from './std02-articles-worksheet2/std02-articles-worksheet2.component';
// import { Std02ArticlesWorksheet3Component } from './std02-articles-worksheet3/std02-articles-worksheet3.component';
// import { Std02ArticlesWorksheet4Component } from './std02-articles-worksheet4/std02-articles-worksheet4.component';
// import { Std02ArticlesWorksheet5Component } from './std02-articles-worksheet5/std02-articles-worksheet5.component';
// import { Std02ArticlesWorksheet6Component } from './std02-articles-worksheet6/std02-articles-worksheet6.component';
// import { Std02ArticlesWorksheet7Component } from './std02-articles-worksheet7/std02-articles-worksheet7.component';
// import { Std02ArticlesWorksheet8Component } from './std02-articles-worksheet8/std02-articles-worksheet8.component';
// import { Std02ArticlesWorksheet9Component } from './std02-articles-worksheet9/std02-articles-worksheet9.component';
// import { Std02ArticlesWorksheet10Component } from './std02-articles-worksheet10/std02-articles-worksheet10.component';
// import { Std02CompoundWordsWorksheet1Component } from './std02-compound-words-worksheet1/std02-compound-words-worksheet1.component';
// import { Std02CompoundWordsWorksheet2Component } from './std02-compound-words-worksheet2/std02-compound-words-worksheet2.component';
// import { Std02CompoundWordsWorksheet3Component } from './std02-compound-words-worksheet3/std02-compound-words-worksheet3.component';
// import { Std02CompoundWordsWorksheet4Component } from './std02-compound-words-worksheet4/std02-compound-words-worksheet4.component';
// import { Std02CompoundWordsWorksheet5Component } from './std02-compound-words-worksheet5/std02-compound-words-worksheet5.component';
// import { Std02CompoundWordsWorksheet6Component } from './std02-compound-words-worksheet6/std02-compound-words-worksheet6.component';
// import { Std02CompoundWordsWorksheet7Component } from './std02-compound-words-worksheet7/std02-compound-words-worksheet7.component';
// import { Std02CompoundWordsWorksheet8Component } from './std02-compound-words-worksheet8/std02-compound-words-worksheet8.component';
// import { Std02CompoundWordsWorksheet9Component } from './std02-compound-words-worksheet9/std02-compound-words-worksheet9.component';
// import { Std02CompoundWordsWorksheet10Component } from './std02-compound-words-worksheet10/std02-compound-words-worksheet10.component';
// import { Std02ComprehensionsWorksheet8Component } from './std02-comprehensions-worksheet8/std02-comprehensions-worksheet8.component';
// import { Std02ComprehensionsWorksheet9Component } from './std02-comprehensions-worksheet9/std02-comprehensions-worksheet9.component';
// import { Std02ComprehensionsWorksheet10Component } from './std02-comprehensions-worksheet10/std02-comprehensions-worksheet10.component';
// import { Std02HomophonesWorksheet1Component } from './std02-homophones-worksheet1/std02-homophones-worksheet1.component';
// import { Std02HomophonesWorksheet2Component } from './std02-homophones-worksheet2/std02-homophones-worksheet2.component';
// import { Std02HomophonesWorksheet3Component } from './std02-homophones-worksheet3/std02-homophones-worksheet3.component';
// import { Std02HomophonesWorksheet4Component } from './std02-homophones-worksheet4/std02-homophones-worksheet4.component';
// import { Std02HomophonesWorksheet5Component } from './std02-homophones-worksheet5/std02-homophones-worksheet5.component';
// import { Std02HomophonesWorksheet6Component } from './std02-homophones-worksheet6/std02-homophones-worksheet6.component';
// import { Std02HomophonesWorksheet7Component } from './std02-homophones-worksheet7/std02-homophones-worksheet7.component';
// import { Std02HomophonesWorksheet8Component } from './std02-homophones-worksheet8/std02-homophones-worksheet8.component';
// import { Std02HomophonesWorksheet9Component } from './std02-homophones-worksheet9/std02-homophones-worksheet9.component';
// import { Std02HomophonesWorksheet10Component } from './std02-homophones-worksheet10/std02-homophones-worksheet10.component';
// import { Std02MixedNounsWorksheet1Component } from './std02-mixed-nouns-worksheet1/std02-mixed-nouns-worksheet1.component';
// import { Std02MixedNounsWorksheet2Component } from './std02-mixed-nouns-worksheet2/std02-mixed-nouns-worksheet2.component';
// import { Std02MixedNounsWorksheet3Component } from './std02-mixed-nouns-worksheet3/std02-mixed-nouns-worksheet3.component';
// import { Std02MixedNounsWorksheet4Component } from './std02-mixed-nouns-worksheet4/std02-mixed-nouns-worksheet4.component';
// import { Std02MixedNounsWorksheet5Component } from './std02-mixed-nouns-worksheet5/std02-mixed-nouns-worksheet5.component';
// import { Std02MixedNounsWorksheet6Component } from './std02-mixed-nouns-worksheet6/std02-mixed-nouns-worksheet6.component';
// import { Std02ProperNounsWorksheet1Component } from './std02-proper-nouns-worksheet1/std02-proper-nouns-worksheet1.component';
// import { Std02ProperNounsWorksheet2Component } from './std02-proper-nouns-worksheet2/std02-proper-nouns-worksheet2.component';
// import { Std02ProperNounsWorksheet3Component } from './std02-proper-nouns-worksheet3/std02-proper-nouns-worksheet3.component';
// import { Std02ProperNounsWorksheet4Component } from './std02-proper-nouns-worksheet4/std02-proper-nouns-worksheet4.component';
// import { Std02PrepositionsWorksheet1Component } from './std02-prepositions-worksheet1/std02-prepositions-worksheet1.component';
// import { Std02PrepositionsWorksheet2Component } from './std02-prepositions-worksheet2/std02-prepositions-worksheet2.component';
// import { Std02PrepositionsWorksheet3Component } from './std02-prepositions-worksheet3/std02-prepositions-worksheet3.component';
// import { Std02PrepositionsWorksheet4Component } from './std02-prepositions-worksheet4/std02-prepositions-worksheet4.component';
// import { Std02PrepositionsWorksheet5Component } from './std02-prepositions-worksheet5/std02-prepositions-worksheet5.component';
// import { Std02PrepositionsWorksheet6Component } from './std02-prepositions-worksheet6/std02-prepositions-worksheet6.component';
// import { Std02PrepositionsWorksheet7Component } from './std02-prepositions-worksheet7/std02-prepositions-worksheet7.component';
// import { Std02PrepositionsWorksheet8Component } from './std02-prepositions-worksheet8/std02-prepositions-worksheet8.component';
// import { Std02PrepositionsWorksheet9Component } from './std02-prepositions-worksheet9/std02-prepositions-worksheet9.component';
// import { Std02PrepositionsWorksheet10Component } from './std02-prepositions-worksheet10/std02-prepositions-worksheet10.component';
// import { Std02CommaWorksheet1Component } from './std02-comma-worksheet1/std02-comma-worksheet1.component';
// import { Std02CommaWorksheet2Component } from './std02-comma-worksheet2/std02-comma-worksheet2.component';
// import { Std02MixedPunctuationWorksheet1Component } from './std02-mixed-punctuation-worksheet1/std02-mixed-punctuation-worksheet1.component';
// import { Std02MixedPunctuationWorksheet2Component } from './std02-mixed-punctuation-worksheet2/std02-mixed-punctuation-worksheet2.component';
// import { Std02MixedPunctuationWorksheet3Component } from './std02-mixed-punctuation-worksheet3/std02-mixed-punctuation-worksheet3.component';
// import { Std02SynonymsWorksheet1Component } from './std02-synonyms-worksheet1/std02-synonyms-worksheet1.component';
// import { Std02SynonymsWorksheet2Component } from './std02-synonyms-worksheet2/std02-synonyms-worksheet2.component';
// import { Std02SynonymsWorksheet3Component } from './std02-synonyms-worksheet3/std02-synonyms-worksheet3.component';
// import { Std02SynonymsWorksheet4Component } from './std02-synonyms-worksheet4/std02-synonyms-worksheet4.component';
// import { Std02SynonymsWorksheet5Component } from './std02-synonyms-worksheet5/std02-synonyms-worksheet5.component';
// import { Std02SynonymsWorksheet6Component } from './std02-synonyms-worksheet6/std02-synonyms-worksheet6.component';
// import { Std02SynonymsWorksheet7Component } from './std02-synonyms-worksheet7/std02-synonyms-worksheet7.component';
// import { Std02SynonymsWorksheet8Component } from './std02-synonyms-worksheet8/std02-synonyms-worksheet8.component';
// import { Std02SynonymsWorksheet9Component } from './std02-synonyms-worksheet9/std02-synonyms-worksheet9.component';
// import { Std02SynonymsWorksheet10Component } from './std02-synonyms-worksheet10/std02-synonyms-worksheet10.component';
// import { Std02FutureTenseWorksheet1Component } from './std02-future-tense-worksheet1/std02-future-tense-worksheet1.component';
// import { Std02FutureTenseWorksheet2Component } from './std02-future-tense-worksheet2/std02-future-tense-worksheet2.component';
// import { Std02FutureTenseWorksheet3Component } from './std02-future-tense-worksheet3/std02-future-tense-worksheet3.component';
// import { Std02PastTenseWorksheet1Component } from './std02-past-tense-worksheet1/std02-past-tense-worksheet1.component';
// import { Std02PastTenseWorksheet2Component } from './std02-past-tense-worksheet2/std02-past-tense-worksheet2.component';
// import { Std02PastTenseWorksheet3Component } from './std02-past-tense-worksheet3/std02-past-tense-worksheet3.component';
// import { Std02PastTenseWorksheet4Component } from './std02-past-tense-worksheet4/std02-past-tense-worksheet4.component';
// import { Std02ActionVerbsWorksheet1Component } from './std02-action-verbs-worksheet1/std02-action-verbs-worksheet1.component';
// import { Std02ActionVerbsWorksheet2Component } from './std02-action-verbs-worksheet2/std02-action-verbs-worksheet2.component';
// import { Std02ActionVerbsWorksheet3Component } from './std02-action-verbs-worksheet3/std02-action-verbs-worksheet3.component';
// import { Std02ActionVerbsWorksheet4Component } from './std02-action-verbs-worksheet4/std02-action-verbs-worksheet4.component';
// import { Std02ActionVerbsWorksheet5Component } from './std02-action-verbs-worksheet5/std02-action-verbs-worksheet5.component';
// import { Std02MixedVerbWorksheet1Component } from './std02-mixed-verb-worksheet1/std02-mixed-verb-worksheet1.component';
// import { Std02MixedVerbWorksheet2Component } from './std02-mixed-verb-worksheet2/std02-mixed-verb-worksheet2.component';
// import { Std02MixedVerbWorksheet3Component } from './std02-mixed-verb-worksheet3/std02-mixed-verb-worksheet3.component';
// import { Std02MixedVerbWorksheet4Component } from './std02-mixed-verb-worksheet4/std02-mixed-verb-worksheet4.component';
// import { Std02MixedVerbWorksheet5Component } from './std02-mixed-verb-worksheet5/std02-mixed-verb-worksheet5.component';
// import { Std02VocabularyWorksheet1Component } from './std02-vocabulary-worksheet1/std02-vocabulary-worksheet1.component';
// import { Std02VocabularyWorksheet2Component } from './std02-vocabulary-worksheet2/std02-vocabulary-worksheet2.component';
// import { Std02VocabularyWorksheet3Component } from './std02-vocabulary-worksheet3/std02-vocabulary-worksheet3.component';
// import { Std02VocabularyWorksheet4Component } from './std02-vocabulary-worksheet4/std02-vocabulary-worksheet4.component';
// import { Std02VocabularyWorksheet5Component } from './std02-vocabulary-worksheet5/std02-vocabulary-worksheet5.component';
// import { Std02VocabularyWorksheet6Component } from './std02-vocabulary-worksheet6/std02-vocabulary-worksheet6.component';
// import { Std02VocabularyWorksheet7Component } from './std02-vocabulary-worksheet7/std02-vocabulary-worksheet7.component';
// import { Std02VocabularyWorksheet8Component } from './std02-vocabulary-worksheet8/std02-vocabulary-worksheet8.component';
// import { Std02VocabularyWorksheet9Component } from './std02-vocabulary-worksheet9/std02-vocabulary-worksheet9.component';
// import { Std02VocabularyWorksheet10Component } from './std02-vocabulary-worksheet10/std02-vocabulary-worksheet10.component';
// import { Std02AntonymsReferenceListComponent } from './std02-antonyms-reference-list/std02-antonyms-reference-list.component';
// import { Std02CollectiveNounsReferenceListComponent } from './std02-collective-nouns-reference-list/std02-collective-nouns-reference-list.component';
// import { Std02CompoundWordsReferenceListComponent } from './std02-compound-words-reference-list/std02-compound-words-reference-list.component';
// import { Std02GenderNounsReferenceListComponent } from './std02-gender-nouns-reference-list/std02-gender-nouns-reference-list.component';
// import { Std02HomophonesReferenceListComponent } from './std02-homophones-reference-list/std02-homophones-reference-list.component';
// import { Std02RhymingWordsReferenceListComponent } from './std02-rhyming-words-reference-list/std02-rhyming-words-reference-list.component';
// import { Std02SynonymsReferenceListComponent } from './std02-synonyms-reference-list/std02-synonyms-reference-list.component';
// import { Std02AdverbsReferenceListComponent } from './std02-adverbs-reference-list/std02-adverbs-reference-list.component';
// import { Std03AdverbsReferenceListComponent } from './std03-adverbs-reference-list/std03-adverbs-reference-list.component';
// import { Std03AntonymsReferenceListComponent } from './std03-antonyms-reference-list/std03-antonyms-reference-list.component';
// import { Std03CollectiveNounsReferenceListComponent } from './std03-collective-nouns-reference-list/std03-collective-nouns-reference-list.component';
// import { Std03CompoundWordsReferenceListComponent } from './std03-compound-words-reference-list/std03-compound-words-reference-list.component';
// import { Std03GenderNounsReferenceListComponent } from './std03-gender-nouns-reference-list/std03-gender-nouns-reference-list.component';
// import { Std03HomophonesReferenceListComponent } from './std03-homophones-reference-list/std03-homophones-reference-list.component';
// import { Std03SynonymsReferenceListComponent } from './std03-synonyms-reference-list/std03-synonyms-reference-list.component';
// import { Std03AbstractNounsReferenceListComponent } from './std03-abstract-nouns-reference-list/std03-abstract-nouns-reference-list.component';
// import { Std03PrefixReferenceListComponent } from './std03-prefix-reference-list/std03-prefix-reference-list.component';
// import { Std03SuffixReferenceListComponent } from './std03-suffix-reference-list/std03-suffix-reference-list.component';
// import { Std03AbstractNounWorksheet1Component } from './std03-abstract-noun-worksheet1/std03-abstract-noun-worksheet1.component';
// import { Std03AbstractNounWorksheet2Component } from './std03-abstract-noun-worksheet2/std03-abstract-noun-worksheet2.component';
// import { Std03AbstractNounWorksheet3Component } from './std03-abstract-noun-worksheet3/std03-abstract-noun-worksheet3.component';
// import { Std03AbstractNounWorksheet4Component } from './std03-abstract-noun-worksheet4/std03-abstract-noun-worksheet4.component';
// import { Std03AbstractNounWorksheet5Component } from './std03-abstract-noun-worksheet5/std03-abstract-noun-worksheet5.component';


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

      // { path: 'std01/articles/worksheet1', component: Std01ArticlesWorksheet1Component},
      // { path: 'std01/articles/worksheet2', component: Std01ArticlesWorksheet2Component},
      // { path: 'std01/articles/worksheet3', component: Std01ArticlesWorksheet3Component},
      // { path: 'std01/articles/worksheet4', component: Std01ArticlesWorksheet4Component},
      // { path: 'std01/articles/worksheet5', component: Std01ArticlesWorksheet5Component},
      // { path: 'std01/articles/worksheet6', component: Std01ArticlesWorksheet6Component},
      // { path: 'std01/articles/worksheet7', component: Std01ArticlesWorksheet7Component},
      // { path: 'std01/articles/worksheet8', component: Std01ArticlesWorksheet8Component},
      // { path: 'std01/articles/worksheet9', component: Std01ArticlesWorksheet9Component},
      // { path: 'std01/articles/worksheet10', component: Std01ArticlesWorksheet10Component},

      // { path: 'std01/compound-word/worksheet1', component: Std01CompoundWordWorksheet1Component},
      // { path: 'std01/compound-word/worksheet2', component: Std01CompoundWordWorksheet2Component},
      // { path: 'std01/compound-word/worksheet3', component: Std01CompoundWordWorksheet3Component},
      // { path: 'std01/compound-word/worksheet4', component: Std01CompoundWordWorksheet4Component},
      // { path: 'std01/compound-word/worksheet5', component: Std01CompoundWordWorksheet5Component},
      // { path: 'std01/compound-word/worksheet6', component: Std01CompoundWordWorksheet6Component},
      // { path: 'std01/compound-word/worksheet7', component: Std01CompoundWordWorksheet7Component},
      // { path: 'std01/compound-word/worksheet8', component: Std01CompoundWordWorksheet8Component},
      // { path: 'std01/compound-word/worksheet9', component: Std01CompoundWordWorksheet9Component},

      // { path: 'std01/homophones/worksheet1', component: Std01HomophonesWorksheet1Component},
      // { path: 'std01/homophones/worksheet2', component: Std01HomophonesWorksheet2Component},
      // { path: 'std01/homophones/worksheet3', component: Std01HomophonesWorksheet3Component},
      // { path: 'std01/homophones/worksheet4', component: Std01HomophonesWorksheet4Component},
      // { path: 'std01/homophones/worksheet5', component: Std01HomophonesWorksheet5Component},
      // { path: 'std01/homophones/worksheet6', component: Std01HomophonesWorksheet6Component},
      // { path: 'std01/homophones/worksheet7', component: Std01HomophonesWorksheet7Component},
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
      // { path: 'std01/compound-word/worksheet10', component: Std01CompoundWordsWorksheet10Component},
      // { path: 'std01/conjunctions/worksheet1', component: Std01ConjunctionsWorksheet1Component},
      // { path: 'std01/conjunctions/worksheet2', component: Std01ConjunctionsWorksheet2Component},
      // { path: 'std01/conjunctions/worksheet3', component: Std01ConjunctionsWorksheet3Component},
      // { path: 'std01/conjunctions/worksheet4', component: Std01ConjunctionsWorksheet4Component},
      // { path: 'std01/conjunctions/worksheet5', component: Std01ConjunctionsWorksheet5Component},
      // { path: 'std01/conjunctions/worksheet6', component: Std01ConjunctionsWorksheet6Component},
      // { path: 'std01/gender-nouns/worksheet1', component: Std01GenderNounsWorksheet1Component},
      // { path: 'std01/gender-nouns/worksheet2', component: Std01GenderNounsWorksheet2Component},
      // { path: 'std01/gender-nouns/worksheet3', component: Std01GenderNounsWorksheet3Component},
      // { path: 'std01/gender-nouns/worksheet4', component: Std01GenderNounsWorksheet4Component},
      // { path: 'std01/gender-nouns/worksheet5', component: Std01GenderNounsWorksheet5Component},
      // { path: 'std01/gender-nouns/worksheet6', component: Std01GenderNounsWorksheet6Component},
      // { path: 'std01/gender-nouns/worksheet7', component: Std01GenderNounsWorksheet7Component},
      // { path: 'std01/gender-nouns/worksheet8', component: Std01GenderNounsWorksheet8Component},
      // { path: 'std01/gender-nouns/worksheet9', component: Std01GenderNounsWorksheet9Component},
      // { path: 'std01/gender-nouns/worksheet10', component: Std01GenderNounsWorksheet10Component},
      // { path: 'std01/rhyming-words/worksheet10', component: Std01RhymingWordsWorksheet10Component},
      // { path: 'std01/rhyming-words/worksheet11', component: Std01RhymingWordsWorksheet11Component},
      // { path: 'std01/rhyming-words/worksheet12', component: Std01RhymingWordsWorksheet12Component},
      // { path: 'std01/rhyming-words/worksheet13', component: Std01RhymingWordsWorksheet13Component},
      // { path: 'std01/rhyming-words/worksheet14', component: Std01RhymingWordsWorksheet14Component},
      // { path: 'std01/rhyming-words/worksheet15', component: Std01RhymingWordsWorksheet15Component},
      // { path: 'std01/singular-plural-nouns/worksheet1', component: Std01SingularPluralNounsWorksheet1Component},
      // { path: 'std01/singular-plural-nouns/worksheet2', component: Std01SingularPluralNounsWorksheet2Component},
      // { path: 'std01/singular-plural-nouns/worksheet3', component: Std01SingularPluralNounsWorksheet3Component},
      // { path: 'std01/singular-plural-nouns/worksheet4', component: Std01SingularPluralNounsWorksheet4Component},
      // { path: 'std01/singular-plural-nouns/worksheet5', component: Std01SingularPluralNounsWorksheet5Component},
      // { path: 'std01/singular-plural-nouns/worksheet6', component: Std01SingularPluralNounsWorksheet6Component},
      // { path: 'std01/singular-plural-nouns/worksheet7', component: Std01SingularPluralNounsWorksheet7Component},
      // { path: 'std01/singular-plural-nouns/worksheet8', component: Std01SingularPluralNounsWorksheet8Component},
      // { path: 'std01/singular-plural-nouns/worksheet9', component: Std01SingularPluralNounsWorksheet9Component},
      // { path: 'std01/singular-plural-nouns/worksheet10', component: Std01SingularPluralNounsWorksheet10Component},
      // { path: 'std01/prepositions/worksheet1', component: Std01PrepositionsWorksheet1Component},
      // { path: 'std01/prepositions/worksheet2', component: Std01PrepositionsWorksheet2Component},
      // { path: 'std01/prepositions/worksheet3', component: Std01PrepositionsWorksheet3Component},
      // { path: 'std01/prepositions/worksheet4', component: Std01PrepositionsWorksheet4Component},
      // { path: 'std01/prepositions/worksheet5', component: Std01PrepositionsWorksheet5Component},
      // { path: 'std01/prepositions/worksheet6', component: Std01PrepositionsWorksheet6Component},
      // { path: 'std01/prepositions/worksheet7', component: Std01PrepositionsWorksheet7Component},
      // { path: 'std01/prepositions/worksheet8', component: Std01PrepositionsWorksheet8Component},
      // { path: 'std01/prepositions/worksheet9', component: Std01PrepositionsWorksheet9Component},
      // { path: 'std01/prepositions/worksheet10', component: Std01PrepositionsWorksheet10Component},
      // { path: 'std01/possessive-pronouns/worksheet1', component: Std01PossessivePronounsWorksheet1Component},
      // { path: 'std01/possessive-pronouns/worksheet2', component: Std01PossessivePronounsWorksheet2Component},
      // { path: 'std01/possessive-pronouns/worksheet3', component: Std01PossessivePronounsWorksheet3Component},
      // { path: 'std01/interrogative-pronouns/worksheet1', component: Std01InterrogativePronounsWorksheet1Component},
      // { path: 'std01/interrogative-pronouns/worksheet2', component: Std01InterrogativePronounsWorksheet2Component},
      // { path: 'std01/interrogative-pronouns/worksheet3', component: Std01InterrogativePronounsWorksheet3Component},
      // { path: 'std01/personal-pronouns/worksheet1', component: Std01PersonalPronounsWorksheet1Component},
      // { path: 'std01/personal-pronouns/worksheet2', component: Std01PersonalPronounsWorksheet2Component},
      // { path: 'std01/personal-pronouns/worksheet3', component: Std01PersonalPronounsWorksheet3Component},
      // { path: 'std01/personal-pronouns/worksheet4', component: Std01PersonalPronounsWorksheet4Component},
      // { path: 'std01/personal-pronouns/worksheet5', component: Std01PersonalPronounsWorksheet5Component},
      // { path: 'std01/exclamation/worksheet1', component: Std01ExclamationWorksheet1Component},
      // { path: 'std01/mixed-punctuation/worksheet1', component: Std01MixedPunctuationWorksheet1Component},
      // { path: 'std01/mixed-punctuation/worksheet2', component: Std01MixedPunctuationWorksheet2Component},
      // { path: 'std01/mixed-punctuation/worksheet3', component: Std01MixedPunctuationWorksheet3Component},
      // { path: 'std01/synonyms/worksheet1', component: Std01SynonymsWorksheet1Component},
      // { path: 'std01/synonyms/worksheet2', component: Std01SynonymsWorksheet2Component},
      // { path: 'std01/synonyms/worksheet3', component: Std01SynonymsWorksheet3Component},
      // { path: 'std01/synonyms/worksheet4', component: Std01SynonymsWorksheet4Component},
      // { path: 'std01/synonyms/worksheet5', component: Std01SynonymsWorksheet5Component},
      // { path: 'std01/synonyms/worksheet6', component: Std01SynonymsWorksheet6Component},
      // { path: 'std01/synonyms/worksheet7', component: Std01SynonymsWorksheet7Component},
      // { path: 'std01/synonyms/worksheet8', component: Std01SynonymsWorksheet8Component},
      // { path: 'std01/synonyms/worksheet9', component: Std01SynonymsWorksheet9Component},
      // { path: 'std01/synonyms/worksheet10', component: Std01SynonymsWorksheet10Component},
      // { path: 'std01/helping-verbs/worksheet1', component: Std01HelpingVerbsWorksheet1Component},
      // { path: 'std01/helping-verbs/worksheet2', component: Std01HelpingVerbsWorksheet2Component},
      // { path: 'std01/helping-verbs/worksheet3', component: Std01HelpingVerbsWorksheet3Component},
      // { path: 'std01/helping-verbs/worksheet4', component: Std01HelpingVerbsWorksheet4Component},
      // { path: 'std01/helping-verbs/worksheet5', component: Std01HelpingVerbsWorksheet5Component},
      // { path: 'std01/helping-verbs/worksheet6', component: Std01HelpingVerbsWorksheet6Component},
      // { path: 'std01/helping-verbs/worksheet7', component: Std01HelpingVerbsWorksheet7Component},
      // { path: 'std01/helping-verbs/worksheet8', component: Std01HelpingVerbsWorksheet8Component},
      // { path: 'std01/helping-verbs/worksheet9', component: Std01HelpingVerbsWorksheet9Component},
      // { path: 'std01/comprehensions/worksheet1', component: Std01ComprehensionsWorksheet1Component},
      // { path: 'std01/comprehensions/worksheet8', component: Std01ComprehensionsWorksheet8Component},
      // { path: 'std01/comprehensions/worksheet2', component: Std01ComprehensionsWorksheet2Component},
      // { path: 'std01/comprehensions/worksheet3', component: Std01ComprehensionsWorksheet3Component},
      // { path: 'std01/comprehensions/worksheet4', component: Std01ComprehensionsWorksheet4Component},
      // { path: 'std01/comprehensions/worksheet5', component: Std01ComprehensionsWorksheet5Component},

      // { path: 'std01/rhyming-words/worksheet1', component: Std01RhymingWordsWorksheet1Component},
      // { path: 'std01/rhyming-words/worksheet2', component: Std01RhymingWordsWorksheet2Component},
      // { path: 'std01/rhyming-words/worksheet3', component: Std01RhymingWordsWorksheet3Component},
      // { path: 'std01/rhyming-words/worksheet4', component: Std01RhymingWordsWorksheet4Component},
      // { path: 'std01/rhyming-words/worksheet5', component: Std01RhymingWordsWorksheet5Component},
      // { path: 'std01/rhyming-words/worksheet6', component: Std01RhymingWordsWorksheet6Component},
      // { path: 'std01/rhyming-words/worksheet7', component: Std01RhymingWordsWorksheet7Component},
      // { path: 'std01/rhyming-words/worksheet8', component: Std01RhymingWordsWorksheet8Component},
      // { path: 'std01/rhyming-words/worksheet9', component: Std01RhymingWordsWorksheet9Component},

      // { path: 'std01/common-noun/worksheet1', component: Std01CommonNounWorksheet1Component},
      // { path: 'std01/common-noun/worksheet2', component: Std01CommonNounWorksheet2Component},
      // { path: 'std01/common-noun/worksheet3', component: Std01CommonNounWorksheet3Component},
      // { path: 'std01/common-noun/worksheet4', component: Std01CommonNounWorksheet4Component},
      // { path: 'std01/common-noun/worksheet5', component: Std01CommonNounWorksheet5Component},

      // { path: 'std01/mixed-noun/worksheet1', component: Std01MixedNounWorksheet1Component},
      // { path: 'std01/mixed-noun/worksheet2', component: Std01MixedNounWorksheet2Component},
      // { path: 'std01/mixed-noun/worksheet3', component: Std01MixedNounWorksheet3Component},
      // { path: 'std01/mixed-noun/worksheet4', component: Std01MixedNounWorksheet4Component},
      // { path: 'std01/mixed-noun/worksheet5', component: Std01MixedNounWorksheet5Component},

      // { path: 'std01/proper-noun/worksheet1', component: Std01ProperNounWorksheet1Component},
      // { path: 'std01/proper-noun/worksheet2', component: Std01ProperNounWorksheet2Component},
      // { path: 'std01/proper-noun/worksheet3', component: Std01ProperNounWorksheet3Component},
      // { path: 'std01/proper-noun/worksheet4', component: Std01ProperNounWorksheet4Component},
      // { path: 'std01/proper-noun/worksheet5', component: Std01ProperNounWorksheet5Component},

      // { path: 'std01/demonstrative-pronoun/worksheet1', component: Std01DemostrativePronounWorksheet1Component},
      // { path: 'std01/demonstrative-pronoun/worksheet2', component: Std01DemostrativePronounWorksheet2Component},
      // { path: 'std01/demonstrative-pronoun/worksheet3', component: Std01DemostrativePronounWorksheet3Component},
      // { path: 'std01/demonstrative-pronoun/worksheet4', component: Std01DemostrativePronounWorksheet4Component},
      // { path: 'std01/demonstrative-pronoun/worksheet5', component: Std01DemostrativePronounWorksheet5Component},

      // { path: 'std01/collective-noun/worksheet1', component: Std01CollectiveNounWorksheet1Component},
      // { path: 'std01/collective-noun/worksheet2', component: Std01CollectiveNounWorksheet2Component},
      // { path: 'std01/collective-noun/worksheet3', component: Std01CollectiveNounWorksheet3Component},
      // { path: 'std01/collective-noun/worksheet4', component: Std01CollectiveNounWorksheet4Component},
      // { path: 'std01/collective-noun/worksheet5', component: Std01CollectiveNounWorksheet5Component},
      // { path: 'std01/collective-noun/worksheet6', component: Std01CollectiveNounWorksheet6Component},
      // { path: 'std01/collective-noun/worksheet7', component: Std01CollectiveNounWorksheet7Component},
      // { path: 'std01/collective-noun/worksheet8', component: Std01CollectiveNounWorksheet8Component},
      // { path: 'std01/collective-noun/worksheet9', component: Std01CollectiveNounWorksheet9Component},
      // { path: 'std01/collective-noun/worksheet10', component: Std01CollectiveNounWorksheet10Component},

      // { path: 'std01/question-mark/worksheet1', component: Std01QuestionMarkWorksheet1Component},
      // { path: 'std01/question-mark/worksheet2', component: Std01QuestionMarkWorksheet2Component},
      // { path: 'std01/question-mark/worksheet3', component: Std01QuestionMarkWorksheet3Component},

      // { path: 'std01/capital-letter/worksheet1', component: Std01CapitalLetterWorksheet1Component},
      // { path: 'std01/capital-letter/worksheet2', component: Std01CapitalLetterWorksheet2Component},
      // { path: 'std01/capital-letter/worksheet3', component: Std01CapitalLetterWorksheet3Component},

      // { path: 'std01/future-tense/worksheet1', component: Std01FutureTenseWorksheet1Component},
      // { path: 'std01/future-tense/worksheet2', component: Std01FutureTenseWorksheet2Component},
      // { path: 'std01/future-tense/worksheet3', component: Std01FutureTenseWorksheet3Component},

      // { path: 'std01/mixed-tense/worksheet1', component: Std01MixedTenseWorksheet1Component},
      // { path: 'std01/mixed-tense/worksheet2', component: Std01MixedTenseWorksheet2Component},
      // { path: 'std01/mixed-tense/worksheet3', component: Std01MixedTenseWorksheet3Component},
      // { path: 'std01/mixed-tense/worksheet4', component: Std01MixedTenseWorksheet4Component},

      // { path: 'std01/past-tense/worksheet1', component: Std01PastTenseWorksheet1Component},
      // { path: 'std01/past-tense/worksheet2', component: Std01PastTenseWorksheet2Component},
      // { path: 'std01/past-tense/worksheet3', component: Std01PastTenseWorksheet3Component},
      // { path: 'std01/past-tense/worksheet4', component: Std01PastTenseWorksheet4Component},

      // { path: 'std01/present-tense/worksheet1', component: Std01PresentTenseWorksheet1Component},
      // { path: 'std01/present-tense/worksheet2', component: Std01PresentTenseWorksheet2Component},
      // { path: 'std01/present-tense/worksheet3', component: Std01PresentTenseWorksheet3Component},
      // { path: 'std01/present-tense/worksheet4', component: Std01PresentTenseWorksheet4Component},

      // { path: 'std01/comma/worksheet1', component: Std01CommaWorksheet1Component},
      // { path: 'std01/comma/worksheet2', component: Std01CommaWorksheet2Component},

      // { path: 'std01/mixed-verb/worksheet1', component: Std01MixedVerbWorksheet1Component},
      // { path: 'std01/mixed-verb/worksheet2', component: Std01MixedVerbWorksheet2Component},
      
      // { path: 'std01/comprehensions/worksheet6', component: Std01ComprehensionsWorksheet6Component},
      // { path: 'std01/comprehensions/worksheet7', component: Std01ComprehensionsWorksheet7Component},
      // { path: 'std01/comprehensions/worksheet9', component: Std01ComprehensionsWorksheet9Component},
      // { path: 'std01/comprehensions/worksheet10', component: Std01ComprehensionsWorksheet10Component},

      { path: 'std01/reference-list/antonyms', loadChildren: () => import('./std01-antonyms-reference-list/std01-antonyms-reference-list.module').then(m => m.Std01AntonymsReferenceListModule)},
      // { path: 'std01/reference-list/antonyms', component: Std01AntonymsReferenceListComponent},

      // { path: 'std01/reference-list/collective-nouns', component: Std01CollectiveNounsReferenceListComponent},
      // { path: 'std01/reference-list/compound-words', component: Std01CompoundWordsReferenceListComponent},
      // { path: 'std01/reference-list/gender-nouns', component: Std01GenderNounsReferenceListComponent},
      // { path: 'std01/reference-list/homophones', component: Std01HomophonesReferenceListComponent},
      // { path: 'std01/reference-list/rhyming-words', component: Std01RhymingWordsReferenceListComponent},
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

      // { path: 'std03/adjective/quality/worksheet2', component: Std03AdjectivesOfQualityWorksheet2Component},

      // { path: 'std03/adjective/number/worksheet1', component: Std03AdjectivesOfNumberWorksheet1Component},
      // { path: 'std03/adjective/number/worksheet2', component: Std03AdjectivesOfNumberWorksheet2Component},
      
      // { path: 'std03/adjective/quantity/worksheet1', component: Std03AdjectivesOfQuantityWorksheet1Component},
      // { path: 'std03/adjective/quantity/worksheet2', component: Std03AdjectivesOfQuantityWorksheet2Component},
      
      // { path: 'std03/adjective/mixed/worksheet1', component: Std03MixedAdjectivesWorksheet1Component},
      // { path: 'std03/adjective/mixed/worksheet2', component: Std03MixedAdjectivesWorksheet2Component},
      // { path: 'std03/adjective/mixed/worksheet3', component: Std03MixedAdjectivesWorksheet3Component},
      // { path: 'std03/adjective/mixed/worksheet4', component: Std03MixedAdjectivesWorksheet4Component},
      
      // { path: 'std03/degress-of-comparison/worksheet1', component: Std03DegressOfComparisonWorksheet1Component},
      // { path: 'std03/degress-of-comparison/worksheet2', component: Std03DegressOfComparisonWorksheet2Component},
      // { path: 'std03/degress-of-comparison/worksheet3', component: Std03DegressOfComparisonWorksheet3Component},
      // { path: 'std03/degress-of-comparison/worksheet4', component: Std03DegressOfComparisonWorksheet4Component},
      // { path: 'std03/degress-of-comparison/worksheet5', component: Std03DegressOfComparisonWorksheet5Component},
      // { path: 'std03/degress-of-comparison/worksheet6', component: Std03DegressOfComparisonWorksheet6Component},
      
      // { path: 'std03/antonyms/worksheet1', component: Std03AntonymsWorksheet1Component},
      // { path: 'std03/antonyms/worksheet2', component: Std03AntonymsWorksheet2Component},
      // { path: 'std03/antonyms/worksheet3', component: Std03AntonymsWorksheet3Component},
      // { path: 'std03/antonyms/worksheet4', component: Std03AntonymsWorksheet4Component},
      // { path: 'std03/antonyms/worksheet5', component: Std03AntonymsWorksheet5Component},
      // { path: 'std03/antonyms/worksheet6', component: Std03AntonymsWorksheet6Component},
      // { path: 'std03/antonyms/worksheet7', component: Std03AntonymsWorksheet7Component},
      // { path: 'std03/antonyms/worksheet8', component: Std03AntonymsWorksheet8Component},
      // { path: 'std03/antonyms/worksheet9', component: Std03AntonymsWorksheet9Component},
      // { path: 'std03/antonyms/worksheet10', component: Std03AntonymsWorksheet10Component},
      
      // { path: 'std03/articles/worksheet1', component: Std03ArticlesWorksheet1Component},
      // { path: 'std03/articles/worksheet2', component: Std03ArticlesWorksheet2Component},
      // { path: 'std03/articles/worksheet3', component: Std03ArticlesWorksheet3Component},
      // { path: 'std03/articles/worksheet4', component: Std03ArticlesWorksheet4Component},
      // { path: 'std03/articles/worksheet5', component: Std03ArticlesWorksheet5Component},
      // { path: 'std03/articles/worksheet6', component: Std03ArticlesWorksheet6Component},
      // { path: 'std03/articles/worksheet7', component: Std03ArticlesWorksheet7Component},
      // { path: 'std03/articles/worksheet8', component: Std03ArticlesWorksheet8Component},
      // { path: 'std03/articles/worksheet9', component: Std03ArticlesWorksheet9Component},
      // { path: 'std03/articles/worksheet10', component: Std03ArticlesWorksheet10Component},
      
      // { path: 'std03/compound-word/worksheet1', component: Std03CompoundWordWorksheet1Component},
      // { path: 'std03/compound-word/worksheet2', component: Std03CompoundWordWorksheet2Component},
      // { path: 'std03/compound-word/worksheet3', component: Std03CompoundWordWorksheet3Component},
      // { path: 'std03/compound-word/worksheet4', component: Std03CompoundWordWorksheet4Component},
      // { path: 'std03/compound-word/worksheet5', component: Std03CompoundWordWorksheet5Component},
      // { path: 'std03/compound-word/worksheet6', component: Std03CompoundWordWorksheet6Component},
      // { path: 'std03/compound-word/worksheet7', component: Std03CompoundWordWorksheet7Component},
      // { path: 'std03/compound-word/worksheet8', component: Std03CompoundWordWorksheet8Component},
      // { path: 'std03/compound-word/worksheet9', component: Std03CompoundWordWorksheet9Component},
      // { path: 'std03/compound-word/worksheet10', component: Std03CompoundWordWorksheet10Component},
      
      // { path: 'std03/conjunctions/worksheet1', component: Std03ConjunctionsWorksheet1Component},
      // { path: 'std03/conjunctions/worksheet2', component: Std03ConjunctionsWorksheet2Component},
      // { path: 'std03/conjunctions/worksheet3', component: Std03ConjunctionsWorksheet3Component},
      // { path: 'std03/conjunctions/worksheet4', component: Std03ConjunctionsWorksheet4Component},
      // { path: 'std03/conjunctions/worksheet5', component: Std03ConjunctionsWorksheet5Component},
      // { path: 'std03/conjunctions/worksheet6', component: Std03ConjunctionsWorksheet6Component},
      // { path: 'std03/conjunctions/worksheet7', component: Std03ConjunctionsWorksheet7Component},
      // { path: 'std03/conjunctions/worksheet8', component: Std03ConjunctionsWorksheet8Component},
      // { path: 'std03/conjunctions/worksheet9', component: Std03ConjunctionsWorksheet9Component},
      // { path: 'std03/conjunctions/worksheet10', component: Std03ConjunctionsWorksheet10Component},
      
      // { path: 'std03/homophones/worksheet1', component: Std03HomophonesWorksheet1Component},
      // { path: 'std03/homophones/worksheet2', component: Std03HomophonesWorksheet2Component},
      // { path: 'std03/homophones/worksheet3', component: Std03HomophonesWorksheet3Component},
      // { path: 'std03/homophones/worksheet4', component: Std03HomophonesWorksheet4Component},
      // { path: 'std03/homophones/worksheet5', component: Std03HomophonesWorksheet5Component},
      // { path: 'std03/homophones/worksheet6', component: Std03HomophonesWorksheet6Component},
      // { path: 'std03/homophones/worksheet7', component: Std03HomophonesWorksheet7Component},
      // { path: 'std03/homophones/worksheet8', component: Std03HomophonesWorksheet8Component},
      // { path: 'std03/homophones/worksheet9', component: Std03HomophonesWorksheet9Component},
      // { path: 'std03/homophones/worksheet10', component: Std03HomophonesWorksheet10Component},
      
      // { path: 'std03/common-noun/worksheet1', component: Std03CommonNounWorksheet1Component},
      // { path: 'std03/common-noun/worksheet2', component: Std03CommonNounWorksheet2Component},
      // { path: 'std03/common-noun/worksheet3', component: Std03CommonNounWorksheet3Component},
      // { path: 'std03/common-noun/worksheet4', component: Std03CommonNounWorksheet4Component},
      // { path: 'std03/common-noun/worksheet5', component: Std03CommonNounWorksheet5Component},
      
      // { path: 'std03/collective-noun/worksheet1', component: Std03CollectiveNounWorksheet1Component},
      // { path: 'std03/collective-noun/worksheet2', component: Std03CollectiveNounWorksheet2Component},
      // { path: 'std03/collective-noun/worksheet3', component: Std03CollectiveNounWorksheet3Component},
      // { path: 'std03/collective-noun/worksheet4', component: Std03CollectiveNounWorksheet4Component},
      // { path: 'std03/collective-noun/worksheet5', component: Std03CollectiveNounWorksheet5Component},
      // { path: 'std03/collective-noun/worksheet6', component: Std03CollectiveNounWorksheet6Component},
      // { path: 'std03/collective-noun/worksheet7', component: Std03CollectiveNounWorksheet7Component},
      // { path: 'std03/collective-noun/worksheet8', component: Std03CollectiveNounWorksheet8Component},
      // { path: 'std03/collective-noun/worksheet9', component: Std03CollectiveNounWorksheet9Component},
      // { path: 'std03/collective-noun/worksheet10', component: Std03CollectiveNounWorksheet10Component},
      
      // { path: 'std03/gender-nouns/worksheet1', component: Std03GenderNounsWorksheet1Component},
      // { path: 'std03/gender-nouns/worksheet2', component: Std03GenderNounsWorksheet2Component},
      // { path: 'std03/gender-nouns/worksheet3', component: Std03GenderNounsWorksheet3Component},
      // { path: 'std03/gender-nouns/worksheet4', component: Std03GenderNounsWorksheet4Component},
      // { path: 'std03/gender-nouns/worksheet5', component: Std03GenderNounsWorksheet5Component},
      // { path: 'std03/gender-nouns/worksheet6', component: Std03GenderNounsWorksheet6Component},
      // { path: 'std03/gender-nouns/worksheet7', component: Std03GenderNounsWorksheet7Component},
      // { path: 'std03/gender-nouns/worksheet8', component: Std03GenderNounsWorksheet8Component},
      // { path: 'std03/gender-nouns/worksheet9', component: Std03GenderNounsWorksheet9Component},
      // { path: 'std03/gender-nouns/worksheet10', component: Std03GenderNounsWorksheet10Component},
      
      // { path: 'std03/proper-noun/worksheet1', component: Std03ProperNounWorksheet1Component},
      // { path: 'std03/proper-noun/worksheet2', component: Std03ProperNounWorksheet2Component},
      // { path: 'std03/proper-noun/worksheet3', component: Std03ProperNounWorksheet3Component},
      // { path: 'std03/proper-noun/worksheet4', component: Std03ProperNounWorksheet4Component},
      
      // { path: 'std03/mixed-noun/worksheet1', component: Std03MixedNounWorksheet1Component},
      // { path: 'std03/mixed-noun/worksheet2', component: Std03MixedNounWorksheet2Component},
      // { path: 'std03/mixed-noun/worksheet3', component: Std03MixedNounWorksheet3Component},
      // { path: 'std03/mixed-noun/worksheet4', component: Std03MixedNounWorksheet4Component},
      
      // { path: 'std03/singular-plural-nouns/worksheet1', component: Std03SingularPluralNounsWorksheet1Component},
      // { path: 'std03/singular-plural-nouns/worksheet2', component: Std03SingularPluralNounsWorksheet2Component},
      // { path: 'std03/singular-plural-nouns/worksheet3', component: Std03SingularPluralNounsWorksheet3Component},
      // { path: 'std03/singular-plural-nouns/worksheet4', component: Std03SingularPluralNounsWorksheet4Component},
      // { path: 'std03/singular-plural-nouns/worksheet5', component: Std03SingularPluralNounsWorksheet5Component},
      // { path: 'std03/singular-plural-nouns/worksheet6', component: Std03SingularPluralNounsWorksheet6Component},
      // { path: 'std03/singular-plural-nouns/worksheet7', component: Std03SingularPluralNounsWorksheet7Component},
      // { path: 'std03/singular-plural-nouns/worksheet8', component: Std03SingularPluralNounsWorksheet8Component},
      
      // { path: 'std03/demonstrative-pronoun/worksheet1', component: Std03DemonstrativePronounWorksheet1Component},
      // { path: 'std03/demonstrative-pronoun/worksheet2', component: Std03DemonstrativePronounWorksheet2Component},
      
      // { path: 'std03/interrogative-pronouns/worksheet1', component: Std03InterrogativePronounsWorksheet1Component},
      // { path: 'std03/interrogative-pronouns/worksheet2', component: Std03InterrogativePronounsWorksheet2Component},
      
      // { path: 'std03/prepositions/worksheet1', component: Std03PrepositionsWorksheet1Component},
      // { path: 'std03/prepositions/worksheet2', component: Std03PrepositionsWorksheet2Component},
      // { path: 'std03/prepositions/worksheet3', component: Std03PrepositionsWorksheet3Component},
      // { path: 'std03/prepositions/worksheet4', component: Std03PrepositionsWorksheet4Component},
      // { path: 'std03/prepositions/worksheet5', component: Std03PrepositionsWorksheet5Component},
      // { path: 'std03/prepositions/worksheet6', component: Std03PrepositionsWorksheet6Component},
      // { path: 'std03/prepositions/worksheet7', component: Std03PrepositionsWorksheet7Component},
      // { path: 'std03/prepositions/worksheet8', component: Std03PrepositionsWorksheet8Component},
      // { path: 'std03/prepositions/worksheet9', component: Std03PrepositionsWorksheet9Component},
      // { path: 'std03/prepositions/worksheet10', component: Std03PrepositionsWorksheet10Component},
      
      // { path: 'std03/comprehensions/worksheet1', component: Std03ComprehensionsWorksheet1Component},
      // { path: 'std03/comprehensions/worksheet2', component: Std03ComprehensionsWorksheet2Component},
      // { path: 'std03/comprehensions/worksheet3', component: Std03ComprehensionsWorksheet3Component},
      // { path: 'std03/comprehensions/worksheet4', component: Std03ComprehensionsWorksheet4Component},
      // { path: 'std03/comprehensions/worksheet5', component: Std03ComprehensionsWorksheet5Component},
      // { path: 'std03/comprehensions/worksheet6', component: Std03ComprehensionsWorksheet6Component},
      // { path: 'std03/comprehensions/worksheet7', component: Std03ComprehensionsWorksheet7Component},
      
      // { path: 'std03/personal-pronouns/worksheet1', component: Std03PersonalPronounsWorksheet1Component},
      // { path: 'std03/personal-pronouns/worksheet2', component: Std03PersonalPronounsWorksheet2Component},
      // { path: 'std03/personal-pronouns/worksheet3', component: Std03PersonalPronounsWorksheet3Component},
      // { path: 'std03/personal-pronouns/worksheet4', component: Std03PersonalPronounsWorksheet4Component},
      
      // { path: 'std03/possessive-pronouns/worksheet1', component: Std03PossessivePronounsWorksheet1Component},
      // { path: 'std03/possessive-pronouns/worksheet2', component: Std03PossessivePronounsWorksheet2Component},
      
      // { path: 'std03/capital-letter/worksheet1', component: Std03CapitalLetterWorksheet1Component},
      // { path: 'std03/capital-letter/worksheet2', component: Std03CapitalLetterWorksheet2Component},
      
      // { path: 'std03/comma/worksheet1', component: Std03CommaWorksheet1Component},
      // { path: 'std03/comma/worksheet2', component: Std03CommaWorksheet2Component},
      
      // { path: 'std03/exclamation/worksheet1', component: Std03ExclamationWorksheet1Component},
      // { path: 'std03/exclamation/worksheet2', component: Std03ExclamationWorksheet2Component},
      
      // { path: 'std03/mixed-punctuation/worksheet1', component: Std03MixedPunctuationWorksheet1Component},
      // { path: 'std03/mixed-punctuation/worksheet2', component: Std03MixedPunctuationWorksheet2Component},
      // { path: 'std03/mixed-punctuation/worksheet3', component: Std03MixedPunctuationWorksheet3Component},
      
      // { path: 'std03/question-mark/worksheet1', component: Std03QuestionMarkWorksheet1Component},
      // { path: 'std03/question-mark/worksheet2', component: Std03QuestionMarkWorksheet2Component},
      
      // { path: 'std03/rhyming-words/worksheet1', component: Std03RhymingWordsWorksheet1Component},
      // { path: 'std03/rhyming-words/worksheet2', component: Std03RhymingWordsWorksheet2Component},
      // { path: 'std03/rhyming-words/worksheet3', component: Std03RhymingWordsWorksheet3Component},
      // { path: 'std03/rhyming-words/worksheet4', component: Std03RhymingWordsWorksheet4Component},
      // { path: 'std03/rhyming-words/worksheet5', component: Std03RhymingWordsWorksheet5Component},
      // { path: 'std03/rhyming-words/worksheet6', component: Std03RhymingWordsWorksheet6Component},
      // { path: 'std03/rhyming-words/worksheet7', component: Std03RhymingWordsWorksheet7Component},
      // { path: 'std03/rhyming-words/worksheet8', component: Std03RhymingWordsWorksheet8Component},
      // { path: 'std03/rhyming-words/worksheet9', component: Std03RhymingWordsWorksheet9Component},
      // { path: 'std03/rhyming-words/worksheet10', component: Std03RhymingWordsWorksheet10Component},
      
      // { path: 'std03/action-verb/worksheet1', component: Std03ActionVerbWorksheet1Component},
      // { path: 'std03/action-verb/worksheet2', component: Std03ActionVerbWorksheet2Component},
      // { path: 'std03/action-verb/worksheet3', component: Std03ActionVerbWorksheet3Component},
      // { path: 'std03/action-verb/worksheet5', component: Std03ActionVerbWorksheet5Component},
      // { path: 'std03/action-verb/worksheet4', component: Std03ActionVerbWorksheet4Component},
      
      // { path: 'std03/adverbs/worksheet1', component: Std03AdverbsWorksheet1Component},
      // { path: 'std03/adverbs/worksheet2', component: Std03AdverbsWorksheet2Component},
      // { path: 'std03/adverbs/worksheet3', component: Std03AdverbsWorksheet3Component},
      // { path: 'std03/adverbs/worksheet4', component: Std03AdverbsWorksheet4Component},
      // { path: 'std03/adverbs/worksheet5', component: Std03AdverbsWorksheet5Component},
      // { path: 'std03/adverbs/worksheet6', component: Std03AdverbsWorksheet6Component},
      // { path: 'std03/adverbs/worksheet7', component: Std03AdverbsWorksheet7Component},
      // { path: 'std03/adverbs/worksheet8', component: Std03AdverbsWorksheet8Component},
      // { path: 'std03/adverbs/worksheet9', component: Std03AdverbsWorksheet9Component},
      // { path: 'std03/adverbs/worksheet10', component: Std03AdverbsWorksheet10Component},
      
      // { path: 'std03/apostrophe/worksheet1', component: Std03ApostropheWorksheet1Component},
      // { path: 'std03/apostrophe/worksheet2', component: Std03ApostropheWorksheet2Component},
      
      // { path: 'std03/future-tense/worksheet1', component: Std03FutureTenseWorksheet1Component},
      // { path: 'std03/future-tense/worksheet2', component: Std03FutureTenseWorksheet2Component},
      // { path: 'std03/future-tense/worksheet3', component: Std03FutureTenseWorksheet3Component},
      
      // { path: 'std03/synonyms/worksheet1', component: Std03SynonymsWorksheet1Component},
      // { path: 'std03/synonyms/worksheet2', component: Std03SynonymsWorksheet2Component},
      // { path: 'std03/synonyms/worksheet3', component: Std03SynonymsWorksheet3Component},
      // { path: 'std03/synonyms/worksheet4', component: Std03SynonymsWorksheet4Component},
      // { path: 'std03/synonyms/worksheet5', component: Std03SynonymsWorksheet5Component},
      // { path: 'std03/synonyms/worksheet6', component: Std03SynonymsWorksheet6Component},
      // { path: 'std03/synonyms/worksheet7', component: Std03SynonymsWorksheet7Component},
      // { path: 'std03/synonyms/worksheet8', component: Std03SynonymsWorksheet8Component},
      // { path: 'std03/synonyms/worksheet9', component: Std03SynonymsWorksheet9Component},
      // { path: 'std03/synonyms/worksheet10', component: Std03SynonymsWorksheet10Component},
      
      // { path: 'std03/mixed-tense/worksheet1', component: Std03MixedTenseWorksheet1Component},
      // { path: 'std03/mixed-tense/worksheet2', component: Std03MixedTenseWorksheet2Component},
      // { path: 'std03/mixed-tense/worksheet3', component: Std03MixedTenseWorksheet3Component},
      // { path: 'std03/mixed-tense/worksheet4', component: Std03MixedTenseWorksheet4Component},
      
      // { path: 'std03/past-tense/worksheet1', component: Std03PastTenseWorksheet1Component},
      // { path: 'std03/past-tense/worksheet2', component: Std03PastTenseWorksheet2Component},
      // { path: 'std03/past-tense/worksheet3', component: Std03PastTenseWorksheet3Component},
      // { path: 'std03/past-tense/worksheet4', component: Std03PastTenseWorksheet4Component},
      
      // { path: 'std03/present-tense/worksheet1', component: Std03PresentTenseWorksheet1Component},
      // { path: 'std03/present-tense/worksheet2', component: Std03PresentTenseWorksheet2Component},
      // { path: 'std03/present-tense/worksheet3', component: Std03PresentTenseWorksheet3Component},
      // { path: 'std03/present-tense/worksheet4', component: Std03PresentTenseWorksheet4Component},
      
      // { path: 'std03/helping-verbs/worksheet1', component: Std03HelpingVerbsWorksheet1Component},
      // { path: 'std03/helping-verbs/worksheet2', component: Std03HelpingVerbsWorksheet2Component},
      // { path: 'std03/helping-verbs/worksheet3', component: Std03HelpingVerbsWorksheet3Component},
      // { path: 'std03/helping-verbs/worksheet4', component: Std03HelpingVerbsWorksheet4Component},
      // { path: 'std03/helping-verbs/worksheet5', component: Std03HelpingVerbsWorksheet5Component},
      
      // { path: 'std03/mixed-verb/worksheet1', component: Std03MixedVerbWorksheet1Component},
      // { path: 'std03/mixed-verb/worksheet2', component: Std03MixedVerbWorksheet2Component},
      // { path: 'std03/mixed-verb/worksheet3', component: Std03MixedVerbWorksheet3Component},
      // { path: 'std03/mixed-verb/worksheet4', component: Std03MixedVerbWorksheet4Component},
      // { path: 'std03/mixed-verb/worksheet5', component: Std03MixedVerbWorksheet5Component},
      
      // { path: 'std03/vocabulary/worksheet1', component: Std03VocabularyWorksheet1Component},
      // { path: 'std03/vocabulary/worksheet2', component: Std03VocabularyWorksheet2Component},
      // { path: 'std03/vocabulary/worksheet3', component: Std03VocabularyWorksheet3Component},
      // { path: 'std03/vocabulary/worksheet4', component: Std03VocabularyWorksheet4Component},
      // { path: 'std03/vocabulary/worksheet5', component: Std03VocabularyWorksheet5Component},
      // { path: 'std03/vocabulary/worksheet6', component: Std03VocabularyWorksheet6Component},
      // { path: 'std03/vocabulary/worksheet7', component: Std03VocabularyWorksheet7Component},
      // { path: 'std03/vocabulary/worksheet8', component: Std03VocabularyWorksheet8Component},
      // { path: 'std03/vocabulary/worksheet9', component: Std03VocabularyWorksheet9Component},
      // { path: 'std03/vocabulary/worksheet10', component: Std03VocabularyWorksheet10Component},
      // { path: 'std03/vocabulary/worksheet11', component: Std03VocabularyWorksheet11Component},
      // { path: 'std03/vocabulary/worksheet12', component: Std03VocabularyWorksheet12Component},
      
      // { path: 'std03/reflexive-pronouns/worksheet1', component: Std03ReflexivePronounsWorksheet1Component},
      // { path: 'std03/reflexive-pronouns/worksheet2', component: Std03ReflexivePronounsWorksheet2Component},
      
      // { path: 'std03/quotation-marks/worksheet1', component: Std03QuotationMarksWorksheet1Component},

      // { path: 'std03/semicolon-colon/worksheet1', component: Std03SemicolonColonWorksheet1Component},
      
      // { path: 'std03/subject-predicate/worksheet1', component: Std03SubjectPredicateWorksheet1Component},
      // { path: 'std03/subject-predicate/worksheet2', component: Std03SubjectPredicateWorksheet2Component},
      // { path: 'std03/subject-predicate/worksheet3', component: Std03SubjectPredicateWorksheet3Component},
      // { path: 'std03/subject-predicate/worksheet4', component: Std03SubjectPredicateWorksheet4Component},
      // { path: 'std03/subject-predicate/worksheet5', component: Std03SubjectPredicateWorksheet5Component},
      // { path: 'std03/subject-predicate/worksheet6', component: Std03SubjectPredicateWorksheet6Component},
      // { path: 'std03/subject-predicate/worksheet7', component: Std03SubjectPredicateWorksheet7Component},
      // { path: 'std03/subject-predicate/worksheet8', component: Std03SubjectPredicateWorksheet8Component},
      
      // { path: 'std03/prefix/worksheet1', component: Std03PrefixWorksheet1Component},
      // { path: 'std03/prefix/worksheet2', component: Std03PrefixWorksheet2Component},
      // { path: 'std03/prefix/worksheet3', component: Std03PrefixWorksheet3Component},
      // { path: 'std03/prefix/worksheet4', component: Std03PrefixWorksheet4Component},
      // { path: 'std03/prefix/worksheet5', component: Std03PrefixWorksheet5Component},
      
      // { path: 'std03/suffix/worksheet1', component: Std03SuffixWorksheet1Component},
      // { path: 'std03/suffix/worksheet2', component: Std03SuffixWorksheet2Component},
      // { path: 'std03/suffix/worksheet3', component: Std03SuffixWorksheet3Component},
      // { path: 'std03/suffix/worksheet4', component: Std03SuffixWorksheet4Component},
      // { path: 'std03/suffix/worksheet5', component: Std03SuffixWorksheet5Component},
      
      // { path: 'std02/adjective/worksheet1', component: Std02AdjectivesWorksheet1Component},
      // { path: 'std02/adjective/worksheet2', component: Std02AdjectivesWorksheet2Component},
      // { path: 'std02/adjective/worksheet3', component: Std02AdjectivesWorksheet3Component},
      // { path: 'std02/adjective/worksheet4', component: Std02AdjectivesWorksheet4Component},
      // { path: 'std02/adjective/worksheet5', component: Std02AdjectivesWorksheet5Component},
      // { path: 'std02/adjective/worksheet6', component: Std02AdjectivesWorksheet6Component},
      // { path: 'std02/adjective/worksheet7', component: Std02AdjectivesWorksheet7Component},
      // { path: 'std02/adjective/worksheet8', component: Std02AdjectivesWorksheet8Component},
      // { path: 'std02/adjective/worksheet9', component: Std02AdjectivesWorksheet9Component},
      // { path: 'std02/adjective/worksheet10', component: Std02AdjectivesWorksheet10Component},
      
      // { path: 'std02/articles/worksheet1', component: Std02ArticlesWorksheet1Component},
      // { path: 'std02/articles/worksheet2', component: Std02ArticlesWorksheet2Component},
      // { path: 'std02/articles/worksheet3', component: Std02ArticlesWorksheet3Component},
      // { path: 'std02/articles/worksheet4', component: Std02ArticlesWorksheet4Component},
      // { path: 'std02/articles/worksheet5', component: Std02ArticlesWorksheet5Component},
      // { path: 'std02/articles/worksheet6', component: Std02ArticlesWorksheet6Component},
      // { path: 'std02/articles/worksheet7', component: Std02ArticlesWorksheet7Component},
      // { path: 'std02/articles/worksheet8', component: Std02ArticlesWorksheet8Component},
      // { path: 'std02/articles/worksheet9', component: Std02ArticlesWorksheet9Component},
      // { path: 'std02/articles/worksheet10', component: Std02ArticlesWorksheet10Component},
      
      // { path: 'std02/compound-word/worksheet1', component:Std02CompoundWordsWorksheet1Component },
      // { path: 'std02/compound-word/worksheet2', component: Std02CompoundWordsWorksheet2Component},
      // { path: 'std02/compound-word/worksheet3', component: Std02CompoundWordsWorksheet3Component},
      // { path: 'std02/compound-word/worksheet4', component: Std02CompoundWordsWorksheet4Component},
      // { path: 'std02/compound-word/worksheet5', component: Std02CompoundWordsWorksheet5Component},
      // { path: 'std02/compound-word/worksheet6', component:Std02CompoundWordsWorksheet6Component },
      // { path: 'std02/compound-word/worksheet7', component: Std02CompoundWordsWorksheet7Component},
      // { path: 'std02/compound-word/worksheet8', component: Std02CompoundWordsWorksheet8Component},
      // { path: 'std02/compound-word/worksheet9', component: Std02CompoundWordsWorksheet9Component},
      // { path: 'std02/compound-word/worksheet10', component: Std02CompoundWordsWorksheet10Component},
      
      // { path: 'std02/comprehensions/worksheet8', component: Std02ComprehensionsWorksheet8Component},
      // { path: 'std02/comprehensions/worksheet9', component: Std02ComprehensionsWorksheet9Component},
      // { path: 'std02/comprehensions/worksheet10', component: Std02ComprehensionsWorksheet10Component},
      
      // { path: 'std02/homophones/worksheet1', component:Std02HomophonesWorksheet1Component },
      // { path: 'std02/homophones/worksheet2', component:Std02HomophonesWorksheet2Component },
      // { path: 'std02/homophones/worksheet3', component:Std02HomophonesWorksheet3Component },
      // { path: 'std02/homophones/worksheet4', component:Std02HomophonesWorksheet4Component },
      // { path: 'std02/homophones/worksheet5', component:Std02HomophonesWorksheet5Component },
      // { path: 'std02/homophones/worksheet6', component:Std02HomophonesWorksheet6Component },
      // { path: 'std02/homophones/worksheet7', component:Std02HomophonesWorksheet7Component },
      // { path: 'std02/homophones/worksheet8', component:Std02HomophonesWorksheet8Component },
      // { path: 'std02/homophones/worksheet9', component:Std02HomophonesWorksheet9Component },
      // { path: 'std02/homophones/worksheet10', component:Std02HomophonesWorksheet10Component },
      
      // { path: 'std02/mixed-noun/worksheet1', component:Std02MixedNounsWorksheet1Component },
      // { path: 'std02/mixed-noun/worksheet2', component:Std02MixedNounsWorksheet2Component },
      // { path: 'std02/mixed-noun/worksheet3', component:Std02MixedNounsWorksheet3Component },
      // { path: 'std02/mixed-noun/worksheet4', component:Std02MixedNounsWorksheet4Component },
      // { path: 'std02/mixed-noun/worksheet5', component:Std02MixedNounsWorksheet5Component },
      // { path: 'std02/mixed-noun/worksheet6', component:Std02MixedNounsWorksheet6Component },
      
      // { path: 'std02/proper-noun/worksheet1', component: Std02ProperNounsWorksheet1Component},
      // { path: 'std02/proper-noun/worksheet2', component: Std02ProperNounsWorksheet2Component},
      // { path: 'std02/proper-noun/worksheet3', component: Std02ProperNounsWorksheet3Component},
      // { path: 'std02/proper-noun/worksheet4', component: Std02ProperNounsWorksheet4Component},
      
      // { path: 'std02/prepositions/worksheet1', component: Std02PrepositionsWorksheet1Component},
      // { path: 'std02/prepositions/worksheet2', component: Std02PrepositionsWorksheet2Component},
      // { path: 'std02/prepositions/worksheet3', component: Std02PrepositionsWorksheet3Component},
      // { path: 'std02/prepositions/worksheet4', component: Std02PrepositionsWorksheet4Component},
      // { path: 'std02/prepositions/worksheet5', component: Std02PrepositionsWorksheet5Component},
      // { path: 'std02/prepositions/worksheet6', component: Std02PrepositionsWorksheet6Component},
      // { path: 'std02/prepositions/worksheet7', component: Std02PrepositionsWorksheet7Component},
      // { path: 'std02/prepositions/worksheet8', component: Std02PrepositionsWorksheet8Component},
      // { path: 'std02/prepositions/worksheet9', component: Std02PrepositionsWorksheet9Component},
      // { path: 'std02/prepositions/worksheet10', component: Std02PrepositionsWorksheet10Component},
      
      // { path: 'std02/comma/worksheet1', component: Std02CommaWorksheet1Component},
      // { path: 'std02/comma/worksheet2', component: Std02CommaWorksheet2Component},
      
      // { path: 'std02/mixed-punctuation/worksheet1', component: Std02MixedPunctuationWorksheet1Component},
      // { path: 'std02/mixed-punctuation/worksheet2', component: Std02MixedPunctuationWorksheet2Component},
      // { path: 'std02/mixed-punctuation/worksheet3', component: Std02MixedPunctuationWorksheet3Component},
      
      // { path: 'std02/synonyms/worksheet1', component: Std02SynonymsWorksheet1Component},
      // { path: 'std02/synonyms/worksheet2', component: Std02SynonymsWorksheet2Component},
      // { path: 'std02/synonyms/worksheet3', component: Std02SynonymsWorksheet3Component},
      // { path: 'std02/synonyms/worksheet4', component: Std02SynonymsWorksheet4Component},
      // { path: 'std02/synonyms/worksheet5', component: Std02SynonymsWorksheet5Component},
      // { path: 'std02/synonyms/worksheet6', component: Std02SynonymsWorksheet6Component},
      // { path: 'std02/synonyms/worksheet7', component: Std02SynonymsWorksheet7Component},
      // { path: 'std02/synonyms/worksheet8', component: Std02SynonymsWorksheet8Component},
      // { path: 'std02/synonyms/worksheet9', component: Std02SynonymsWorksheet9Component},
      // { path: 'std02/synonyms/worksheet10', component: Std02SynonymsWorksheet10Component},
      
      // { path: 'std02/future-tense/worksheet1', component: Std02FutureTenseWorksheet1Component},
      // { path: 'std02/future-tense/worksheet2', component: Std02FutureTenseWorksheet2Component},
      // { path: 'std02/future-tense/worksheet3', component: Std02FutureTenseWorksheet3Component},
      
      // { path: 'std02/past-tense/worksheet1', component: Std02PastTenseWorksheet1Component},
      // { path: 'std02/past-tense/worksheet2', component: Std02PastTenseWorksheet2Component},
      // { path: 'std02/past-tense/worksheet3', component: Std02PastTenseWorksheet3Component},
      // { path: 'std02/past-tense/worksheet4', component: Std02PastTenseWorksheet4Component},
      
      // { path: 'std02/action-verb/worksheet1', component: Std02ActionVerbsWorksheet1Component},
      // { path: 'std02/action-verb/worksheet2', component: Std02ActionVerbsWorksheet2Component},
      // { path: 'std02/action-verb/worksheet3', component: Std02ActionVerbsWorksheet3Component},
      // { path: 'std02/action-verb/worksheet4', component: Std02ActionVerbsWorksheet4Component},
      // { path: 'std02/action-verb/worksheet5', component: Std02ActionVerbsWorksheet5Component},
      
      // { path: 'std02/mixed-verb/worksheet1', component: Std02MixedVerbWorksheet1Component},
      // { path: 'std02/mixed-verb/worksheet2', component: Std02MixedVerbWorksheet2Component},
      // { path: 'std02/mixed-verb/worksheet3', component: Std02MixedVerbWorksheet3Component},
      // { path: 'std02/mixed-verb/worksheet4', component: Std02MixedVerbWorksheet4Component},
      // { path: 'std02/mixed-verb/worksheet5', component: Std02MixedVerbWorksheet5Component},
      
      // { path: 'std02/vocabulary/worksheet1', component: Std02VocabularyWorksheet1Component},
      // { path: 'std02/vocabulary/worksheet2', component: Std02VocabularyWorksheet2Component},
      // { path: 'std02/vocabulary/worksheet3', component: Std02VocabularyWorksheet3Component},
      // { path: 'std02/vocabulary/worksheet4', component: Std02VocabularyWorksheet4Component},
      // { path: 'std02/vocabulary/worksheet5', component: Std02VocabularyWorksheet5Component},
      // { path: 'std02/vocabulary/worksheet6', component: Std02VocabularyWorksheet6Component},
      // { path: 'std02/vocabulary/worksheet7', component: Std02VocabularyWorksheet7Component},
      // { path: 'std02/vocabulary/worksheet8', component: Std02VocabularyWorksheet8Component},
      // { path: 'std02/vocabulary/worksheet9', component: Std02VocabularyWorksheet9Component},
      // { path: 'std02/vocabulary/worksheet10', component: Std02VocabularyWorksheet10Component},
      
      // { path: 'std02/reference-list/adverbs', component: Std02AdverbsReferenceListComponent},
      // { path: 'std02/reference-list/antonyms', component: Std02AntonymsReferenceListComponent},
      // { path: 'std02/reference-list/collective-nouns', component: Std02CollectiveNounsReferenceListComponent},
      // { path: 'std02/reference-list/compound-words', component: Std02CompoundWordsReferenceListComponent},
      // { path: 'std02/reference-list/gender-nouns', component: Std02GenderNounsReferenceListComponent},
      // { path: 'std02/reference-list/homophones', component: Std02HomophonesReferenceListComponent},
      // { path: 'std02/reference-list/rhyming-words', component: Std02RhymingWordsReferenceListComponent},
      // { path: 'std02/reference-list/synonyms', component: Std02SynonymsReferenceListComponent},
      
      // { path: 'std03/reference-list/abstract-nouns', component: Std03AbstractNounsReferenceListComponent},
      // { path: 'std03/reference-list/adverbs', component: Std03AdverbsReferenceListComponent},
      // { path: 'std03/reference-list/antonyms', component: Std03AntonymsReferenceListComponent},
      // { path: 'std03/reference-list/collective-nouns', component: Std03CollectiveNounsReferenceListComponent},
      // { path: 'std03/reference-list/compound-words', component: Std03CompoundWordsReferenceListComponent},
      // { path: 'std03/reference-list/gender-nouns', component: Std03GenderNounsReferenceListComponent},
      // { path: 'std03/reference-list/homophones', component: Std03HomophonesReferenceListComponent},
      // { path: 'std03/reference-list/prefix', component: Std03PrefixReferenceListComponent},
      // { path: 'std03/reference-list/suffix', component: Std03SuffixReferenceListComponent},
      // { path: 'std03/reference-list/synonyms', component: Std03SynonymsReferenceListComponent},

      
      // { path: 'std03/abstract-noun/worksheet1', component:Std03AbstractNounWorksheet1Component },
      // { path: 'std03/abstract-noun/worksheet2', component:Std03AbstractNounWorksheet2Component },
      // { path: 'std03/abstract-noun/worksheet3', component:Std03AbstractNounWorksheet3Component },
      // { path: 'std03/abstract-noun/worksheet4', component:Std03AbstractNounWorksheet4Component },
      // { path: 'std03/abstract-noun/worksheet5', component:Std03AbstractNounWorksheet5Component },
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
