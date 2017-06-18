import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DressMeUp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dress-me-up',
  templateUrl: 'dress-me-up.page.html',
})
export class DressMeUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  private ionViewDidLoad() {
    console.log('ionViewDidLoad DressMeUpPage');
  }

}
