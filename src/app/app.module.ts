import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from './fc/fc.component';

import { JointModule } from './jointjs/joint.module';
import { FcModule } from './fc/fc.module';

@NgModule({
  imports: [
    BrowserModule,
    JointModule,
    FcModule
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule { }
