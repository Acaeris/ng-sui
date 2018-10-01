import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticButtonComponent } from './button.component';
import { SemanticButtonsComponent } from './buttons.component';
import { SemanticIconModule } from '../icon/icon.module';
import { SemanticFlagModule } from '../flag/flag.module';

@NgModule({
  imports: [
    CommonModule,
    SemanticIconModule,
    SemanticFlagModule
  ],
  declarations: [
    SemanticButtonComponent,
    SemanticButtonsComponent
  ],
  exports: [
    SemanticButtonComponent,
    SemanticButtonsComponent
  ]
})
export class SemanticButtonModule { }
