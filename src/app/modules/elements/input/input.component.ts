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
import { SemanticLabelComponent } from '../label/label.component';

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
  @Input() transparent?: boolean;
  @Input() inverted?: boolean;
  @Input() type?: string;
  @Input() icon?: string;
  @Input() iconSide?: string;
  @Input() flag?: string;
  @Input() placeholder?: string;
  @Input() value?: string;
  @ContentChildren(SemanticButtonComponent) buttons: QueryList<SemanticButtonComponent>;
  @ContentChildren(SemanticLabelComponent) labels: QueryList<SemanticLabelComponent>;
  @HostBinding('class.action') isAction: boolean;
  @HostBinding('class.disabled') isDisabled: boolean;
  @HostBinding('class.error') isError: boolean;
  @HostBinding('class.focus') isFocus: boolean;
  @HostBinding('class.icon') hasIcon: boolean;
  @HostBinding('class.corner') hasCornerLabel: boolean;
  @HostBinding('class.labeled') hasLabel: boolean;
  @HostBinding('class.loading') isLoading: boolean;
  @HostBinding('class.transparent') isTransparent: boolean;
  @HostBinding('class.inverted') isInverted: boolean;

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
    this.isTransparent = isPresent(this.transparent);
    this.isInverted = isPresent(this.inverted);
    if (hasValue(this.icon) || hasValue(this.flag)) {
      if (hasValue(this.iconSide)) {
        this.renderer.addClass(this.el.nativeElement, this.iconSide);
      }
      // Enforces class order.
      this.renderer.addClass(this.el.nativeElement, "icon");
      this.hasIcon = true;
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
    if (this.labels.length > 0) {
      var labelDirection: string = "left";

      this.labels.forEach(label => {
        if (isPresent(label.after)) {
          labelDirection = "right";
        }
        if (isPresent(label.corner)) {
          this.hasCornerLabel = true;
        }
      });

      this.renderer.addClass(this.el.nativeElement, labelDirection);
      this.hasLabel = true;
    }
  }
}
