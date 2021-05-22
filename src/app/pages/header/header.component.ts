import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCog, faBell, faUser, faMicrophone, faFilm, faHome, faThList, faLightbulb as faSolidBulb, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as faRegularBulb } from '@fortawesome/free-regular-svg-icons';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // headerTime: string;
  // headerMonth: string;
  // headerDay: string;
  currentDate: Date;
  intervalUpdater: any;
  faLightbulb!: IconDefinition;

  faCog = faCog
  faBell = faBell 
  faUser = faUser
  faHome = faHome
  faThList = faThList
  faMicrophone = faMicrophone
  faFilm = faFilm

  constructor(private themeService: ThemeService) {
    this.currentDate = new Date()
  }

  ngOnInit(): void {
    this.themeService.checkOnLoad();
    this.intervalUpdater = setInterval(()=> {
      this.currentDate = new Date()
    }, 1000)
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalUpdater)
  }

  // configureTheme() {
  //   if (this.themeService.isDarkTheme()) {
  //     this.faLightbulb = faRegularBulb;
  //   } else {
  //     this.faLightbulb = faSolidBulb;
  //   }
  // }

  // toggleTheme() {
  //   if (this.themeService.isDarkTheme()) {
  //     this.themeService.setLightTheme();
  //   } else {
  //     this.themeService.setDarkTheme();
  //   }
  //   this.configureTheme();
  // }

}
