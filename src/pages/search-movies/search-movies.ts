import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'

/**
 * Generated class for the SearchMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-movies',
  templateUrl: 'search-movies.html',
})
export class SearchMoviesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchMoviesPage');
  }

  findMovie = (event) => {
    event.preventDefault()
    var movieInput = document.getElementById('movie')['value']
    this.dataProvider.searchMovieDb(movieInput).then(
      res => {
        console.log(res)
        // this.onMovieSearch.emit(res);
      }
    )
    document.getElementById('movie')['value'] = ''
  }
}
