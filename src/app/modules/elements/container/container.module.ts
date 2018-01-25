import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticContainerComponent } from './container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SemanticContainerComponent
  ],
  exports: [
    SemanticContainerComponent
  ]
})
export class SemanticContainerModule { }
