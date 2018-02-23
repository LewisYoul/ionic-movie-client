import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchMoviesPage } from '../search-movies/search-movies'
import { Angular2TokenService } from 'angular2-token'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any = {}

  constructor(
    public navCtrl: NavController,
    private tokenAuthService:Angular2TokenService
  ) {

  }

  logForm = () => {
    console.log(this.user);

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
