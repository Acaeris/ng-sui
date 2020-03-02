import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  OnChanges,
  HostBinding
} from '@angular/core';
import { SemanticTextAlignments } from '../../../defs/alignments';
import { hasValue } from '../../../libs/hasValue';
import { isPresent } from '../../../libs/isPresent';

/**
 * Implementation of Container component
 *
 * @link http://semantic-ui.com/elements/container.html
 */
@Component({
  selector: '[sui-container], sui-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './container.component.html'
})
export class SemanticContainerComponent implements OnChanges {
  @Input() fluid?: boolean;
  @Input() text?: boolean;
  @Input() textAlign?: SemanticTextAlignments;
  @HostBinding('class') cssClass = 'ui container';
  @HostBinding('class.aligned')
  get isAligned() {
    return hasValue(this.textAlign);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return isPresent(this.fluid);
  }
  @HostBinding('class.text')
  get isText() {
    return isPresent(this.text);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (hasValue(this.textAlign)) {
      this.renderer.addClass(this.el.nativeElement, this.textAlign);
    }
  }
}
