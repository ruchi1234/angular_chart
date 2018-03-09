import { Injectable } from '@angular/core';
import { ui } from 'libs/rappid/rappid';
import { extend } from 'lodash';

import { PaperService } from 'app/jointjs/services/paper.service';

@Injectable()
export class PaperScrollerService {
  private _paperScroller: ui.PaperScroller;

  constructor(private paperService: PaperService) { }

  public initialize(): void {
    this._paperScroller = new ui.PaperScroller(extend({
      paper: this.paperService.paper,
    }, {
      autoResizePaper: true,
      padding: 40
    }));

    this._paperScroller.$el.appendTo('#paper');
    this._paperScroller.render();

    this.listenToEvents();
  }

  public get paperScroller(): ui.PaperScroller {
    return this._paperScroller;
  }

  private listenToEvents(): void {
    this.paperService.paper.on('blank:pointerdown', (evt: any) => {
      this._paperScroller.startPanning(evt);
    });
  }
}
