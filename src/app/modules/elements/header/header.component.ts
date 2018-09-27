import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  OnChanges,
  HostBinding
} from '@angular/core';

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
  @Input() align?: "" | "left" | "center" | "right";
  @Input() attached?: "" | 'top' | 'bottom';
  @Input() block?: boolean;
  @Input() color?: SemanticColors;
  @Input() disabled?: boolean;
  @Input() size?: SemanticSizes;
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
    return this.hasValue(this.icon);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.hasValue(this.attached)) {
      this.renderer.addClass(this.el.nativeElement, this.attached);
      this.renderer.addClass(this.el.nativeElement, 'attached');
    }
    var colors: string[] = (this.hasValue(this.color)) ? this.color.split(" ") : [];
    for (var i = 0; i < colors.length; i++) {
      this.renderer.addClass(this.el.nativeElement, colors[i]);
    }
    if (this.hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if (this.hasValue(this.align)) {
      this.renderer.addClass(this.el.nativeElement, this.align);
      this.renderer.addClass(this.el.nativeElement, 'aligned');
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
  host: { 'class' : 'ui sub header' }
})
export class SemanticSubheaderComponent implements OnChanges {
  @Input('icon') icon?: string;
  @Input('disabled') disabled?: boolean;
  @HostBinding('class.disabled')
  get isDisabled() {
    return this.isPresent(this.disabled);
  }

  constructor() { }

  ngOnChanges() {
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }
}
