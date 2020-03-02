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
import { hasValue } from '../../../libs/hasValue';
import { isPresent } from '../../../libs/isPresent';

/**
 * Implementation of Button Group component
 *
 * @link http://semantic-ui.com/elements/button.html
 */
@Component({
  selector: '[sui-buttons], sui-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './buttons.component.html'
})
export class SemanticButtonsComponent implements OnChanges {
  @Input() attach?: '' | 'left' | 'right' | 'top' | 'bottom';
  @Input() basic?: boolean;
  @Input() color?: SemanticColors | 'primary' | 'secondary' | 'positive'
    | 'negative' | SemanticSocial;
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
  @HostBinding('class') cssClass = 'ui buttons';
  @HostBinding('class.attached')
  get isAttached() {
    return hasValue(this.attach);
  }
  @HostBinding('class.basic')
  get isBasic() {
    return isPresent(this.basic);
  }
  @HostBinding('class.compact')
  get isCompact() {
    return isPresent(this.compact);
  }
  @HostBinding('class.floated')
  get isFloated() {
    return hasValue(this.float);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return isPresent(this.fluid);
  }
  @HostBinding('class.icon')
  get isIcon() {
    return isPresent(this.icon);
  }
  @HostBinding('class.inverted')
  get isInverted() {
    return isPresent(this.inverted);
  }
  @HostBinding('class.labeled')
  get isLabeled() {
    return isPresent(this.labeled);
  }
  @HostBinding('class.toggle')
  get isToggle() {
    return isPresent(this.toggle);
  }
  @HostBinding('class.vertical')
  get isVertical() {
    return isPresent(this.vertical);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (hasValue(this.attach)) {
      this.renderer.addClass(this.el.nativeElement, this.attach);
    }
    const colors: string[] = ('undefined' !== typeof this.color) ? this.color.split(' ') : [];
    for (let i = 0; i < colors.length; i++) {
      this.renderer.addClass(this.el.nativeElement, colors[i]);
    }
    if (hasValue(this.float)) {
      this.renderer.addClass(this.el.nativeElement, this.float);
    }
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if ('undefined' !== typeof this.width) {
      this.renderer.addClass(this.el.nativeElement, numberToWord(this.width));
    }
  }
}
