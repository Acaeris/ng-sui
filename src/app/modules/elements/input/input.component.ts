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
  @Input('type') type?: string;
  @Input('placeholder') placeholder?: string;
  @Input('value') value?: string;

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (!this.hasValue(this.value)) {
      this.value = "";
    }
  }

  isPresent(key?: boolean) {
    return "undefined" !== typeof key && !key;
  }

  hasValue(key?: string) {
    return "undefined" !== typeof key && key !== "";
  }
}
