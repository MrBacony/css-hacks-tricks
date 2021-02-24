import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EngineState, Trick} from '../app.model';
import {tricks} from '../tricks.data';

@Component({
  selector: 'app-slot-machine',
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./slot-machine.component.scss']
})
export class SlotMachineComponent implements OnInit {

  tricks: Trick[] = tricks;

  engineState: EngineState;

  @Output()
  newTricks: EventEmitter<Trick[]> = new EventEmitter<Trick[]>();

  constructor() { }

  ngOnInit(): void {
  }

  startEngine() {
    if(this.engineState === EngineState.START) {
      this.engineState = EngineState.RESTART;
    }

    this.engineState = EngineState.START;
  }

  engineFinished(tricks: Trick[]) {
    this.newTricks.emit(tricks);
  }
}
