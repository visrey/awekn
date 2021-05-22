import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faChevronCircleRight, faChevronCircleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-videocard-container',
  templateUrl: './videocard-container.component.html',
  styleUrls: ['./videocard-container.component.scss']
})
export class VideocardContainerComponent implements OnInit {

  dataContainerData: any;
  routerLinkData: any;
  showPrev:boolean | undefined;
  showNext:boolean | undefined;
  faChevronCircleLeft = faChevronCircleLeft
  faChevronCircleRight = faChevronCircleRight
  faAngleDoubleRight = faAngleDoubleRight

  @ViewChild('scrollContainer', { read: ElementRef })
  public scrollContainerComponent!: ElementRef<any>;
 
  
  @Input() set dataContainer(dataContainer: any){
    this.dataContainerData = dataContainer;
  }

  @Input() set routeData(routeData: any){
    this.routerLinkData = routeData;
  }

  constructor() { }

  ngOnInit(): void {
    this.showPrev = false;
    this.showNext = true;
  }

  scrollNext(_event: any) {
    let totalScrolled = this.scrollContainerComponent.nativeElement.scrollLeft + this.scrollContainerComponent.nativeElement.offsetWidth;
    if(this.scrollContainerComponent.nativeElement.scrollWidth > totalScrolled) {
      let toBeScrolled = this.scrollContainerComponent.nativeElement.scrollWidth - totalScrolled;
      if(toBeScrolled < 300) {
        this.scrollContainerComponent.nativeElement.scrollTo({ left: (this.scrollContainerComponent.nativeElement.scrollLeft + toBeScrolled), behavior: 'smooth' });
      } else {
        this.scrollContainerComponent.nativeElement.scrollTo({ left: (this.scrollContainerComponent.nativeElement.scrollLeft + 300), behavior: 'smooth' });
      }
    }   
  }

  scrollPrev(_event: any) {
    if(this.scrollContainerComponent.nativeElement.scrollLeft > 0) {
      this.scrollContainerComponent.nativeElement.scrollTo({ left: (this.scrollContainerComponent.nativeElement.scrollLeft - 300), behavior: 'smooth' });
    } 
  }

  checkScroll(_event: any) {
    let totalScrolled = this.scrollContainerComponent.nativeElement.scrollLeft + this.scrollContainerComponent.nativeElement.offsetWidth;
    let toBeScrolled = this.scrollContainerComponent.nativeElement.scrollWidth - totalScrolled;
    if(this.scrollContainerComponent.nativeElement.scrollLeft == 0) {
      this.showPrev = false;
    } else if(toBeScrolled <= 0) {
      this.showNext = false;
      // this.scrollContainerComponent.nativeElement.scrollTo({ left: (this.scrollContainerComponent.nativeElement.scrollLeft + toBeScrolled), behavior: 'smooth' });
    } else {
      if(!this.showNext) {
        this.showNext = true;
      } 
      if(!this.showPrev) {
        this.showPrev = true;
      }
    }
  }

}
