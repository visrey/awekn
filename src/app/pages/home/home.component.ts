import { DataProviderService } from './../../services/data-provider.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { VideoplayerComponent } from 'src/app/components/videoplayer/videoplayer.component';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('videoPlayer', {read: ViewContainerRef}) videoPlayerRef!: ViewContainerRef;
  componentRef_: any;
  videoIDSubscription: any;
  videoID: any;
  videos: any;
  videotags: any;
  articles: any;
  articletags: any;
  others: any;
  othertags: any;
  discover: any;
  people: any;
  food: any;
  enable = false;
  faAngleDoubleRight = faAngleDoubleRight;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private dataProvider: DataProviderService) {
      this.videoIDSubscription = dataProvider.videoIDObserver$.subscribe((videoID) => {
        this.videoID = videoID;
        this.openVideoPlayer(this.videoID);
      });
     }

  ngOnInit(): void {
    this.loadMainData()
  }
  ngOnDestroy(): void {
    this.videoIDSubscription.unsubscribe();
  }

  openVideoPlayer(videoID: string) {
    this.dataProvider.setVideoID(videoID)
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

  loadMainData() {
    if (this.dataProvider.curatedData) {
      this.videos = this.dataProvider.curatedData.videos;
      this.articles = this.dataProvider.curatedData.articles;
      this.others = this.dataProvider.curatedData.others;
      this.videotags = this.dataProvider.curatedData.tags.video;
      this.articletags = this.dataProvider.curatedData.tags.article;
      this.othertags = this.dataProvider.curatedData.tags.other;
      this.discover = this.dataProvider.curatedData.videos.filter((video:videoElement) => {
        return video.tags.split(',').includes('discover');
      });
      this.people = this.dataProvider.curatedData.videos.filter((video:videoElement) => {
        return video.tags.split(',').includes('people');
      });
      this.food = this.dataProvider.curatedData.videos.filter((video:videoElement) => {
        return video.tags.split(',').includes('food');
      });
      this.enable = true;
    } else {
      this.dataProvider.loadData().subscribe((data) => {
        this.dataProvider.curatedData = data;
        this.videos = this.dataProvider.curatedData.videos;
        this.articles = this.dataProvider.curatedData.articles;
        this.others = this.dataProvider.curatedData.others;
        this.videotags = this.dataProvider.curatedData.tags.video;
        this.articletags = this.dataProvider.curatedData.tags.article;
        this.othertags = this.dataProvider.curatedData.tags.other;
        this.discover = this.dataProvider.curatedData.videos.filter((video:videoElement) => {
          return video.tags.split(',').includes('discover');
        });
        this.people = this.dataProvider.curatedData.videos.filter((video:videoElement) => {
          return video.tags.split(',').includes('people');
        });
        this.food = this.dataProvider.curatedData.videos.filter((video:videoElement) => {
          return video.tags.split(',').includes('food');
        });
        this.enable = true;
      });
    }
  }

}

export interface videoElement {
  title: string,
  videoId: string,
  date: string,
  tags: string
}