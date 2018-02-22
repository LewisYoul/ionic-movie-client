import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchMoviesPage } from './search-movies';

@NgModule({
  declarations: [
    SearchMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchMoviesPage),
  ],
})
export class SearchMoviesPageModule {}
