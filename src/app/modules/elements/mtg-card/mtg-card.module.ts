import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MTGCardComponent } from './mtg-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MTGCardComponent
  ],
  exports: [
    MTGCardComponent
  ]
})
export class MTGCardModule { }
