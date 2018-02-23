import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchMoviesPage } from '../search-movies/search-movies'
import { Angular2TokenService } from 'angular2-token'
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any = {}

  constructor(
    public dataProvider: DataProvider,
    public navCtrl: NavController,
    private tokenAuthService:Angular2TokenService
  ) {

  }

  logForm = () => {
    console.log(this.dataProvider.isSignedIn);

    this.tokenAuthService.signIn(this.user).subscribe(
      res => {
        if (res.status == 200) {
          this.navCtrl.setRoot(SearchMoviesPage)
        }
      },

      err => {
        console.log('err:', err);
      }
    )

  }
}
