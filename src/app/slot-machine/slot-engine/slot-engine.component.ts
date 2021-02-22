import {Component, Input, OnInit} from '@angular/core';
import {EngineState, Trick} from '../../app.model';
import set = Reflect.set;

@Component({
  selector: 'app-slot-engine',
  templateUrl: './slot-engine.component.html',
  styleUrls: ['./slot-engine.component.scss']
})
export class SlotEngineComponent implements OnInit {

  @Input()
  slotcontents: Trick[] = [];

  @Input()
  set start(input: EngineState) {
    if(input) {
      this.state = input;

      this.generateRandomList();
      this.startEngine();
    }
  }

  state: EngineState = EngineState.START;

  preparedList: Trick[] = [];

  wonTricks: Trick[] = [];

  slotWinner: Trick;
  constructor() { }

  ngOnInit(): void {
  }

  generateRandomList() {
    this.preparedList = [];
    let wonIndex;
    for(let i=0; i < 50; i++) {
      const index = Math.floor(Math.random() * this.slotcontents.length);
      this.preparedList.push(this.slotcontents[index]);
      if(i === 2) {
        wonIndex = index;
      }
    }
    this.slotcontents.splice(wonIndex, 1);
    this.slotWinner = this.preparedList[2];
    this.wonTricks.push(this.slotWinner);
  }

  startEngine() {
    if((this.state === EngineState.FINISHED || this.state === EngineState.START) && this.slotcontents.length > 0) {
        this.state = EngineState.RUNNING;
        this.generateRandomList();
        setTimeout(() => {
          this.state = EngineState.FINISHED;
        }, 2500);
    }
  }

}
