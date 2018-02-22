import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchMoviesPage } from '../search-movies/search-movies'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logIn = () => {
    this.navCtrl.push(SearchMoviesPage)
  }
}
