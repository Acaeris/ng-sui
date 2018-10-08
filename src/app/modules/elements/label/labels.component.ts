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
  templateUrl: './labels.component.html',
  host: { 'class' : 'ui labels' }
})
export class SemanticLabelsComponent implements OnChanges {
  @Input() size?: SemanticSizes;

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (hasValue(this.size)) {
      this.renderer.addClass(this.el.nativeElement, this.size);
    }
  }
}
