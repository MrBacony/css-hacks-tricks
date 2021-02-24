import {Component, Input, OnInit} from '@angular/core';
import {Trick} from '../app.model';

@Component({
  selector: 'app-result-board',
  templateUrl: './result-board.component.html',
  styleUrls: ['./result-board.component.scss']
})
export class ResultBoardComponent implements OnInit {

  @Input()
  tricks: Trick[] = [{
    label: 'Flex the Box',
    stackblitz: 'htt',
    caniuse: 'http'
  }];

  showIframe = false;
  iframeUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

  openIframe(url) {
    this.showIframe = true;
    this.iframeUrl = url;
  }

}
