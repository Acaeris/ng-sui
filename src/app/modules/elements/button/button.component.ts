import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  OnChanges,
  HostBinding,
  ContentChildren,
  QueryList,
  AfterContentChecked
} from '@angular/core';
import { SemanticLabelComponent } from '../label/label.component';
import { SemanticColors } from '../../../defs/colors';
import { SemanticSocial } from '../../../defs/social';
import { SemanticFloats } from '../../../defs/floats';
import { SemanticSizes } from '../../../defs/sizes';
import { SemanticWidths } from '../../../defs/widths';
import { numberToWord } from '../../../libs/numberToWord';
import { hasValue } from '../../../libs/hasValue';
import { isPresent } from '../../../libs/isPresent';

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
export class SemanticButtonComponent implements OnChanges, AfterContentChecked {
  @Input() active?: boolean;
  @Input() after?: boolean;
  @Input() animate?: "" | 'fade' | 'vertical';
  @Input() attach?: "" | 'left' | 'right' | 'top' | 'bottom';
  @Input() basic?: boolean;
  @Input() circular?: boolean;
  @Input() child?: boolean;
  @Input() color?: SemanticColors | "primary" | "secondary" | "positive"
    | "negative" | SemanticSocial;
  @Input() compact?: boolean;
  @Input() disabled?: boolean;
  @Input() flag?: string;
  @Input() float?: SemanticFloats;
  @Input() fluid?: boolean;
  @Input() icon?: string;
  @Input() inverted?: boolean;
  @Input() label?: string;
  @Input() loading?: boolean;
  @Input() size?: SemanticSizes;
  @Input() toggle?: boolean;
  @ContentChildren(SemanticLabelComponent) labels: QueryList<SemanticLabelComponent>;
  @HostBinding('class.active') isActive: boolean;
  @HostBinding('class.animated')
  get isAnimated(): boolean {
    return "undefined" !== typeof this.animate;
  }
  @HostBinding('class.attached')
  get isAttached(): boolean {
    return "undefined" !== typeof this.attach;
  }
  @HostBinding('class.basic')
  get isBasic(): boolean {
    return isPresent(this.basic);
  };
  @HostBinding('class.circular')
  get isCircular() {
    return isPresent(this.circular);
  }
  @HostBinding('class.compact')
  get isCompact() {
    return isPresent(this.compact);
  }
  @HostBinding('class.disabled')
  get isDisabled() {
    return isPresent(this.disabled);
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
  get needsIcon() {
    return "" === this.el.nativeElement.innerText && !isPresent(this.child) || hasValue(this.label);
  }
  @HostBinding('class.inverted')
  get isInverted() {
    return isPresent(this.inverted);
  }
  @HostBinding('class.loading')
  get isLoading() {
    return isPresent(this.loading);
  }
  @HostBinding('class.toggle')
  get isToggle() {
    return isPresent(this.toggle);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if ("BUTTON" !== this.el.nativeElement.tagName) {
      this.el.nativeElement.tabIndex = 0;
    }
    this.isActive = isPresent(this.active);
    if (hasValue(this.animate)) {
      this.renderer.addClass(this.el.nativeElement, this.animate);
    }
    if (hasValue(this.attach)) {
      this.renderer.addClass(this.el.nativeElement, this.attach);
    }
    var colors: string[] = (hasValue(this.color)) ? this.color.split(" ") : [];
    for (var i = 0; i < colors.length; i++) {
      this.renderer.addClass(this.el.nativeElement, colors[i]);
    }
    if (hasValue(this.float)) {
      this.renderer.addClass(this.el.nativeElement, this.float);
    }
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
  }

  ngAfterContentChecked() {
    if (this.labels.length > 0) {
      var labelDirection: string = "left";

      this.labels.forEach(label => {
        if (isPresent(label.after)) {
          labelDirection = "right";
        }
      });

      this.renderer.addClass(this.el.nativeElement, labelDirection);
      this.renderer.addClass(this.el.nativeElement, "labeled");
    } else if (hasValue(this.label)) {
      this.renderer.addClass(this.el.nativeElement, this.label);
      this.renderer.addClass(this.el.nativeElement, "labeled");
    }
  }
}
