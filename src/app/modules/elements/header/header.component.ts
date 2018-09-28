import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  OnChanges,
  HostBinding
} from '@angular/core';

import { SemanticHorizontalAlignments } from '../../../defs/alignments';
import { SemanticColors } from '../../../defs/colors';
import { SemanticSizes } from '../../../defs/sizes';

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
  @Input() align?: "" | SemanticHorizontalAlignments;
  @Input() float?: "" | "left" | "right";
  @Input() attach?: "" | "both" | "top" | "bottom";
  @Input() bulleted?: boolean;
  @Input() dividing?: boolean;
  @Input() block?: boolean;
  @Input() color?: SemanticColors;
  @Input() disabled?: boolean;
  @Input() size?: SemanticSizes;
  @Input() sub?: string;
  @HostBinding('class.block')
  get isBlock() {
    return this.isPresent(this.block);
  }
  @HostBinding('class.disabled')
  get isDisabled() {
    return this.isPresent(this.disabled);
  }
  @HostBinding('class.icon')
  get isIconHeader() {
    return this.hasValue(this.icon) && !this.isPresent(this.bulleted);
  }
  @HostBinding('class.dividing')
  get isDividing() {
    return this.isPresent(this.dividing);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.hasValue(this.attach)) {
      if ("both" !== this.attach) {
        this.renderer.addClass(this.el.nativeElement, this.attach);
      }
      this.renderer.addClass(this.el.nativeElement, 'attached');
    }
    var colors: string[] = (this.hasValue(this.color)) ? this.color.split(" ") : [];
    for (var i = 0; i < colors.length; i++) {
      this.renderer.addClass(this.el.nativeElement, colors[i]);
    }
    if (this.hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if ("undefined" !== typeof this.align) {
      if ("justify" === this.align) {
        this.renderer.addClass(this.el.nativeElement, 'justified');
      } else {
        this.renderer.addClass(this.el.nativeElement, this.align);
        this.renderer.addClass(this.el.nativeElement, 'aligned');
      }
    }
    if (this.hasValue(this.float)) {
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
 * Implementation of Sub-header component
 *
 * @link http://semantic-ui.com/elements/header.html
 */
@Component({
  selector: '[sui-subheader], sui-subheader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  host: { 'class' : 'sub header' }
})
export class SemanticSubheaderComponent implements OnChanges {
  @Input('icon') icon?: string;
  @Input('child') child?: boolean;
  @Input('disabled') disabled?: boolean;
  @HostBinding('class.disabled')
  get isDisabled() {
    return this.isPresent(this.disabled);
  }
  @HostBinding('class.ui')
  get isNotChild() {
    return !this.isPresent(this.child);
  }

  constructor() { }

  ngOnChanges() {
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }
}
