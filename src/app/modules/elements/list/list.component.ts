import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

/**
 * Implementation of List component
 *
 * @link http://semantic-ui.com/elements/list.html
 */
@Component({
  selector: '[sui-list], sui-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html'
})
export class SemanticListComponent implements OnChanges {
  @HostBinding('class') cssClass = 'ui list';

  constructor (private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {

  }
}
