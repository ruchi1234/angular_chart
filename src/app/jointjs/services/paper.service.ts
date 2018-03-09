import { Injectable } from '@angular/core';
import { dia } from 'libs/rappid/rappid';
import { extend } from 'lodash';

import { GraphService } from 'app/jointjs/services/graph.service';

@Injectable()
export class PaperService {
  private _paper: dia.Paper;

  constructor(private graphService: GraphService) { }

  public initialize(): void {
    this._paper = new dia.Paper(extend({
      model: this.graphService.graph
    }, {
      width: 1000,
      height: 6000,
      gridSize: 1,
      drawGrid: false,
      interactive: false
    }));
  }

  public get paper(): dia.Paper {
    return this._paper;
  }
}
