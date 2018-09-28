import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

import { SemanticSizes } from '../../../defs/sizes';

/**
 * Implementation of Image component
 *
 * @link http://semantic-ui.com/elements/image.html
 */
@Component({
  selector: '[sui-img]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  host: { 'class' : 'ui image' }
})
export class SemanticImageAttrComponent implements OnChanges {
  @Input('disabled') disabled?: boolean;
  @Input('hidden') hidden?: boolean;
  @Input('avatar') avatar?: boolean;
  @Input('bordered') bordered?: boolean;
  @Input('fluid') fluid?: boolean;
  @Input('rounded') rounded?: boolean;
  @Input('size') size?: "" | SemanticSizes;
  @Input('url') url?: string;
  @HostBinding('attr.src')
  get hasSource() {
    return this.hasValue(this.url) ? this.url : "";
  }
  @HostBinding('class.disabled')
  get isDisabled() {
    return this.isPresent(this.disabled);
  }
  @HostBinding('class.hidden')
  get isHidden() {
    return this.isPresent(this.hidden);
  }
  @HostBinding('class.avatar')
  get isAvatar() {
    return this.isPresent(this.avatar);
  }
  @HostBinding('class.bordered')
  get isBordered() {
    return this.isPresent(this.bordered);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return this.isPresent(this.fluid);
  }
  @HostBinding('class.rounded')
  get isRounded() {
    return this.isPresent(this.rounded);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }

  hasValue(key?: string) {
    return "undefined" !== typeof key && key !== "";
  }
}

/**
 * Implementation of Image component
 *
 * @link http://semantic-ui.com/elements/image.html
 */
@Component({
  selector: 'sui-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './image.component.html',
  host: { 'class' : 'ui image' }
})
export class SemanticImageComponent implements OnChanges {
  @Input('disabled') disabled?: boolean;
  @Input('hidden') hidden?: boolean;
  @Input('avatar') avatar?: boolean;
  @Input('bordered') bordered?: boolean;
  @Input('fluid') fluid?: boolean;
  @Input('rounded') rounded?: boolean;
  @Input('size') size?: "" | SemanticSizes;
  @Input('url') url?: string;
  @HostBinding('class.disabled')
  get isDisabled() {
    return this.isPresent(this.disabled);
  }
  @HostBinding('class.hidden')
  get isHidden() {
    return this.isPresent(this.hidden);
  }
  @HostBinding('class.avatar')
  get isAvatar() {
    return this.isPresent(this.avatar);
  }
  @HostBinding('class.bordered')
  get isBordered() {
    return this.isPresent(this.bordered);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return this.isPresent(this.fluid);
  }
  @HostBinding('class.rounded')
  get isRounded() {
    return this.isPresent(this.rounded);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }

  hasValue(key?: string) {
    return "undefined" !== typeof key && key !== "";
  }
}

/**
 * Implementation of Image component
 *
 * @link http://semantic-ui.com/elements/image.html
 */
@Component({
  selector: 'sui-svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './svg.component.html',
  host: { 'class' : 'ui image' }
})
export class SemanticSVGComponent implements OnChanges {
  @Input('disabled') disabled?: boolean;
  @Input('hidden') hidden?: boolean;
  @Input('avatar') avatar?: boolean;
  @Input('bordered') bordered?: boolean;
  @Input('fluid') fluid?: boolean;
  @Input('rounded') rounded?: boolean;
  @Input('size') size?: "" | SemanticSizes;
  @Input('url') url?: string;
  @HostBinding('class.disabled')
  get isDisabled() {
    return this.isPresent(this.disabled);
  }
  @HostBinding('class.hidden')
  get isHidden() {
    return this.isPresent(this.hidden);
  }
  @HostBinding('class.avatar')
  get isAvatar() {
    return this.isPresent(this.avatar);
  }
  @HostBinding('class.bordered')
  get isBordered() {
    return this.isPresent(this.bordered);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return this.isPresent(this.fluid);
  }
  @HostBinding('class.rounded')
  get isRounded() {
    return this.isPresent(this.rounded);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }

  hasValue(key?: string) {
    return "undefined" !== typeof key && key !== "";
  }
}
