import { Component, AfterViewInit } from '@angular/core';
import { ui } from 'libs/rappid/rappid';

import { GraphService } from 'app/jointjs/services/graph.service';
import { PaperService } from 'app/jointjs/services/paper.service';
import { ToolbarService } from 'app/jointjs/services/toolbar.service';
import { PaperScrollerService } from 'app/jointjs/services/paperScroller.service';
import { LinkService } from '../jointjs/services/link.service';
import { StepsService } from '../jointjs/services/steps.service';

import { useCaseSteps } from 'app/fc/data/useCase.data';
import { flowChart } from 'app/fc/enums/enums';

@Component({
  selector: 'fc-root',
  templateUrl: './fc.component.html',
  styleUrls: ['./fc.component.scss']
})
export class RootComponent implements AfterViewInit {

  public jointSteps = [];
  public jointLinks = [];

  constructor(private graphService: GraphService,
              private paperService: PaperService,
              private paperScroller: PaperScrollerService,
              private toolbarService: ToolbarService,
              private linkService: LinkService,
              private stepsService: StepsService) { }

  public ngAfterViewInit(): void {
    this.graphService.initialize();
    this.paperService.initialize();
    this.paperScroller.initialize();
    this.toolbarService.initialize();

    this.initSteps();
    this.jointStepsLoop();
    this.initTooltip();

    this.graphService.graph.addCells(this.jointSteps.concat(this.jointLinks));
    this.paperScroller.paperScroller.zoomToFit({ padding: 60 });
  }

  private initSteps(): void {
    let i = 0;

    useCaseSteps.forEach((step: any) => {
      switch (step.category) {
        case flowChart.IPA:
          this.jointSteps.push(
            this.stepsService.stepIPA(this.linkService.xPosition(i), this.linkService.yPosition(i), step)
          );
          break;
        case flowChart.OOPA:
          this.jointSteps.push(
            this.stepsService.stepOOPA(this.linkService.xPosition(i), this.linkService.yPosition(i), step)
          );
          break;
        case flowChart.STARTPOINT:
          this.jointSteps.push(
            this.stepsService.startPoint(step)
          );
          break;
        case flowChart.ENDPOINT:
          this.jointSteps.push(
            this.stepsService.endPoint(this.linkService.xPosition(i), this.linkService.yPosition(i))
          );
          break;
        default:
          break;
      }

      i++;
    });
  }

  private initTooltip(): void {
    const tolltip = new ui.Tooltip({
      rootTarget: document.body,
      target: '[data-tooltip]',
      direction: 'auto',
      padding: 10
    } as any);
  }

  private jointStepsLoop(): void {
    for (let i = 0; i < this.jointSteps.length - 1; i++) {
      const source: string = this.jointSteps[i].id;
      const target: string = this.jointSteps[i + 1].id;

      this.jointLinks.push(
        this.linkService.initializeLink(source, target, this.jointSteps[i].get('otherValues').newPage, i)
      );
    }
  }
}
