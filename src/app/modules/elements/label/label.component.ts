import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  ElementRef,
  Renderer2,
  HostBinding,
  AfterContentChecked
} from '@angular/core';

import { SemanticSizes } from '../../../defs/sizes';
import { SemanticColors } from '../../../defs/colors';
import { SemanticSocial } from '../../../defs/social';
import { isPresent } from '../../../libs/isPresent';
import { hasValue } from '../../../libs/hasValue';

/**
 * Implementation of Label component
 *
 * @link http://semantic-ui.com/elements/label.html
 */
@Component({
  selector: '[sui-label], sui-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './label.component.html',
  host: { 'class' : 'ui label' }
})
export class SemanticLabelComponent implements OnChanges, AfterContentChecked {
  @Input() after?: boolean;
  @Input() attach?: string;
  @Input() basic?: boolean;
  @Input() circular?: boolean;
  @Input() color?: SemanticColors | "primary" | "secondary" | "positive"
    | "negative" | SemanticSocial;
  @Input() corner?: boolean;
  @Input() dropdown?: boolean;
  @Input() empty?: boolean;
  @Input() flag?: string;
  @Input() floating?: boolean;
  @Input() horizontal?: boolean;
  @Input() icon?: string;
  @Input() iconSide?: string;
  @Input() point?: string;
  @Input() ribbon?: string;
  @Input() size?: SemanticSizes;
  @Input() tag?: boolean;
  @HostBinding('class.attached') isAttached: boolean;
  @HostBinding('class.basic') isBasic: boolean;
  @HostBinding('class.dropdown') isDropdown: boolean;
  @HostBinding('class.tag') isTag: boolean;
  @HostBinding('class.image') hasImage: boolean;
  @HostBinding('class.horizontal') isHorizontal: boolean;
  @HostBinding('class.floating') isFloating: boolean;
  @HostBinding('class.circular') isCircular: boolean;
  @HostBinding('class.empty') isEmpty: boolean;

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    this.isBasic = isPresent(this.basic);
    this.isDropdown = isPresent(this.dropdown);
    this.isTag = isPresent(this.tag);
    this.isHorizontal = isPresent(this.horizontal);
    this.isFloating = isPresent(this.floating);
    this.isCircular = isPresent(this.circular);
    this.isEmpty = isPresent(this.empty);
    if (hasValue(this.point)) {
      this.renderer.addClass(this.el.nativeElement, this.point);
      this.renderer.addClass(this.el.nativeElement, "pointing");
    }
    if (hasValue(this.ribbon)) {
      this.renderer.addClass(this.el.nativeElement, this.ribbon);
      this.renderer.addClass(this.el.nativeElement, "ribbon");
    }
    if (isPresent(this.corner)) {
      this.renderer.addClass(this.el.nativeElement, isPresent(this.after) ? "right" : "left");
      this.renderer.addClass(this.el.nativeElement, "corner");
    }
    let colors: string[] = (hasValue(this.color)) ? this.color.split(" ") : [];
    for (var i = 0; i < colors.length; i++) {
      this.renderer.addClass(this.el.nativeElement, colors[i]);
    }
    if (hasValue(this.attach)) {
      let attachParts: string[] = this.attach.split(" ");
      for (var i = 0; i < attachParts.length; i++) {
        this.renderer.addClass(this.el.nativeElement, attachParts[i]);
      }
      this.isAttached = true;
    }
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
  }

  ngAfterContentChecked() {
    let images = this.el.nativeElement.querySelectorAll('img');
    if (null != images && images.length > 0) {
      this.hasImage = true;
    }
  }
}
