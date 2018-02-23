import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchMoviesPage } from '../search-movies/search-movies'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {}

  constructor(public navCtrl: NavController) {

  }

  logForm = () => {
    console.log(this.user);
    this.navCtrl.push(SearchMoviesPage)
  }
}
