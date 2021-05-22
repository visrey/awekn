import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { VideocardComponent } from './components/videocard/videocard.component';
import { VideocardContainerComponent } from './components/videocard-container/videocard-container.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';
import { HttpClientModule } from '@angular/common/http';
import { CatCardContainerComponent } from './components/cat-card-container/cat-card-container.component';
import { ICardContainerComponent } from './components/i-card-container/i-card-container.component';
import { ICardComponent } from './components/i-card/i-card.component';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { VideosComponent } from './pages/videos/videos.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { UtilitiesComponent } from './pages/utilities/utilities.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    VideocardComponent,
    VideocardContainerComponent,
    VideoplayerComponent,
    CatCardContainerComponent,
    ICardContainerComponent,
    ICardComponent,
    CatCardComponent,
    VideosComponent,
    CategoriesComponent,
    ArticlesComponent,
    UtilitiesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
