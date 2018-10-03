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
  @HostBinding('class.animated') isAnimated: boolean;
  @HostBinding('class.attached') isAttached: boolean;
  @HostBinding('class.basic') isBasic: boolean;
  @HostBinding('class.circular') isCircular: boolean;
  @HostBinding('class.compact') isCompact: boolean;
  @HostBinding('class.disabled') isDisabled: boolean;
  @HostBinding('class.floated') isFloated: boolean;
  @HostBinding('class.fluid') isFluid: boolean;
  @HostBinding('class.icon') needsIcon: boolean;
  @HostBinding('class.inverted') isInverted: boolean;
  @HostBinding('class.loading') isLoading: boolean;
  @HostBinding('class.toggle') isToggle: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if ("BUTTON" !== this.el.nativeElement.tagName) {
      this.el.nativeElement.tabIndex = 0;
    }
    this.isActive = isPresent(this.active);
    this.isBasic = isPresent(this.basic);
    this.isCircular = isPresent(this.circular);
    this.isCompact = isPresent(this.compact);
    this.isDisabled = isPresent(this.disabled);
    this.isFluid = isPresent(this.fluid);
    this.isInverted = isPresent(this.inverted);
    this.isLoading = isPresent(this.loading);
    this.isToggle = isPresent(this.toggle);
    this.isAnimated = "undefined" !== typeof this.animate;
    if (hasValue(this.animate)) {
      this.renderer.addClass(this.el.nativeElement, this.animate);
    }
    if (hasValue(this.attach)) {
      this.renderer.addClass(this.el.nativeElement, this.attach);
    }
    this.isAttached = "undefined" !== typeof this.attach;
    var colors: string[] = (hasValue(this.color)) ? this.color.split(" ") : [];
    for (var i = 0; i < colors.length; i++) {
      this.renderer.addClass(this.el.nativeElement, colors[i]);
    }
    if (hasValue(this.float)) {
      this.renderer.addClass(this.el.nativeElement, this.float);
      this.isFloated = true;
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

    this.needsIcon = "" === this.el.nativeElement.innerText && !isPresent(this.child) || hasValue(this.label);
  }
}
