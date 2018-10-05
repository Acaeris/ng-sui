import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  OnChanges,
  HostBinding
} from '@angular/core';

import { SemanticTextAlignments } from '../../../defs/alignments';
import { SemanticColors } from '../../../defs/colors';
import { SemanticSizes } from '../../../defs/sizes';
import { SemanticFloats } from '../../../defs/floats';
import { hasValue } from '../../../libs/hasValue';
import { isPresent } from '../../../libs/isPresent';

/**
 * Implementation of Header component
 *
 * @link http://semantic-ui.com/elements/header.html
 */
@Component({
  selector: '[sui-header], sui-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  host: { 'class' : 'ui header' }
})
export class SemanticHeaderComponent implements OnChanges {
  @Input() icon?: string;
  @Input() flag?: string;
  @Input() image?: string;
  @Input() align?: "" | SemanticTextAlignments;
  @Input() float?: "" | SemanticFloats;
  @Input() attach?: "" | "both" | "top" | "bottom";
  @Input() bulleted?: boolean;
  @Input() inverted?: boolean;
  @Input() dividing?: boolean;
  @Input() block?: boolean;
  @Input() color?: SemanticColors;
  @Input() disabled?: boolean;
  @Input() size?: SemanticSizes;
  @Input() sub?: string;
  @HostBinding('class.aligned')
  get isAligned() {
    return hasValue(this.align) && "justify" !== this.align;
  }
  @HostBinding('class.attached')
  get isAttached() {
    return hasValue(this.attach);
  }
  @HostBinding('class.block')
  get isBlock() {
    return isPresent(this.block);
  }
  @HostBinding('class.disabled')
  get isDisabled() {
    return isPresent(this.disabled);
  }
  @HostBinding('class.dividing')
  get isDividing() {
    return isPresent(this.dividing);
  }
  @HostBinding('class.floated')
  get isFloated() {
    return hasValue(this.float);
  }
  @HostBinding('class.icon')
  get isIconHeader() {
    return hasValue(this.icon) && !isPresent(this.bulleted);
  }
  @HostBinding('class.inverted')
  get isInverted() {
    return isPresent(this.inverted);
  }
  @HostBinding('class.justify')
  get isJustified() {
    return hasValue(this.align) && "justify" === this.align;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (hasValue(this.attach) && "both" !== this.attach) {
      this.renderer.addClass(this.el.nativeElement, this.attach);
    }
    if (hasValue(this.color)) {
      for (var color of this.color.split(" ")) {
        this.renderer.addClass(this.el.nativeElement, color);
      }
    }
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if (hasValue(this.align) && "justify" !== this.align) {
      this.renderer.addClass(this.el.nativeElement, this.align);
    }
    if (hasValue(this.float)) {
      this.renderer.addClass(this.el.nativeElement, this.float);
    }
  }
}
