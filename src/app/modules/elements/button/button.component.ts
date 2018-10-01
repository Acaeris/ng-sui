import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  OnChanges,
  HostBinding
} from '@angular/core';
import { SemanticColors } from '../../../defs/colors';
import { SemanticSocial } from '../../../defs/social';
import { SemanticFloats } from '../../../defs/floats';
import { SemanticSizes } from '../../../defs/sizes';
import { SemanticWidths } from '../../../defs/widths';
import { numberToWord } from '../../../libs/numberToWord';

/**
 * Implementation of Button component
 *
 * @link http://semantic-ui.com/elements/button.html
 */
@Component({
  selector: '[sui-button], sui-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  host: { 'class' : 'ui button' }
})
export class SemanticButtonComponent implements OnChanges {
  @Input() active?: boolean;
  @Input() animated?: "" | 'fade' | 'vertical';
  @Input() attached?: "" | 'left' | 'right' | 'top' | 'bottom';
  @Input() basic?: boolean;
  @Input() color?: SemanticColors | "primary" | "secondary" | "positive"
    | "negative" | SemanticSocial;
  @Input() circular?: boolean;
  @Input() compact?: boolean;
  @Input() disabled?: boolean;
  @Input() flag?: string;
  @Input() float?: SemanticFloats;
  @Input() fluid?: boolean;
  @Input() icon?: string;
  @Input() inverted?: boolean;
  @Input() label?: 'right' | 'left';
  @Input() loading?: boolean;
  @Input() size?: SemanticSizes;
  @Input() toggle?: boolean;
  @HostBinding('class.active')
  get isActive() {
    return this.isPresent(this.active);
  };
  @HostBinding('class.basic')
  get isBasic() {
    return this.isPresent(this.basic);
  };
  @HostBinding('class.circular')
  get isCircular() {
    return this.isPresent(this.circular);
  }
  @HostBinding('class.compact')
  get isCompact() {
    return this.isPresent(this.compact);
  }
  @HostBinding('class.disabled')
  get isDisabled() {
    return this.isPresent(this.disabled);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return this.isPresent(this.fluid);
  }
  @HostBinding('class.inverted')
  get isInverted() {
    return this.isPresent(this.inverted);
  }
  @HostBinding('class.loading')
  get isLoading() {
    return this.isPresent(this.loading);
  }
  @HostBinding('class.toggle')
  get isToggle() {
    return this.isPresent(this.toggle);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if ("BUTTON" !== this.el.nativeElement.tagName) {
      this.el.nativeElement.tabIndex = 0;
    }
    if ("undefined" !== typeof this.animated) {
      this.renderer.addClass(this.el.nativeElement, 'animated');
      if ("" !== this.animated) {
        this.renderer.addClass(this.el.nativeElement, this.animated);
      }
    }
    if ("undefined" !== typeof this.attached) {
      if ("" !== this.attached) {
        this.renderer.addClass(this.el.nativeElement, this.attached);
      }
      this.renderer.addClass(this.el.nativeElement, 'attached');
    }
    var colors: string[] = ("undefined" !== typeof this.color) ? this.color.split(" ") : [];
    for (var i = 0; i < colors.length; i++) {
      this.renderer.addClass(this.el.nativeElement, colors[i]);
    }
    if ("undefined" !== typeof this.float) {
      this.renderer.addClass(this.el.nativeElement, this.float);
      this.renderer.addClass(this.el.nativeElement, 'floated');
    }
    if ("undefined" !== typeof this.label) {
      this.renderer.addClass(this.el.nativeElement, this.label);
      this.renderer.addClass(this.el.nativeElement, 'labeled');
      if ("undefined" !== typeof this.icon || "undefined" !== typeof this.flag) {
        this.renderer.addClass(this.el.nativeElement, 'icon');
      }
    }
    if ("undefined" !== typeof this.size) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if ("" === this.el.nativeElement.innerText) {
      this.renderer.addClass(this.el.nativeElement, 'icon');
    }
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }
}
