import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';



/* Components regarding the addquestion */
import { AddQuestionComponent } from './add-question.component';




@NgModule({
  /* Use child routing */
  imports: [BrowserModule, FormsModule],
  /* Make the components */
  declarations: [
    AddQuestionComponent
  ]
})

export class AddQuestionModule { }
