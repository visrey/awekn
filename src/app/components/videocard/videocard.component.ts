import { DataProviderService } from './../../services/data-provider.service';
import { VideoplayerComponent } from './../videoplayer/videoplayer.component';
import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-videocard',
  templateUrl: './videocard.component.html',
  styleUrls: ['./videocard.component.scss']
})
export class VideocardComponent implements OnInit, OnDestroy {

  private _video: any;
  title: string | undefined;
  thumbnailURL = 'http://img.youtube.com/vi/'
  thumbnailURLEnd = '/mqdefault.jpg'
  imageURL: string | undefined;
  faPlay = faPlay
  

  @Input() set video(videoEl: any){
    this._video = videoEl;
    this.title = videoEl.title;
    this.imageURL = this.thumbnailURL+videoEl.videoID+this.thumbnailURLEnd
    // this.title = this.trimTitle(videoEl.title);
  }

  get video() {
    return this._video;
  }

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  openVideoPlayer() {
    this.dataProvider.publishVideoID(this._video.videoID)
  }

}
