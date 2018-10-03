import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

import { SemanticColors } from '../../../defs/colors';
import { SemanticSocial } from '../../../defs/social';
import { isPresent } from '../../../libs/isPresent';
import { hasValue } from '../../../libs/hasValue';

/**
 * Implementation of Label component
 *
 * @link http://semantic-ui.com/elements/input.html
 */
@Component({
  selector: '[sui-label], sui-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './label.component.html',
  host: { 'class' : 'ui label' }
})
export class SemanticLabelComponent implements OnChanges {
  @Input() after?: boolean;
  @Input() basic?: boolean;
  @Input() point?: boolean;
  @Input() color?: SemanticColors | "primary" | "secondary" | "positive"
    | "negative" | SemanticSocial;
  @HostBinding('class.basic')
  get isBasic(): boolean {
    return isPresent(this.basic);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (isPresent(this.point)) {
      this.renderer.addClass(this.el.nativeElement, isPresent(this.after) ? "left" : "right");
      this.renderer.addClass(this.el.nativeElement, "pointing");
    }
    var colors: string[] = (hasValue(this.color)) ? this.color.split(" ") : [];
    for (var i = 0; i < colors.length; i++) {
      this.renderer.addClass(this.el.nativeElement, colors[i]);
    }
  }
}
