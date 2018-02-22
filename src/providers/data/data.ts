import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  searchMovieDb = (title) => {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=121486b23802e0b6735125ff1892f340&query=${title}`)
      .toPromise()
      .then(res => {
        console.log(res)
        return res['results']
      });
  }

  postMovieToDb = (movie) => {
    console.log(movie)
    this.http.post('http://localhost:3000/movies', {
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average
    })
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err)
        }
      );
  }

  getFavourites = () => {
    return this.http.get('http://localhost:3000/movies')
      .toPromise()
      .then(res => {
        return res;
      });
  }
}
