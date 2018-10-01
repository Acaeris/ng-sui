import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

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
export class SemanticInputComponent implements OnChanges {
  @Input('focus') focus?: boolean;
  @Input('loading') loading?: boolean;
  @Input('type') type?: string;
  @Input('icon') icon?: string;
  @Input('icon-side') iconSide?: string;
  @Input('flag') flag?: string;
  @Input('placeholder') placeholder?: string;
  @Input('value') value?: string;
  @HostBinding('class.focus')
  get isFocused() {
    return this.isPresent(this.focus);
  }
  @HostBinding('class.loading')
  get isLoading() {
    return this.isPresent(this.loading);
  }

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (!this.hasValue(this.value)) {
      this.value = "";
    }
    if (this.hasValue(this.icon) || this.hasValue(this.flag)) {
      if (this.hasValue(this.iconSide)) {
        this.renderer.addClass(this.el.nativeElement, this.iconSide);
      }
      this.renderer.addClass(this.el.nativeElement, 'icon');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'icon');
    }
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }

  hasValue(key?: string) {
    return "undefined" !== typeof key && key !== "";
  }
}
