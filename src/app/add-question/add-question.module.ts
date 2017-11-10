import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



/* Components regarding the addquestion */
import { AddQuestionComponent } from './add-question.component';
import { PromptInput } from './prompt-input.component';
import { QuestionTypeSelector } from './question-type-selector.component';
import { BranchSelector } from './branch-selector.component';
import { ChoicesCreator } from './choices-creator.component';
import { SolutionInput } from './solution-input.component';
import { ZoneSelector } from './zone-selector.component';
import { ImageLinkInput } from './image-link-input.component';
import { SoundLinkInput } from './sound-link-input.component';






/* All routes regarding the addquestion */
const addQuestionRoutes: Routes = [
];

@NgModule({
  /* Use child routing */
  imports: [ RouterModule.forChild(addQuestionRoutes), BrowserModule],
  /* Make routes available to those who import this module */
  exports: [ RouterModule ],
  /* Make the components */
  declarations: [
    AddQuestionComponent,
    PromptInput,
    QuestionTypeSelector,
    BranchSelector,
    ChoicesCreator,
    SolutionInput,
    ZoneSelector,
    ImageLinkInput,
    SoundLinkInput
  ]
})

export class AddQuestionModule { }
