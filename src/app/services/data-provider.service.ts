import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  curatedData: any;
  private videoID: string;
  private videoPlayerSource = new Subject<[]>();
  videoIDObserver$ = this.videoPlayerSource.asObservable();

  publishVideoID(videoID: any) {
    this.videoPlayerSource.next(videoID);
  }

  constructor(private http: HttpClient) {
    this.videoID = "";
   }

  setVideoID(videoID: string){
    this.videoID = videoID;
  }
  getVideoID() {
    return this.videoID
  }

  loadData() {
    return this.http.get('assets/data/curatedData.json');
  }
}
