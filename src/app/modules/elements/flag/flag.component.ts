import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  ElementRef,
  Renderer2
} from '@angular/core';

/**
 * Implementation of Flag component
 *
 * @link http://semantic-ui.com/elements/flag.html
 */
@Component({
  selector: '[sui-flag], sui-flag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  host: { 'class' : 'flag' }
})
export class SemanticFlagComponent implements OnChanges {
  @Input('code') code?: string;
  @Input('sui-flag') flag?: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    var entries: string[] = [];
    if ("" !== this.flag) {
      entries = this.flag.split(" ");
    } else {
      entries = this.code.split(" ");
    }
    for (var i = 0; i < entries.length; i++) {
      this.renderer.addClass(this.el.nativeElement, entries[i]);
    }
  }
}
