import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchMoviesPage } from '../search-movies/search-movies'
import { Angular2TokenService } from 'angular2-token'
import { DataProvider } from '../../providers/data/data';
import {environment} from "../../app/environments/environment";


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
    this.tokenAuthService.init(environment.token_auth_config);
  }

  logForm = () => {
    console.log(this.dataProvider.isSignedIn);

    this.tokenAuthService.signIn(this.user).subscribe(
      res => {
        if (res.status == 200) {
          this.dataProvider.isSignedIn = true;
          this.navCtrl.setRoot(SearchMoviesPage)
          console.log(res)
          console.log(res.headers.toJSON())
        }
      },

      err => {
        console.log('err:', err);
      }
    )

  }
}
