import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {
  private _type: any;
  private _tagname: any;
  title!: string;
  videolink: string | undefined;

  @Input() set tagname(tag: any){
    this._tagname = tag;
    this.title = tag;
  }

  @Input() set ttype(ttype: any){
    this._type = ttype;
  }
  
  constructor() { }

  ngOnInit(): void {
    this.videolink = '../' + this._type + '/' + this._tagname;
  }
  

}
