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

  moveUp = (ranking) => {
    if (ranking > 1) {
      this.cloneArray = this.favouritesData.slice()
      this.cloneArray[ranking - 2] = this.favouritesData[ranking - 1]
      this.cloneArray[ranking - 1] = this.favouritesData[ranking - 2]
      this.cloneArray[ranking - 2]['ranking'] = ranking - 1
      this.cloneArray[ranking - 1]['ranking'] = ranking
      this.favouritesData = this.cloneArray
    }
  }

  moveDown = (ranking) => {
    if (ranking < this.favouritesData.length) {
      this.cloneArray = this.favouritesData.slice()
      this.cloneArray[ranking - 1] = this.favouritesData[ranking]
      this.cloneArray[ranking] = this.favouritesData[ranking - 1]
      this.cloneArray[ranking - 1]['ranking'] = ranking
      this.cloneArray[ranking]['ranking'] = ranking + 1
      this.favouritesData = this.cloneArray
    }
  }

  saveRatings = (favs) => {
    this.favouritesData.forEach((movie) => {
      this.dataProvider.updateRatings(movie)
    });
  }
}
