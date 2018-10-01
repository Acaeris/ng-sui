import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticImageComponent, SemanticImageAttrComponent, SemanticImagesComponent, SemanticSVGComponent } from './image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SemanticImageComponent,
    SemanticImageAttrComponent,
    SemanticImagesComponent,
    SemanticSVGComponent
  ],
  exports: [
    SemanticImageComponent,
    SemanticImageAttrComponent,
    SemanticImagesComponent,
    SemanticSVGComponent
  ]
})
export class SemanticImageModule { }
