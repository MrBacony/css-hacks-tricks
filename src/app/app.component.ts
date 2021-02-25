import {Component, OnInit} from '@angular/core';
import {Trick} from './app.model';
import {Subject} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

export enum AppState {
  START = 'START',
  DIALOG = 'DIALOG',
  LOGO = 'LOGO',
  SLOTMACHINE = 'SLOTMACHINE',
  FINISHED = 'FINISHED'
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'css-hacks-n-tricks';

  trickList: Trick[] = [];

  dialog: AppState = AppState.START;

  stateMachine: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.stateMachine.pipe(
      tap(() => this.dialog = AppState.DIALOG),
      delay(25000),
      tap(() => this.dialog = AppState.LOGO),
      delay(7000),
      tap(() => this.dialog = AppState.SLOTMACHINE)
    ).subscribe();
  }

  clickStart() {
    this.stateMachine.next();
  }

  addTricks(tricks: Trick[]) {
    this.trickList = tricks.reverse();
  }
}
