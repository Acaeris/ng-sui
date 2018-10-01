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
 * Implementation of Button Group component
 *
 * @link http://semantic-ui.com/elements/button.html
 */
@Component({
  selector: '[sui-buttons], sui-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './buttons.component.html',
  host: { 'class' : 'ui buttons' }
})
export class SemanticButtonsComponent implements OnChanges {
  @Input() attached?: "" | 'left' | 'right' | 'top' | 'bottom';
  @Input() basic?: boolean;
  @Input() color?: SemanticColors | "primary" | "secondary" | "positive"
    | "negative" | SemanticSocial;
  @Input() compact?: boolean;
  @Input() float?: SemanticFloats;
  @Input() fluid?: boolean;
  @Input() icon?: boolean;
  @Input() inverted?: boolean;
  @Input() labeled?: boolean;
  @Input() size?: SemanticSizes;
  @Input() toggle?: boolean;
  @Input() vertical?: boolean;
  @Input() width?: SemanticWidths;
  @HostBinding('class.basic')
  get isBasic() {
    return this.isPresent(this.basic);
  }
  @HostBinding('class.compact')
  get isCompact() {
    return this.isPresent(this.compact);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return this.isPresent(this.fluid);
  }
  @HostBinding('class.icon')
  get isIcon() {
    return this.isPresent(this.icon);
  }
  @HostBinding('class.inverted')
  get isInverted() {
    return this.isPresent(this.inverted);
  }
  @HostBinding('class.labeled')
  get isLabeled() {
    return this.isPresent(this.labeled);
  }
  @HostBinding('class.toggle')
  get isToggle() {
    return this.isPresent(this.toggle);
  }
  @HostBinding('class.vertical')
  get isVertical() {
    return this.isPresent(this.vertical);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.hasValue(this.attached)) {
      this.renderer.addClass(this.el.nativeElement, this.attached);
      this.renderer.addClass(this.el.nativeElement, 'attached');
    }
    var colors: string[] = ("undefined" !== typeof this.color) ? this.color.split(" ") : [];
    for (var i = 0; i < colors.length; i++) {
      this.renderer.addClass(this.el.nativeElement, colors[i]);
    }
    if (this.hasValue(this.float)) {
      this.renderer.addClass(this.el.nativeElement, this.float);
      this.renderer.addClass(this.el.nativeElement, 'floated');
    }
    if (this.hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if ("undefined" !== typeof this.width) {
      this.renderer.addClass(this.el.nativeElement, numberToWord(this.width));
    }
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }

  hasValue(key?: string) {
    return "undefined" !== typeof key && key !== "";
  }
}
