import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-container',
  templateUrl: './iframe-container.component.html',
  styleUrls: ['./iframe-container.component.scss']
})
export class IframeContainerComponent implements OnChanges {

  @Input()
  url: string;

  safeUrl: SafeUrl;

  @Output()
  close: EventEmitter<void> = new EventEmitter<void>();

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('url' in changes) {
      this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
  }

  getTrustedUrl() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  closeIframe() {
    this.close.emit();
  }
}
