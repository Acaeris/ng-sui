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
import { SemanticColors } from '../../../defs/colors';
import { SemanticSocial } from '../../../defs/social';
import { isPresent } from '../../../libs/isPresent';
import { hasValue } from '../../../libs/hasValue';

/**
 * Implementation of Label group component
 *
 * @link http://semantic-ui.com/elements/label.html
 */
@Component({
  selector: '[sui-labels], sui-labels',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './labels.component.html'
})
export class SemanticLabelsComponent implements OnChanges {
  @Input() circular?: boolean;
  @Input() tag?: boolean;
  @Input() size?: SemanticSizes;
  @Input() color?: SemanticColors | 'primary' | 'secondary' | 'positive'
    | 'negative' | SemanticSocial;
  @HostBinding('class') cssClass = 'ui labels';
  @HostBinding('class.tag') isTag: boolean;
  @HostBinding('class.circular') isCircular: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    this.isTag = isPresent(this.tag);
    this.isCircular = isPresent(this.circular);
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
    if (hasValue(this.color)) {
      for (const color of this.color.split(' ')) {
        this.renderer.addClass(this.el.nativeElement, color);
      }
    }
  }
}
