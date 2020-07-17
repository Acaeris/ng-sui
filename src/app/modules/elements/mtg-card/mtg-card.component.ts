import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  ElementRef,
  Renderer2,
  Input,
  ViewEncapsulation
} from '@angular/core';

/**
 * Implementation of MTG Card component
 */
@Component({
  selector: '[mtg-card], mtg-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mtg-card.component.html',
  styleUrls: ['./mtg-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MTGCardComponent implements OnChanges {
  @Input() name: string;
  @Input() color: string;
  @Input() cost: string;
  @Input() type: string;
  @Input() stats?: string;
  @Input() rules?: string[];

  manaCost?: string;
  rulesOut: string[] = [];

  constructor (private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.manaCost = this.replaceMana(this.cost);

    if (this.rules) {
      this.rules.forEach((rule, index) => {
        this.rulesOut[index] = this.replaceMana(rule);
      });
    }
  }

  private replaceMana(output: string): string {
    let m;

    // Colorless
    do {
      m = /\{(\d+)\}/g.exec(output);

      if (m) {
        const cost = Number(m[1]);
        output = output.replace(m[0], '<div class="colorless">' + cost + '</div>');
      }
    } while (m);

    // Single Colour
    do {
      m = /\{([WwUuBbRrGg])\}/g.exec(output);

      if (m) {
        let color: string;

        switch (m[1]) {
          case 'W':
          case 'w':
            color = 'white';
            break;
          case 'U':
          case 'u':
            color = 'blue';
            break;
          case 'B':
          case 'b':
            color = 'black';
            break;
          case 'R':
          case 'r':
            color = 'red';
            break;
          case 'G':
          case 'g':
            color = 'green';
            break;
        }

        output = output.replace(m[0], '<div class="' + color + '"></div>');
      }
    } while (m);

    return output;
  }
}
