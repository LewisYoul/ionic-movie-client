//Dependencies
import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform, MenuController, Nav } from 'ionic-angular';

// Pages
import { HomePage } from '../pages/home/home';
import { SearchMoviesPage } from '../pages/search-movies/search-movies';
import { FavouritesPage } from '../pages/favourites/favourites';
import {Angular2TokenService} from "angular2-token";
import {environment} from "./environments/environment";


@Component({
  providers: [Angular2TokenService],
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public menu: MenuController,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private authToken: Angular2TokenService
  ) {
    this.authToken.init(environment.token_auth_config)
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Search', component: SearchMoviesPage },
      { title: 'Favourites', component: FavouritesPage }
    ]
  }

  openPage = (page) => {
    this.menu.close();
    this.nav.setRoot(page.component);
  }

  logOut = () => {
    this.authToken.signOut();
    this.menu.close();
    this.nav.setRoot(HomePage);
  }
}
