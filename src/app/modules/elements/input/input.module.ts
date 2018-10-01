import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticInputComponent } from './input.component';
import { SemanticIconModule } from '../icon/icon.module';
import { SemanticFlagModule } from '../flag/flag.module';

@NgModule({
  imports: [
    CommonModule,
    SemanticIconModule,
    SemanticFlagModule
  ],
  declarations: [
    SemanticInputComponent
  ],
  exports: [
    SemanticInputComponent
  ]
})
export class SemanticInputModule { }
