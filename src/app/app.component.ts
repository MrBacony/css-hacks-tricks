import { Component } from '@angular/core';
import {Trick} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'css-hacks-n-tricks';

  trickList: Trick[] = [];

  addTricks(tricks: Trick[]) {
    this.trickList = tricks.reverse();
  }
}
