import { DataProviderService } from './../../services/data-provider.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit,OnDestroy {
  videoURL: string = "https://www.youtube.com/embed/";
  autoPlayTag: string="?showinfo=0&autoplay=1";
  closeVideo: boolean = false;
  safeURL: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer,private dataProvider: DataProviderService) {
    let tempFullURL = this.videoURL + this.dataProvider.getVideoID()+this.autoPlayTag;
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(tempFullURL);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  closeVideoBox() {
    this.closeVideo = !this.closeVideo
  }

}
