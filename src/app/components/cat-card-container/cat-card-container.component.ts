import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faChevronCircleRight, faChevronCircleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cat-card-container',
  templateUrl: './cat-card-container.component.html',
  styleUrls: ['./cat-card-container.component.scss']
})
export class CatCardContainerComponent implements OnInit {

  cattags: any;
  typeName: any;

  @Input() set tags(tags: any){
    this.cattags = tags;
  }

  @Input() set catType(catType: any){
    this.typeName = catType;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
