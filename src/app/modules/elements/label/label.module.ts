import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticLabelComponent } from './label.component';
import { SemanticLabelsComponent } from './labels.component';
import { SemanticIconModule } from '../icon/icon.module';
import { SemanticFlagModule } from '../flag/flag.module';

@NgModule({
  imports: [
    CommonModule,
    SemanticIconModule,
    SemanticFlagModule
  ],
  declarations: [
    SemanticLabelComponent,
    SemanticLabelsComponent
  ],
  exports: [
    SemanticLabelComponent,
    SemanticLabelsComponent
  ]
})
export class SemanticLabelModule { }
