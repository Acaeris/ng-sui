import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  ElementRef,
  Renderer2,
  HostBinding,
  AfterContentChecked,
  HostListener,
  ChangeDetectorRef
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
  templateUrl: './label.component.html'
})
export class SemanticLabelComponent implements OnChanges, AfterContentChecked {
  @Input() after?: boolean;
  @Input() attach?: string;
  @Input() basic?: boolean;
  @Input() circular?: boolean;
  @Input() color?: SemanticColors | 'primary' | 'secondary' | 'positive'
    | 'negative' | SemanticSocial;
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
  @HostBinding('class') cssClass = 'ui label';
  @HostBinding('class.attached') isAttached: boolean;
  @HostBinding('class.basic') isBasic: boolean;
  @HostBinding('class.dropdown') isDropdown: boolean;
  @HostBinding('class.tag') isTag: boolean;
  @HostBinding('class.image') hasImage: boolean;
  @HostBinding('class.horizontal') isHorizontal: boolean;
  @HostBinding('class.floating') isFloating: boolean;
  @HostBinding('class.circular') isCircular: boolean;
  @HostBinding('class.empty') isEmpty: boolean;
  @HostListener('click', ['$event'])
  onClickMe(e) {
    console.log(this.color);
    this.color = 'red';
    this.cdr.detectChanges();
  }

  constructor(private el: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef) { }

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
      this.renderer.addClass(this.el.nativeElement, 'pointing');
    }
    if (hasValue(this.ribbon)) {
      this.renderer.addClass(this.el.nativeElement, this.ribbon);
      this.renderer.addClass(this.el.nativeElement, 'ribbon');
    }
    if (isPresent(this.corner)) {
      this.renderer.addClass(this.el.nativeElement, isPresent(this.after) ? 'right' : 'left');
      this.renderer.addClass(this.el.nativeElement, 'corner');
    }
    if (hasValue(this.color)) {
      for (const color of this.color.split(' ')) {
        this.renderer.addClass(this.el.nativeElement, color);
      }
    }
    if (hasValue(this.attach)) {
      for (const part of this.attach.split(' ')) {
        this.renderer.addClass(this.el.nativeElement, part);
      }
      this.isAttached = true;
    }
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
  }

  ngAfterContentChecked() {
    const images = this.el.nativeElement.querySelectorAll('img');
    if (null != images && images.length > 0) {
      this.hasImage = true;
    }
  }
}
