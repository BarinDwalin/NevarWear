import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Market page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-market',
  templateUrl: 'market.page.html',
})
export class MarketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  private ionViewDidLoad() {
    console.log('ionViewDidLoad MarketPage');
  }

}
