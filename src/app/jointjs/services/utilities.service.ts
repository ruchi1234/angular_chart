import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

  public parseArrayToList(arr: string[]): string {
    return arr.join('\n');
  }

  public parseArrayForTooltipToList(arr: string[]): string {
    return arr.join('<br />');
  }

  public getShortenedText(text: string, lettersLength: number): any {
    if (text && text.length > lettersLength) {
      return text.substr(0, lettersLength - 3) + '...';
    }
    return text;
  }

  public getShortenedArrayAndParseToList(arrayElements: string[]): string {
    const newArrayElements = [];

    arrayElements.forEach((arrayElement: string) => {
      if (arrayElement.length >= 6) {
        arrayElement = this.getShortenedText(arrayElement, 16);
        newArrayElements.push(arrayElement);
      }
    });

    if (newArrayElements.length > 5) {
      const newArray = newArrayElements.slice(0, 5);
      this.addDotsToArrayEnd(newArray);
      return newArray.join('\n');
    } else if (newArrayElements.length < 5) {
      return this.parseArrayToList(newArrayElements);
    } else {
      return this.parseArrayToList(arrayElements);
    }
  }

  public addDotsToArrayEnd(arrayElements): void {
    arrayElements.push('...');
  }
}
