import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  favouritesData: any

  constructor(
    public dataProvider: DataProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ngOnInit() {
    this.dataProvider.getFavourites().then(res => {
      this.favouritesData = res;
      console.log(this.favouritesData)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

}
