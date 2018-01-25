import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticDividerComponent } from './divider.component';
import { SemanticIconModule } from '../icon/icon.module';
import { SemanticFlagModule } from '../flag/flag.module';

@NgModule({
  imports: [
    CommonModule,
    SemanticIconModule,
    SemanticFlagModule
  ],
  declarations: [
    SemanticDividerComponent
  ],
  exports: [
    SemanticDividerComponent
  ]
})
export class SemanticDividerModule { }
