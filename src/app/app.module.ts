import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SearchMoviesPage } from '../pages/search-movies/search-movies'
import { FavouritesPage } from '../pages/favourites/favourites'

import { DataProvider } from '../providers/data/data';
import { Angular2TokenService } from 'angular2-token';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchMoviesPage,
    FavouritesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchMoviesPage,
    FavouritesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Angular2TokenService,
    HttpClientModule
  ]
})
export class AppModule {}
