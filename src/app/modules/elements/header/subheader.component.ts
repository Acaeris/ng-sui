import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  OnChanges,
  HostBinding
} from '@angular/core';

import { isPresent } from '../../../libs/isPresent';

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
  @Input() icon?: string;
  @Input() child?: boolean;
  @Input() disabled?: boolean;
  @HostBinding('class.disabled')
  get isDisabled() {
    return isPresent(this.disabled);
  }
  @HostBinding('class.ui')
  get isNotChild() {
    return !isPresent(this.child);
  }

  constructor() { }

  ngOnChanges() {
  }
}
