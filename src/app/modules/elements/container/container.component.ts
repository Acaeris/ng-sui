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

/**
 * Implementation of Container component
 *
 * @link http://semantic-ui.com/elements/container.html
 */
@Component({
  selector: '[sui-container], sui-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './container.component.html',
  host: { 'class' : 'ui container' }
})
export class SemanticContainerComponent implements OnChanges {
  @Input() fluid?: boolean;
  @Input() text?: boolean;
  @Input() textAlign?: SemanticTextAlignments;
  @HostBinding('class.fluid')
  get isFluid() {
    return this.isPresent(this.fluid);
  }
  @HostBinding('class.text')
  get isText() {
    return this.isPresent(this.text);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if ("undefined" !== typeof this.textAlign) {
      this.renderer.addClass(this.el.nativeElement, this.textAlign);
      this.renderer.addClass(this.el.nativeElement, 'aligned');
    }
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }
}
