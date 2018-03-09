import {Injectable} from '@angular/core';
import {dia} from 'libs/rappid/rappid';

@Injectable()
export class LinkService {
  public columns = 6;
  public colWidth = 400;
  public rowHeight = 350;

  public initializeLink(source: string, target: string, newPage: boolean, index: number): dia.Link {
    const endDirection: string = this.arrowEndDirection(index);
    const startDirection: string = this.arrowStartDirection(index);

    return new dia.Link({
      markup: [
        '<path class="connection" d="M 0 0 0 0"/>',
        '<circle class="marker-source"/>',
        '<path class="marker-target" d="M 0 0 0 0"/>',
        '<g class="labels"/>'
      ].join(''),
      size: { width: 100, height: 100 },
      source: { id: source },
      target: { id: target },
      router: {
        name: 'manhattan',
        args: {
          startDirections: [ startDirection ],
          endDirections: [ endDirection ]
        }
      },

      connector: {
        name: 'normal'
      },
      labels: [
        {
          position: 0.5,
          attrs: {
            text: {
              text: newPage ? '\uf24d' : '',
              fill: '#393939',
              'font-size': 20,
              'font-family': 'Dosis, sans-serif',
              'class': 'far'
            },
            rect: {
              visibility: newPage ? 'visible' : 'hidden',
              fill: '#e3e3e3'
            }
          }
        }
      ],
      attrs: {
        '.connection': {
          strokeWidth: 2,
          stroke: '#393939'
        },
        '.marker-source': {
          fill: '#393939',
          r: 5
        },
        '.marker-target': {
          fill: '#393939',
          strokeWidth: 2,
          d: 'M 8,0 0,6 8,12'
        }
      }
    } as any);
  }

  public arrowEndDirection(i: number): string {
    return (this.row((i === 0) ? i : i + 1) % 2 === 0) ? 'left' : 'right';
  }

  public arrowStartDirection(i: number): string {
    return (this.row(i) % 2 === 0) ? 'right' : 'left';
  }

  public row(i: number): number {
    return Math.floor(i / this.columns);
  }

  public xPosition(i: number): number {
    const row = this.row(i);

    if (row % 2 === 0) {
      return (i % this.columns) * this.colWidth;
    } else {
      return ((this.columns - 1) - (i % this.columns)) * this.colWidth;
    }
  }

  public yPosition(i: number): number {
    return this.row(i) * this.rowHeight;
  }
}
