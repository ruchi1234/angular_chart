import { Injectable } from '@angular/core';
import { dia } from 'libs/rappid/rappid';

@Injectable()
export class GraphService {
  private _graph: dia.Graph;

  initialize(): void {
    this._graph = new dia.Graph();
  }

  get graph(): dia.Graph {
    return this._graph;
  }
}
