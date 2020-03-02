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
import { isPresent } from '../../../libs/isPresent';
import { hasValue } from '../../../libs/hasValue';

/**
 * Implementation of Image component
 *
 * @link http://semantic-ui.com/elements/image.html
 */
@Component({
  selector: '[sui-img]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ''
})
export class SemanticImageAttrComponent implements OnChanges {
  @Input() disabled?: boolean;
  @Input() hidden?: boolean;
  @Input() avatar?: boolean;
  @Input() bordered?: boolean;
  @Input() fluid?: boolean;
  @Input() rounded?: boolean;
  @Input() circular?: boolean;
  @Input() centered?: boolean;
  @Input() spaced?: boolean;
  @Input() size?: SemanticSizes;
  @Input() align?: SemanticVerticalAlignments;
  @Input() float?: SemanticFloats;
  @HostBinding('class') cssClass = 'ui image';
  @HostBinding('class.aligned')
  get isAligned() {
    return hasValue(this.align);
  }
  @HostBinding('class.disabled')
  get isDisabled() {
    return isPresent(this.disabled);
  }
  @HostBinding('class.hidden')
  get isHidden() {
    return isPresent(this.hidden);
  }
  @HostBinding('class.avatar')
  get isAvatar() {
    return isPresent(this.avatar);
  }
  @HostBinding('class.bordered')
  get isBordered() {
    return isPresent(this.bordered);
  }
  @HostBinding('class.floated')
  get isFloated() {
    return hasValue(this.float);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return isPresent(this.fluid);
  }
  @HostBinding('class.rounded')
  get isRounded() {
    return isPresent(this.rounded);
  }
  @HostBinding('class.circular')
  get isCircular() {
    return isPresent(this.circular);
  }
  @HostBinding('class.centered')
  get isCentered() {
    return isPresent(this.centered);
  }
  @HostBinding('class.spaced')
  get isSpaced() {
    return isPresent(this.spaced);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if (hasValue(this.align)) {
      this.renderer.addClass(this.el.nativeElement, this.align);
    }
    if (hasValue(this.float)) {
      this.renderer.addClass(this.el.nativeElement, this.float);
    }
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
  templateUrl: './image.component.html'
})
export class SemanticImageComponent implements OnChanges {
  @Input() disabled?: boolean;
  @Input() hidden?: boolean;
  @Input() avatar?: boolean;
  @Input() bordered?: boolean;
  @Input() fluid?: boolean;
  @Input() rounded?: boolean;
  @Input() circular?: boolean;
  @Input() centered?: boolean;
  @Input() spaced?: boolean;
  @Input() size?: SemanticSizes;
  @Input() align?: SemanticVerticalAlignments;
  @Input() float?: SemanticFloats;
  @Input() src?: string;
  @HostBinding('class') cssClass = 'ui image';
  @HostBinding('class.aligned')
  get isAligned() {
    return hasValue(this.align);
  }
  @HostBinding('class.disabled')
  get isDisabled() {
    return isPresent(this.disabled);
  }
  @HostBinding('class.hidden')
  get isHidden() {
    return isPresent(this.hidden);
  }
  @HostBinding('class.avatar')
  get isAvatar() {
    return isPresent(this.avatar);
  }
  @HostBinding('class.bordered')
  get isBordered() {
    return isPresent(this.bordered);
  }
  @HostBinding('class.floated')
  get isFloated() {
    return hasValue(this.float);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return isPresent(this.fluid);
  }
  @HostBinding('class.rounded')
  get isRounded() {
    return isPresent(this.rounded);
  }
  @HostBinding('class.circular')
  get isCircular() {
    return isPresent(this.circular);
  }
  @HostBinding('class.centered')
  get isCentered() {
    return isPresent(this.centered);
  }
  @HostBinding('class.spaced')
  get isSpaced() {
    return isPresent(this.spaced);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if (hasValue(this.align)) {
      this.renderer.addClass(this.el.nativeElement, this.align);
    }
    if (hasValue(this.float)) {
      this.renderer.addClass(this.el.nativeElement, this.float);
    }
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
  templateUrl: './svg.component.html'
})
export class SemanticSVGComponent implements OnChanges {
  @Input() disabled?: boolean;
  @Input() hidden?: boolean;
  @Input() avatar?: boolean;
  @Input() bordered?: boolean;
  @Input() fluid?: boolean;
  @Input() rounded?: boolean;
  @Input() circular?: boolean;
  @Input() centered?: boolean;
  @Input() spaced?: boolean;
  @Input() size?: SemanticSizes;
  @Input() align?: SemanticVerticalAlignments;
  @Input() float?: SemanticFloats;
  @HostBinding('class') cssClass = 'ui image';
  @HostBinding('class.aligned')
  get isAligned() {
    return hasValue(this.align);
  }
  @HostBinding('class.disabled')
  get isDisabled() {
    return isPresent(this.disabled);
  }
  @HostBinding('class.hidden')
  get isHidden() {
    return isPresent(this.hidden);
  }
  @HostBinding('class.avatar')
  get isAvatar() {
    return isPresent(this.avatar);
  }
  @HostBinding('class.bordered')
  get isBordered() {
    return isPresent(this.bordered);
  }
  @HostBinding('class.floated')
  get isFloated() {
    return hasValue(this.float);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return isPresent(this.fluid);
  }
  @HostBinding('class.rounded')
  get isRounded() {
    return isPresent(this.rounded);
  }
  @HostBinding('class.circular')
  get isCircular() {
    return isPresent(this.circular);
  }
  @HostBinding('class.centered')
  get isCentered() {
    return isPresent(this.centered);
  }
  @HostBinding('class.spaced')
  get isSpaced() {
    return isPresent(this.spaced);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if (hasValue(this.align)) {
      this.renderer.addClass(this.el.nativeElement, this.align);
    }
    if (hasValue(this.float)) {
      this.renderer.addClass(this.el.nativeElement, this.float);
    }
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
  templateUrl: './images.component.html'
})
export class SemanticImagesComponent implements OnChanges {
  @Input() disabled?: boolean;
  @Input() hidden?: boolean;
  @Input() avatar?: boolean;
  @Input() bordered?: boolean;
  @Input() fluid?: boolean;
  @Input() rounded?: boolean;
  @Input() circular?: boolean;
  @Input() size?: '' | SemanticSizes;
  @Input() align?: '' | SemanticVerticalAlignments;
  @Input() float?: '' | SemanticFloats;
  @HostBinding('class') cssClass = 'ui image';
  @HostBinding('class.aligned')
  get isAligned() {
    return hasValue(this.align);
  }
  @HostBinding('class.disabled')
  get isDisabled() {
    return isPresent(this.disabled);
  }
  @HostBinding('class.hidden')
  get isHidden() {
    return isPresent(this.hidden);
  }
  @HostBinding('class.avatar')
  get isAvatar() {
    return isPresent(this.avatar);
  }
  @HostBinding('class.bordered')
  get isBordered() {
    return isPresent(this.bordered);
  }
  @HostBinding('class.floated')
  get isFloated() {
    return hasValue(this.float);
  }
  @HostBinding('class.fluid')
  get isFluid() {
    return isPresent(this.fluid);
  }
  @HostBinding('class.rounded')
  get isRounded() {
    return isPresent(this.rounded);
  }
  @HostBinding('class.circular')
  get isCircular() {
    return isPresent(this.circular);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if (hasValue(this.align)) {
      this.renderer.addClass(this.el.nativeElement, this.align);
    }
    if (hasValue(this.float)) {
      this.renderer.addClass(this.el.nativeElement, this.float);
    }
  }
}
