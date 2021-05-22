import { Injectable } from '@angular/core';
import { dark, light, Theme, fairyPink, midNight, babeBlue, visFlex } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  private active: Theme = dark;
  private availableThemes: Theme[] = [light, dark, fairyPink, midNight, babeBlue, visFlex];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getAvailbleThemeNames(): string[] {
    return this.availableThemes.map((theme) => {
      return theme.name;
    });
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  getActiveThemeName(): string {
    return this.active.name;
  }

  setTheme(themeName: string): void {
    let configureTheme = this.availableThemes.find((theme)=>{return theme.name==themeName})
    if(configureTheme == undefined) {
      return
    }
    this.setActiveTheme(configureTheme)
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }

  persistTheme(themeName: string): void {
    console.log(themeName);
    window.localStorage.setItem('aweknTheme',themeName);
  }
  checkOnLoad() {
    let themeName = window.localStorage.getItem('aweknTheme');
    console.log(themeName);
    if(themeName==null) {
      themeName = 'Awekn Light';
    }
    this.setTheme(themeName);
  }

}
