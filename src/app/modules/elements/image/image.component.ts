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
import { SemanticVerticalAlignments } from '../../../defs/alignments';
import { SemanticFloats } from '../../../defs/floats';

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
  @Input('circular') circular?: boolean;
  @Input('centered') centered?: boolean;
  @Input('spaced') spaced?: boolean;
  @Input('size') size?: "" | SemanticSizes;
  @Input('align') align?: "" | SemanticVerticalAlignments;
  @Input('float') float?: "" | SemanticFloats;
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
  @HostBinding('class.circular')
  get isCircular() {
    return this.isPresent(this.circular);
  }
  @HostBinding('class.centered')
  get isCentered() {
    return this.isPresent(this.centered);
  }
  @HostBinding('class.spaced')
  get isSpaced() {
    return this.isPresent(this.spaced);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if ("undefined" !== typeof this.align) {
      this.renderer.addClass(this.el.nativeElement, this.align);
      this.renderer.addClass(this.el.nativeElement, 'aligned');
    }
    if (this.hasValue(this.url)) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.url);
    }
    if ("undefined" !== typeof this.float) {
      this.renderer.addClass(this.el.nativeElement, this.float);
      this.renderer.addClass(this.el.nativeElement, 'floated');
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
  @Input('circular') circular?: boolean;
  @Input('centered') centered?: boolean;
  @Input('spaced') spaced?: boolean;
  @Input('size') size?: "" | SemanticSizes;
  @Input('align') align?: "" | SemanticVerticalAlignments;
  @Input('float') float?: "" | SemanticFloats;
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
  @HostBinding('class.circular')
  get isCircular() {
    return this.isPresent(this.circular);
  }
  @HostBinding('class.centered')
  get isCentered() {
    return this.isPresent(this.centered);
  }
  @HostBinding('class.spaced')
  get isSpaced() {
    return this.isPresent(this.spaced);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if ("undefined" !== typeof this.align) {
      this.renderer.addClass(this.el.nativeElement, this.align);
      this.renderer.addClass(this.el.nativeElement, 'aligned');
    }
    if ("undefined" !== typeof this.float) {
      this.renderer.addClass(this.el.nativeElement, this.float);
      this.renderer.addClass(this.el.nativeElement, 'floated');
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
  @Input('circular') circular?: boolean;
  @Input('centered') centered?: boolean;
  @Input('spaced') spaced?: boolean;
  @Input('size') size?: "" | SemanticSizes;
  @Input('align') align?: "" | SemanticVerticalAlignments;
  @Input('float') float?: "" | SemanticFloats;
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
  @HostBinding('class.circular')
  get isCircular() {
    return this.isPresent(this.circular);
  }
  @HostBinding('class.centered')
  get isCentered() {
    return this.isPresent(this.centered);
  }
  @HostBinding('class.spaced')
  get isSpaced() {
    return this.isPresent(this.spaced);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if ("undefined" !== typeof this.align) {
      this.renderer.addClass(this.el.nativeElement, this.align);
      this.renderer.addClass(this.el.nativeElement, 'aligned');
    }
    if ("undefined" !== typeof this.float) {
      this.renderer.addClass(this.el.nativeElement, this.float);
      this.renderer.addClass(this.el.nativeElement, 'floated');
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
 * Implementation of Image Group component
 *
 * @link http://semantic-ui.com/elements/image.html
 */
@Component({
  selector: '[sui-images], sui-images',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './images.component.html',
  host: { 'class' : 'ui images' }
})
export class SemanticImagesComponent implements OnChanges {
  @Input('disabled') disabled?: boolean;
  @Input('hidden') hidden?: boolean;
  @Input('avatar') avatar?: boolean;
  @Input('bordered') bordered?: boolean;
  @Input('fluid') fluid?: boolean;
  @Input('rounded') rounded?: boolean;
  @Input('circular') circular?: boolean;
  @Input('spaced') spaced?: boolean;
  @Input('size') size?: "" | SemanticSizes;
  @Input('align') align?: "" | SemanticVerticalAlignments;
  @Input('float') float?: "" | SemanticFloats;
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
  @HostBinding('class.circular')
  get isCircular() {
    return this.isPresent(this.circular);
  }
  @HostBinding('class.centered')
  get isCentered() {
    return this.isPresent(this.centered);
  }
  @HostBinding('class.spaced')
  get isSpaced() {
    return this.isPresent(this.spaced);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if ("undefined" !== typeof this.align) {
      this.renderer.addClass(this.el.nativeElement, this.align);
      this.renderer.addClass(this.el.nativeElement, 'aligned');
    }
    if ("undefined" !== typeof this.float) {
      this.renderer.addClass(this.el.nativeElement, this.float);
      this.renderer.addClass(this.el.nativeElement, 'floated');
    }
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }

  hasValue(key?: string) {
    return "undefined" !== typeof key && key !== "";
  }
}
