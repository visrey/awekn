import { ThemeService } from 'src/app/services/theme/theme.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  themeName: any;
  availableThemes: any;
  settingsSaved: boolean;
  
  constructor(private fb: FormBuilder ,private themeService: ThemeService) {
    this.settingsSaved= false;
   }

  ngOnInit(): void {
    this.availableThemes = this.themeService.getAvailbleThemeNames();
    this.themeName = this.themeService.getActiveThemeName();
    let themeNameObj = this.settingsForm.get('themeName');
    themeNameObj?.setValue(this.themeName);
    this.settingsSaved = false;
  }

  settingsForm = this.fb.group({
    themeName: ['', [Validators.required]]
  })

  changeTheme() {
    this.settingsSaved = false;
    let themeNameObj = this.settingsForm.get('themeName');
    if(themeNameObj==null) {
      return
    }
    this.themeService.setTheme(themeNameObj.value)
  }
  onSubmit() {
    let themeNameObj = this.settingsForm.get('themeName');
    if(themeNameObj==null) {
      return
    }
    this.themeService.persistTheme(themeNameObj.value);
    this.settingsSaved = true;
  }

}
