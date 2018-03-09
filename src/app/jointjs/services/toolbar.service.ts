import { Injectable } from '@angular/core';
import { ui } from 'libs/rappid/rappid';
import { extend } from 'lodash';

import { GraphService } from 'app/jointjs/services/graph.service';
import { PaperScrollerService } from 'app/jointjs/services/paperScroller.service';

@Injectable()
export class ToolbarService {
  private _toolbar: ui.Toolbar;

  constructor(private graphService: GraphService,
              private paperScrollerService: PaperScrollerService) { }

  public initialize(): void {
    this._toolbar = new ui.Toolbar(extend({
      references: {
        paperScroller: this.paperScrollerService.paperScroller
      }
    }, {
      tools: [
        {
          type: 'zoom-to-fit',
          name: 'zoom-to-fit'
        },
        {
          type: 'zoom-out',
          name: 'zoom-out',
          min: 0.5,
          max: 2,
          step: 0.1
        },
        {
          type: 'zoom-in',
          name: 'zoom-in',
          min: 0.5,
          max: 2,
          step: 0.1
        }
      ]
    }));

    this._toolbar.$el.appendTo('#toolbar');
    this._toolbar.render();
  }
}
