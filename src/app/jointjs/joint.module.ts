import { NgModule } from '@angular/core';

import { GraphService } from 'app/jointjs/services/graph.service';
import { PaperService } from 'app/jointjs/services/paper.service';
import { PaperScrollerService } from 'app/jointjs/services/paperScroller.service';
import { ToolbarService } from 'app/jointjs/services/toolbar.service';
import { LinkService } from './services/link.service';
import { StepsService } from './services/steps.service';
import { UtilitiesService } from './services/utilities.service';

@NgModule({
  providers: [
    GraphService,
    PaperService,
    PaperScrollerService,
    ToolbarService,
    LinkService,
    StepsService,
    UtilitiesService
  ]
})
export class JointModule { }
