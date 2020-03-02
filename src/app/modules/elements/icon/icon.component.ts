import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

/**
 * Implementation of Icon component
 *
 * @link http://semantic-ui.com/elements/icon.html
 */
@Component({
  selector: '[sui-icon], sui-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ''
})
export class SemanticIconComponent implements OnInit {
  @Input() type = '';
  @Input('sui-icon') icon = '';
  @HostBinding('class') cssClass = 'icon';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    let entries: string[] = [];
    if ('' !== this.icon) {
      entries = this.icon.split(' ');
    } else {
      entries = this.type.split(' ');
    }
    for (let i = 0; i < entries.length; i++) {
      this.renderer.addClass(this.el.nativeElement, entries[i]);
    }
  }
}
