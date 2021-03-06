import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlotMachineComponent } from './slot-machine/slot-machine.component';
import { SlotEngineComponent } from './slot-machine/slot-engine/slot-engine.component';
import { ResultBoardComponent } from './result-board/result-board.component';
import { IframeContainerComponent } from './result-board/iframe-container/iframe-container.component';
import { StartDialogComponent } from './start-dialog/start-dialog.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    SlotMachineComponent,
    SlotEngineComponent,
    ResultBoardComponent,
    IframeContainerComponent,
    StartDialogComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
