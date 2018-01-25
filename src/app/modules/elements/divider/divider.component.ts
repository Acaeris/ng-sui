import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

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
  @HostBinding('class.clearing')
  get isClearing() {
    return this.isPresent(this.clearing);
  }
  @HostBinding('class.fitted')
  get isFitted() {
    return this.isPresent(this.fitted);
  }
  @HostBinding('class.hidden')
  get isHidden() {
    return this.isPresent(this.hidden);
  }
  @HostBinding('class.horizontal')
  get hasLabel() {
    return "undefined" !== typeof this.label && "" !== this.label;
  };
  @HostBinding('class.inverted')
  get isInverted() {
    return this.isPresent(this.inverted);
  }
  @HostBinding('class.section')
  get isSection() {
    return this.isPresent(this.section);
  }

  constructor() { }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }
}
