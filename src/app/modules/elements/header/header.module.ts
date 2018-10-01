import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticHeaderComponent } from './header.component';
import { SemanticSubheaderComponent } from './subheader.component';
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
