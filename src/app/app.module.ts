import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlotMachineComponent } from './slot-machine/slot-machine.component';
import { SlotEngineComponent } from './slot-machine/slot-engine/slot-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    SlotMachineComponent,
    SlotEngineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
