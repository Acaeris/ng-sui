import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  ElementRef,
  Renderer2
} from '@angular/core';

/**
 * Implementation of Icon component
 *
 * @link http://semantic-ui.com/elements/icon.html
 */
@Component({
  selector: '[sui-icon], sui-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  host: { 'class' : 'icon' }
})
export class SemanticIconComponent implements OnInit {
  @Input() type: string = "";
  @Input('sui-icon') icon: string = "";

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    var entries: string[] = [];
    if ("" !== this.icon) {
      entries = this.icon.split(" ");
    } else {
      entries = this.type.split(" ");
    }
    for (var i = 0; i < entries.length; i++) {
      this.renderer.addClass(this.el.nativeElement, entries[i]);
    }
  }
}
