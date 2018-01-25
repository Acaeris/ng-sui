import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

/**
 * Implementation of Image component
 *
 * @link http://semantic-ui.com/elements/image.html
 */
@Component({
  selector: '[sui-img], sui-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  host: { 'class' : 'ui image' }
})
export class SemanticImageComponent implements OnInit {
  @Input('state') state: string = "";
  @Input('variation') variation: string = "";
  @HostBinding('class.disabled') disabled: boolean = false;
  @HostBinding('class.hidden') hidden: boolean = false;

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.checkState();
  }

  checkState() {
    var states: string[] = this.state.split(" ");

    for (var i = 0; i < states.length; i++) {
      switch (states[i]) {
        case "hidden":
          this.hidden = true;
          break;
        case "disabled":
          this.disabled = true;
          break;
        default:
          break;
      }
    }
  }
}
