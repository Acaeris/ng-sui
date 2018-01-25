import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticFlagComponent } from './flag.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SemanticFlagComponent
  ],
  exports: [
    SemanticFlagComponent
  ]
})
export class SemanticFlagModule { }
