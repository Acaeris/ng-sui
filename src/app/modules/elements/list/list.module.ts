import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemanticListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SemanticListComponent
  ],
  exports: [
    SemanticListComponent
  ]
})
export class SemanticListModule { }
