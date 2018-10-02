import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  ElementRef,
  Renderer2,
  HostBinding,
  ContentChildren,
  QueryList,
  AfterContentChecked
} from '@angular/core';
import { SemanticButtonComponent } from '../button/button.component';

import { isPresent } from '../../../libs/isPresent';
import { hasValue } from '../../../libs/hasValue';

/**
 * Implementation of Input component
 *
 * @link http://semantic-ui.com/elements/input.html
 */
@Component({
  selector: '[sui-input], sui-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input.component.html',
  host: { 'class' : 'ui input' }
})
export class SemanticInputComponent implements OnChanges, AfterContentChecked {
  @Input() focus?: boolean;
  @Input() loading?: boolean;
  @Input() disabled?: boolean;
  @Input() error?: boolean;
  @Input() type?: string;
  @Input() icon?: string;
  @Input() iconSide?: string;
  @Input() flag?: string;
  @Input() placeholder?: string;
  @Input() value?: string;
  @Input() label?: string;
  @ContentChildren(SemanticButtonComponent) buttons: QueryList<SemanticButtonComponent>;
  @HostBinding('class.action')
  get isAction() {
    return this.buttons.length > 0;
  }
  @HostBinding('class.disabled')
  get isDisabled() {
    return isPresent(this.disabled);
  }
  @HostBinding('class.error')
  get isErrored() {
    return isPresent(this.error);
  }
  @HostBinding('class.focus')
  get isFocused() {
    return isPresent(this.focus);
  }
  @HostBinding('class.icon')
  get hasIcon() {
    return hasValue(this.icon) || hasValue(this.flag);
  }
  @HostBinding('class.labeled')
  get isLabeled() {
    return hasValue(this.label);
  }
  @HostBinding('class.loading')
  get isLoading() {
    return isPresent(this.loading);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (!hasValue(this.value)) {
      this.value = "";
    }
    if (!hasValue(this.type)) {
      this.type = "text";
    }
    if ((hasValue(this.icon) || hasValue(this.flag)) && hasValue(this.iconSide)) {
      this.renderer.addClass(this.el.nativeElement, this.iconSide);
    }
    if (hasValue(this.label)) {
      this.renderer.addClass(this.el.nativeElement, this.label);
    }
  }

  ngAfterContentChecked() {
    if (this.buttons.length > 0) {
      var actionDirection: string = "left";

      this.buttons.forEach(button => {
        if (isPresent(button.after)) {
          actionDirection = "right";
        }
      });

      this.renderer.addClass(this.el.nativeElement, actionDirection);
    }
  }
}
