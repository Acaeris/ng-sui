import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';
import { hasValue } from '../../../libs/hasValue';
import { isPresent } from '../../../libs/isPresent';

/**
 * Implementation of Divider component.
 * Note: Doesn't currently support vertical dividers.
 * This is because of an issue known by Semantic UI.
 *
 * @link http://semantic-ui.com/elements/divider.html
 */
@Component({
  selector: 'div[sui-divider]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './divider.component.html',
  host: { 'class' : 'ui divider' }
})
export class SemanticDividerComponent {
  @Input() label?: string;
  @Input() icon?: string;
  @Input() flag?: string;
  @Input() clearing?: boolean;
  @Input() fitted?: boolean;
  @Input() hidden?: boolean;
  @Input() inverted?: boolean;
  @Input() section?: boolean;
  @Input() vertical?: boolean;
  @HostBinding('class.clearing')
  get isClearing() {
    return isPresent(this.clearing);
  }
  @HostBinding('class.fitted')
  get isFitted() {
    return isPresent(this.fitted);
  }
  @HostBinding('class.hidden')
  get isHidden() {
    return isPresent(this.hidden);
  }
  @HostBinding('class.horizontal')
  get isHorizontal() {
    return !isPresent(this.vertical) && hasValue(this.label);
  }
  @HostBinding('class.inverted')
  get isInverted() {
    return isPresent(this.inverted);
  }
  @HostBinding('class.section')
  get isSection() {
    return isPresent(this.section);
  }
  @HostBinding('class.vertical')
  get isVertical() {
    return isPresent(this.vertical);
  }

  constructor() { }
}
