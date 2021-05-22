import { SettingsComponent } from './pages/settings/settings.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { UtilitiesComponent } from './pages/utilities/utilities.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { VideosComponent } from './pages/videos/videos.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'videos',
    component: VideosComponent
  },
  {
    path: 'videos/:tag',
    component: VideosComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'utilities',
    component: UtilitiesComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
