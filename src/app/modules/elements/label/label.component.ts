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
  @Input() basic?: boolean;
  @Input() dropdown?: boolean;
  @Input() tag?: boolean;
  @Input() corner?: boolean;
  @Input() horizontal?: boolean;
  @Input() floating?: boolean;
  @Input() icon?: string;
  @Input() flag?: string;
  @Input() point?: string;
  @Input() ribbon?: string;
  @Input() attach?: string;
  @Input() color?: SemanticColors | "primary" | "secondary" | "positive"
    | "negative" | SemanticSocial;
  @HostBinding('class.attached') isAttached: boolean;
  @HostBinding('class.basic') isBasic: boolean;
  @HostBinding('class.dropdown') isDropdown: boolean;
  @HostBinding('class.tag') isTag: boolean;
  @HostBinding('class.image') hasImage: boolean;
  @HostBinding('class.horizontal') isHorizontal: boolean;
  @HostBinding('class.floating') isFloating: boolean;

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    this.isBasic = isPresent(this.basic);
    this.isDropdown = isPresent(this.dropdown);
    this.isTag = isPresent(this.tag);
    this.isHorizontal = isPresent(this.horizontal);
    this.isFloating = isPresent(this.floating);
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
  }

  ngAfterContentChecked() {
    let images = this.el.nativeElement.querySelectorAll('img');
    if (null != images && images.length > 0) {
      this.hasImage = true;
    }
  }
}
