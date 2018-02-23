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

  returnedMovies:any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider
  ) {}

  ionViewDidLoad() {
    console.log(this.dataProvider.isSignedIn);
  }

  findMovie = (event) => {
    event.preventDefault()
    var movieInput = document.getElementById('movie')['value']
    this.dataProvider.searchMovieDb(movieInput).then(
      res => {
        console.log(res)
        this.returnedMovies = res
        // this.onMovieSearch.emit(res);
      }
    )
    document.getElementById('movie')['value'] = ''
  }

  saveMovie = (event, movie) => {
    event.preventDefault();
    this.dataProvider.postMovieToDb(movie)
  }
}
