import { DataProviderService } from './../../services/data-provider.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { videoElement } from '../home/home.component';
import { VideoplayerComponent } from 'src/app/components/videoplayer/videoplayer.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos: any;
  videocat: any;
  videoParm: any;
  @ViewChild('videoPlayer', {read: ViewContainerRef}) videoPlayerRef!: ViewContainerRef;
  componentRef_: any;
  videoIDSubscription: any;
  videoID: any;

  constructor(private route: ActivatedRoute, private dataServ: DataProviderService,private componentFactoryResolver: ComponentFactoryResolver) { 
    route.params.subscribe(val => {
        this.initiateData(val.tag)
    }); 
    this.videoIDSubscription = dataServ.videoIDObserver$.subscribe((videoID) => {
      this.videoID = videoID;
      this.openVideoPlayer(this.videoID);
    });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.videoIDSubscription.unsubscribe();
  }

  openVideoPlayer(videoID: string) {
    this.dataServ.setVideoID(videoID)
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(VideoplayerComponent);
    const viewContainerRef = this.videoPlayerRef;
    viewContainerRef.clear();
    this.componentRef_ = viewContainerRef.createComponent<VideoplayerComponent>(componentFactory);
    this.componentRef_.instance.videoID = videoID;
    this.componentRef_.instance.videoData = videoID;
  }

  closeVideoPlayer() {
    this.componentRef_.destroy();
  }

  initiateData(tempVID: string) {
    let notag = false;
    if (tempVID) {
      this.videocat = tempVID;
    } else {
      this.videocat = 'All Videos';
      notag = true;
    }
    let videoTag = "all";
    if (tempVID != null) {
      videoTag = tempVID;
    }

    if (this.dataServ.curatedData) {
      if (notag) {
        this.videos = this.dataServ.curatedData.videos;
      } else {
        this.videos = this.dataServ.curatedData.videos.filter((video: videoElement) => {
          return video.tags.split(',').includes(videoTag);
        });
      }

    } else {
      this.dataServ.loadData().subscribe((data) => {
        this.dataServ.curatedData = data;
        if (notag) {
          this.videos = this.dataServ.curatedData.videos;
        } else {
          this.videos = this.dataServ.curatedData.videos.filter((video: videoElement) => {
            return video.tags.split(',').includes(videoTag);
          });
        }
      });
    }
  }

}
