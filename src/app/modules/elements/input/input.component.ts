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
  @HostBinding('class.action') isAction: boolean;
  @HostBinding('class.disabled') isDisabled: boolean;
  @HostBinding('class.error') isError: boolean;
  @HostBinding('class.focus') isFocus: boolean;
  @HostBinding('class.icon') hasIcon: boolean;
  @HostBinding('class.labeled') hasLabel: boolean;
  @HostBinding('class.loading') isLoading: boolean;

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (!hasValue(this.value)) {
      this.value = "";
    }
    if (!hasValue(this.type)) {
      this.type = "text";
    }
    this.isDisabled = isPresent(this.disabled);
    this.isError = isPresent(this.error);
    this.isFocus = isPresent(this.focus);
    this.isLoading = isPresent(this.loading);
    if (hasValue(this.icon) || hasValue(this.flag)) {
      if (hasValue(this.iconSide)) {
        this.renderer.addClass(this.el.nativeElement, this.iconSide);
      }
      // Enforces class order.
      this.renderer.addClass(this.el.nativeElement, "icon");
      this.hasIcon = true;
    }
    if (hasValue(this.label)) {
      this.renderer.addClass(this.el.nativeElement, this.label);
      // Enforces class order.
      this.renderer.addClass(this.el.nativeElement, "labeled");
      this.hasLabel = true;
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
      this.isAction = true;
    }
  }
}
