import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  ElementRef,
  Renderer2
} from '@angular/core';

/**
 * Implementation of MTG Card component
 */
@Component({
  selector: '[mtg-card], mtg-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mtg-card.component.html',
  styleUrls: ['./mtg-card.component.scss']
})
export class MTGCardComponent implements OnChanges {
  constructor (private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {

  }
}
