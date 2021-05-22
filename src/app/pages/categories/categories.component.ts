import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  videotags: any;
  articletags: any;
  othertags: any;

  constructor(private dataProvider: DataProviderService) { }

  ngOnInit(): void {
    this.loadCatData();
  }

  loadCatData() {
    if (this.dataProvider.curatedData) {
      this.videotags = this.dataProvider.curatedData.tags.video;
      this.articletags = this.dataProvider.curatedData.tags.article;
      this.othertags = this.dataProvider.curatedData.tags.other;
    } else {
      this.dataProvider.loadData().subscribe((data) => {
        this.dataProvider.curatedData = data;
        this.videotags = this.dataProvider.curatedData.tags.video;
        this.articletags = this.dataProvider.curatedData.tags.article;
        this.othertags = this.dataProvider.curatedData.tags.other;
      });
    }
  }

}
