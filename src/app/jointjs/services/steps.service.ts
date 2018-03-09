// Colour References:
// Step  Big box Fill: #f2f2f2
// IPA Step  Big box Fi: #898e98
// Inner box fill: #e3e3e3
// Inner box border: #9599a0
// OOPA Step Big Box Border: #9989e1
// Colour of text in the grey boxes: #5c6370
//
// DISRUPTIVE 941010
// DISCOMFORT edaa34
// IRRELEVANT ec3434

import { Injectable } from '@angular/core';
import { shapes } from 'libs/rappid/rappid';

import { UtilitiesService } from './utilities.service';
import { actionOOPA, actionType, actionTypeDashed, painPointType, stepType } from 'app/fc/enums/enums';

@Injectable()
export class StepsService {

  constructor(private utilitiesService: UtilitiesService) { }

  public stepIPA(x: number, y: number, step): any {
    const shapeConfig = {
      markup:
        `<g class="rotatable"><rect class="boundaryBox"/><g class="scalable"><rect class="outer"/></g><rect class="box1"/><rect class="tooltipBox1"/>
         <text class="boxList"/><rect class="painBox"/><text class="painBoxText"/><rect class="box2"/><rect class="tooltipBox2"/>
         <rect class="box3"/><rect class="tooltipBox3"/><text class="stepTitle"/><circle class="penaltyPointsCircle"/>
         <polygon class="irrelevant"/><circle class="disruptive"/><rect class="discomfort"/><text class="painPoints"/>
         <image class="info"/><image class="security"/><image class="verified"/><text class="actionTypeLabel"/>
         <text class="actionTypeText"/><text class="stepTypeText"/><text class="stepTypeLabel"/><text class="sumOfPenaltyPoints"/>
         <text class="checkCounter"/><text class="charactersCounter"/></g>`,

      size: {width: 260, height: 220},
      position: {x, y},
      attrs: {
        '.': {
          fill: '#f2f2f2',
          stroke: 'solid'
        },
        '.boundaryBox': {
          width: 260,
          height: 240,
          fill: 'transparent',
          stroke: 'transparent'
        },
        '.stepTitle': {
          'font-size': 22,
          fontWeight: '600',
          'font-family': 'dosis',
          'fill': 'black',
          text: this.utilitiesService.getShortenedText(step.action.description, 34),
          'ref-y': 30
        },
        '.penaltyPointsCircle': {
          transform: 'translate(260, 0)',
          fill: '#8ade73',
          // stroke: 'black',
          r: 20
        },
        '.outer': {
          cursor: 'default',
          fill: '#f2f2f2',
          stroke: '#898e98',
          // rx: 3,
          // ry: 3
        },
        '.painBox': {
          fill: '#e3e3e3',
          stroke: '#9599a0',
          width: 110,
          height: 40,
          x: 16,
          y: 60,
          ref: '.box1',
          display: 'none'
        },
        '.painBoxText': {
          fill: 'black',
          text: 'Paint Point',
          'font-size': 15,
          fontWeight: '600',
          'font-family': 'dosis-bold',
          ref: '.painBox',
          display: 'none'
        },
        '.sumOfPenaltyPoints': {
          'font-size': 17,
          fontWeight: '600',
          'font-family': 'dosis',
          fill: 'white',
          text: step.formType.penaltyPoints + step.action.penaltyPoints,
          ref: '.penaltyPointsCircle'
        },
        '.irrelevant': {
        fill: '#ec3434',
           stroke: '#ec3434',
          points: '0,-24 25,18 -25,18',
          display: 'none'
        },
        '.disruptive': {
          fill: '#941010',
           stroke: '#941010',
          r: 20,
          x: 40,
          y: -19,
          display: 'none'
        },
        '.discomfort': {
          fill: '#edaa34',
          stroke: '#edaa34',
          points: '0,-20 25,20 -25,20',
          width: 50,
          height: 35,
          x: -24,
          y: -19,
          display: 'none'
        },
        '.painPoints': {
          fill: 'white',
          'font-size': 17,
          fontWeight: '600',
          'font-family': 'dosis',
          text: step.painPoint.penaltyPoints,
          ref: '.discomfort',
          display: 'none'
        },
        '.security': {
          'xlink:href': step.otherValues.securityStep ? 'assets/padlock.svg' : '',
          width: 40,
          height: 40,
          x: -20,
          y: -20
        },
        '.verified': {
          'xlink:href': step.otherValues.verifiedField ? 'assets/checked-box.svg' : '',
          width: 40,
          height: 40,
          x: 240,
          y: 195
        },
        '.stepTypeLabel': {
          pointerEvents: 'none',
          fill: 'black',
          text: 'Step Type:',
          'font-size': 15,
          fontWeight: '600',
          'font-family': 'dosis-bold',
          ref: '.box2',
          'ref-y': 15
        },
        '.stepTypeText': {
          pointerEvents: 'none',
          fill: 'black',
          text: this.utilitiesService.getShortenedText(stepType[step.formType.step], 16),
          fontWeight: '300',
          'font-family': 'dosis',
          ref: '.box2',
          'ref-y': 35
        },
        '.actionTypeLabel': {
          pointerEvents: 'none',
          fill: 'black',
          text: 'Action Type:',
          'font-size': 15,
          fontWeight: '600',
          'font-family': 'dosis-bold',
          ref: '.box3',
          'ref-y': 15
        },
        '.actionTypeText': {
          pointerEvents: 'none',
          fill: 'black',
          text: this.utilitiesService.getShortenedText(actionType[step.action.type], 15),
          fontWeight: '300',
          'font-family': 'dosis',
          ref: '.box3',
          'ref-y': 35
        },
        '.boxList': {
          text: step.otherValues.assistiveInformation
            ? this.utilitiesService.getShortenedArrayAndParseToList(step.otherValues.checkList) : '',
          pointerEvents: 'none',
          fontWeight: '300',
          'font-size': '15',
          'font-family': 'dosis',
          'fill': '#5c6370',
          'text-anchor': 'start',
          'ref-x': 5,
          'ref-y': 60,
          ref: '.box1',
        },
        '.checkCounter': {
          fill: 'black',
          text: step.otherValues.assistiveInformation ? `Check Counter: ${step.otherValues.checkCounter}` : '',
          fontWeight: '300',
          'font-size': '15',
          'font-family': 'dosis',
          'ref-y': 195,
          'ref-x': 64
        },
        '.charactersCounter': {
          fill: 'black',
          text: stepType[step.formType.step] === stepType.TEXT_BOX
          || stepType[step.formType.step] === stepType.TEXT_INPUT_FIELD
            ? `Characters Counter: ${step.action.characterCounter}` : '',
          fontWeight: '300',
          'font-size': '15',
          'font-family': 'dosis',
          'ref-y': 195,
          'ref-x': 75
        },
        '.box1': {
          fill: '#e3e3e3',
          stroke: '#9599a0',
          width: 110,
          height: 110,
          x: 16,
          y: 60,
        },
        '.tooltipBox1': {
          cursor: 'pointer',
          fill: '#e3e3e3',
          stroke: '#9599a0',
          width: 110,
          height: 110,
          x: 16,
          y: 60,
          'data-tooltip': this.utilitiesService.parseArrayForTooltipToList(step.otherValues.checkList),
          'data-tooltip-position': 'right',
          'data-tooltip-fill': '#ffffff',
          'display': 'none'
        },
        '.box2': {
           fill: '#e3e3e3',
          stroke: '#9599a0',
          width: 110,
          height: 50,
          x: 135,
          y: 60,
        },
        '.tooltipBox2': {
          cursor: 'pointer',
          width: 110,
          height: 50,
          x: 135,
          y: 60,
          fill: '#e3e3e3',
          stroke: '#9599a0',
          'data-tooltip': actionType[step.action.step],
          'data-tooltip-position': 'right',
          'display': 'none'
        },
        '.box3': {
          fill: '#e3e3e3',
          stroke: '#9599a0',
          width: 110,
          height: 50,
          x: 135,
          y: 120,
        },
        '.tooltipBox3': {
          cursor: 'pointer',
          fill: '#e3e3e3',
          stroke: '#9599a0',
          width: 110,
          height: 50,
          x: 135,
          y: 120,
          'data-tooltip': actionType[step.action.type],
          'data-tooltip-position': 'right',
          'display': 'none'
        },
        '.info': {
          'xlink:href': 'https://png.icons8.com/metro/540/info.png',
          width: 12,
          height: 12,
          x: 20,
          y: 63
        },
      }
    } as any;

    if (actionType[step.action.type].length > 15) {
      shapeConfig.attrs['.tooltipBox2']['display'] = 'block';
      shapeConfig.attrs['.tooltipBox3']['display'] = 'block';
    }

    if (step.otherValues.checkList.length > 5) {
      shapeConfig.attrs['.tooltipBox1']['display'] = 'block';
    }

    if (!!actionTypeDashed[step.action.type]) {
      shapeConfig.attrs['.outer']['stroke-dasharray'] = 8;
    }

    if (painPointType[step.painPoint.type] === painPointType.DISCOMFORT) {
      shapeConfig.attrs['.discomfort']['display'] = 'block';
      shapeConfig.attrs['.painPoints']['display'] = 'block';
      shapeConfig.attrs['.security']['x'] = 30;
      shapeConfig.attrs['.outer']['stroke'] = '#edaa34';
      shapeConfig.attrs['.outer']['stroke-width'] =  0.4;
    }

    if (painPointType[step.painPoint.type] === painPointType.IRRELEVANT) {
      shapeConfig.attrs['.painPoints']['display'] = 'block';
      shapeConfig.attrs['.irrelevant']['display'] = 'block';
      shapeConfig.attrs['.security']['x'] = 30;
      shapeConfig.attrs['.outer']['stroke'] = '#ec3434';
      shapeConfig.attrs['.outer']['stroke-width'] = 0.4;
      shapeConfig.attrs['.painBox']['display'] = 'block';
      shapeConfig.attrs['.painBoxText']['display'] = 'block';
      shapeConfig.attrs['.info']['y'] = 105;
    }

    if (painPointType[step.painPoint.type] === painPointType.DISRUPTIVE) {
      shapeConfig.attrs['.disruptive']['display'] = 'block';
      shapeConfig.attrs['.painPoints']['display'] = 'block';
      shapeConfig.attrs['.security']['x'] = 30;
      shapeConfig.attrs['.outer']['stroke'] = '#941010';
      shapeConfig.attrs['.outer']['stroke-width'] =  0.4;
    }

    delete step.position;
    return new shapes.basic.Rect((<any>Object).assign({}, shapeConfig, step));
  }

  public stepOOPA(x: number, y: number, step): any {
    const shapeConfig = {

      markup:
        `<g class="rotatable"><rect class="boundaryBox"/><g class="scalable"><rect class="outer"/></g><rect class="box1"/><rect class="painBox"/>
         <text class="painBoxText"/><rect class="box2"/><rect class="tooltipBox2"/><rect class="box3"/><text class="stepTitle"/>
         <circle class="penaltyPointsCircle"/><polygon class="irrelevant"/><circle class="disruptive"/><rect class="discomfort"/>
         <text class="painPoints"/><image class="info"/><image class="security"/><image class="verified"/><text class="actionTypeLabel"/>
         <text class="actionTypeText"/><text class="sumOfPenaltyPoints"/><text class="characters"/><text class="characters2"/>
         <text class="challengeResponse"/><text class="pinCharacters"/></g>`,

      size: {width: 260, height: 220},
      position: {x, y},
      attrs: {
        '.': {
          fill: '#f2f2f2',
          stroke: 'solid'
        },
        '.boundaryBox': {
          width: 260,
          height: 240,
          fill: 'transparent',
          stroke: 'transparent'
        },
        '.stepTitle': {
          fontWeight: '600',
          'font-size': 21,
          'font-family': 'dosis',
          text: 'Out of Platform Activity',
           // text: this.utilitiesService.getShortenedText(step.action.description, 40),
          'ref-y': 30

        },
        '.penaltyPointsCircle': {
          transform: 'translate(260, 0)',
          fill: '#8ade73',
          // stroke: 'black',
          r: 20
        },
        '.outer': {
           fill: '#f2f2f2',
          stroke: '#9989e1',
          // rx: 3,
          // ry: 3,
        },
        'rect': {
          fill: '#aaaa',
          stroke: '#9989e1',
          width: 260,
          height: 60

        },
        '.painBox': {
          fill: '#e3e3e3',
          stroke: 'black',
          width: 110,
          height: 40,
          x: 16,
          y: 60,
          ref: '.box1',
          display: 'none'
        },
        '.painBoxText': {
          fill: 'black',
          text: 'Paint Point',
          'font-size': 15,
          fontWeight: '600',
          'font-family': 'dosis-bold',
          ref: '.painBox',
          display: 'none'
        },
        '.sumOfPenaltyPoints': {
          'font-size': 17,
          fontWeight: '600',
          'font-family': 'dosis',
          fill: 'black',
          stroke: 'black',
          'stroke-width': '1',
          text: step.action.penaltyPoints,
          ref: '.penaltyPointsCircle'
        },
        '.irrelevant': {
          fill: '#ec3434',
          // stroke: 'black',
          points: '0,-24 25,18 -25,18',
          display: 'none'
        },
        '.disruptive': {
          fill: '#bc1212',
         // stroke: 'black',
          r: 20,
          x: 40,
          y: -19,
          display: 'none'
        },
        '.discomfort': {
          fill: '#ef9b2d',
          // stroke: 'black',
          points: '0,-20 25,20 -25,20',
          width: 50,
          height: 35,
          x: -24,
          y: -19,
          display: 'none'
        },
        '.painPoints': {
          fill: 'black',
          text: step.painPoint.penaltyPoints,
          ref: '.discomfort',
          display: 'none'
        },
        '.security': {
          'xlink:href': 'assets/padlock.svg',
          width: 40,
          height: 40,
          x: -20,
          y: -20
        },
        '.actionTypeLabel': {
          fill: 'black',
          text: 'Action Type:',
          'font-size': 15,
          fontWeight: '600',
          'font-family': 'dosis-bold',
          ref: '.box3',
          'ref-y': 15
        },
        '.actionTypeText': {
          fill: 'black',
          text: this.utilitiesService.getShortenedText(actionOOPA[step.action.type], 50),
          fontWeight: '300',
          'font-family': 'dosis',
          ref: '.box3',
          'ref-y': 35
        },
        '.characters2': {
          fontWeight: '300',
          'font-size': '15',
          'font-family': 'dosis',
          fill: 'black',
          text: actionOOPA[step.action.type] === actionOOPA.SMARTPHONE_APP_WITH_PASSWORD
          || actionOOPA[step.action.type] === actionOOPA.TOKEN_DEVICE_WITH_PASSWORD
          || actionOOPA[step.action.type] === actionOOPA.TOKEN_DEVICE_WITH_CHALLENGE_RESPONSE_PIN
          || actionOOPA[step.action.type] === actionOOPA.TOKEN_DEVICE_WITH_CHALLENGE_RESPONSE
            ? `Password Characters: ${step.otherValues.passwordChallenge}` : '',
          'ref-y': 170,
          x: -50,
        },
        '.challengeResponse': {
          fontWeight: '300',
          'font-size': '15',
          'font-family': 'dosis',
          fill: 'black',
          text: actionOOPA[step.action.type] === actionOOPA.TOKEN_DEVICE_WITH_CHALLENGE_RESPONSE
          || actionOOPA[step.action.type] === actionOOPA.TOKEN_DEVICE_WITH_CHALLENGE_RESPONSE_PIN
            ? `Challenge Response: ${step.otherValues.challengeResponse}` : '',
          'ref-y': 185,
          x: -52,
        },
        '.pinCharacters': {
          fontWeight: '300',
          'font-size': '15',
          'font-family': 'dosis',
          fill: 'black',
          text: actionOOPA[step.action.type] === actionOOPA.TOKEN_DEVICE_WITH_CHALLENGE_RESPONSE_PIN
            ? `Pin Characters: ${step.otherValues.pinCharacters}` : '',
          'ref-y': 200,
          x: -68,
        },
        '.box1': {
          fill: '#e3e3e3',
          stroke: '#9599a0',
          width: 110,
          height: 110,
          x: 16,
          y: 60,
          'display': 'none'
          // Pain point box
        },
        '.box2': {
          fill: '#c3c3c3',
          ref: '.stepTitle',
          stroke: '#c3c3c3',
          // rx: 4,
          // ry: 4,
          width: 256,
          height: 60,
          x: 2,
          y: 2
          // box header

        },
         '.box3': {
          fill: '#e3e3e3',
          stroke: '#9599a0',
          width: 229,
          height: 75,
          x: 16,
          y: 72
        },
        '.tooltipBox4': {
          'data-tooltip': actionOOPA[step.action.type],
          'data-tooltip-position': 'right',
          // 'display': 'none'
        },

        '.info': {
          'xlink:href': 'https://png.icons8.com/metro/540/info.png',
          width: 12,
          height: 12,
          x: 20,
          y: 63,
          display: 'none'
        },
        '.verified': {
          'xlink:href': '',
          width: 40,
          height: 40,
          display: 'none',
          x: 240,
          y: 195
        },
      }
    } as any;


    if (actionOOPA[step.action.type] === actionOOPA.SMARTPHONE_APP_WITH_PASSWORD
      || actionOOPA[step.action.type] === actionOOPA.TOKEN_DEVICE_WITH_PASSWORD) {
      shapeConfig.attrs['.characters2']['ref-y'] = 177;
    }

  //  if (actionOOPA[step.action.type].length > 15) {
  //    shapeConfig.attrs['.tooltipBox4']['display'] = 'block';
//    }

    if (painPointType[step.painPoint.type] === painPointType.DISCOMFORT) {
      shapeConfig.attrs['.discomfort']['display'] = 'block';
      shapeConfig.attrs['.painPoints']['display'] = 'block';
      shapeConfig.attrs['.outer']['stroke'] = '#ec3434';
      shapeConfig.attrs['.outer']['stroke-width'] = 0.4;
      shapeConfig.attrs['.security']['x'] = 30;
    }

    if (painPointType[step.painPoint.type] === painPointType.IRRELEVANT) {
      shapeConfig.attrs['.painPoints']['display'] = 'block';
      shapeConfig.attrs['.irrelevant']['display'] = 'block';
      shapeConfig.attrs['.security']['x'] = 30;
      shapeConfig.attrs['.outer']['stroke'] = '#ec3434';
      shapeConfig.attrs['.outer']['stroke-width'] = 0.4;
      shapeConfig.attrs['.painBox']['display'] = 'block';
      shapeConfig.attrs['.painBoxText']['display'] = 'block';
      shapeConfig.attrs['.info']['y'] = 105;
    }

    if (painPointType[step.painPoint.type] === painPointType.DISRUPTIVE) {
      shapeConfig.attrs['.disruptive']['display'] = 'block';
      shapeConfig.attrs['.painPoints']['display'] = 'block';
      shapeConfig.attrs['.outer']['stroke'] = '#ec3434';
      shapeConfig.attrs['.outer']['stroke-width'] = 0.4;
      shapeConfig.attrs['.security']['x'] = 30;
    }

    delete step.position;

    return new shapes.basic.Rect((<any>Object).assign({}, shapeConfig, step));
  }

  public startPoint(step): any {
    const shapeConfig = {
      position: {x: 150, y: 110},
      attrs: {
        'text': {
          'font-size': 33,
          fontWeight: '600',
          'font-family': 'dosis',
          'fill': 'grey',
          'text': 'Startpoint     '
        },
        'rect': {
          'position': 'fixed'
        }
      }
    };

    delete step.position;

    return new shapes.basic.Rect((<any>Object).assign({}, shapeConfig, step));
  }

  public endPoint(x, y): any {
    return new shapes.basic.Rect({
      position: {x: x + 120, y: y + 110},
      attrs: {
        'text': {
           'font-size': 33,
          fontWeight: '600',
          'font-family': 'dosis',
          'fill': 'grey',
          'text': '     Endpoint     '
        },
      }
    });
  }
}
