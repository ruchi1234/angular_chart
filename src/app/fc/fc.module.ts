import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './fc.component';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RootComponent
  ]
})
export class FcModule { }
