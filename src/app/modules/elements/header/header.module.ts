import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticHeaderComponent, SemanticSubheaderComponent } from './header.component';
import { SemanticIconModule } from '../icon/icon.module';
import { SemanticFlagModule } from '../flag/flag.module';

@NgModule({
  imports: [
    CommonModule,
    SemanticIconModule,
    SemanticFlagModule
  ],
  declarations: [
    SemanticHeaderComponent,
    SemanticSubheaderComponent
  ],
  exports: [
    SemanticHeaderComponent,
    SemanticSubheaderComponent
  ]
})
export class SemanticHeaderModule { }
