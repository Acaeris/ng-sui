import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticImageComponent, SemanticImageAttrComponent, SemanticSVGComponent } from './image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SemanticImageComponent,
    SemanticImageAttrComponent,
    SemanticSVGComponent
  ],
  exports: [
    SemanticImageComponent,
    SemanticImageAttrComponent,
    SemanticSVGComponent
  ]
})
export class SemanticImageModule { }
