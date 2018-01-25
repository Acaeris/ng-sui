import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticImageComponent } from './image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SemanticImageComponent
  ],
  exports: [
    SemanticImageComponent
  ]
})
export class SemanticImageModule { }
