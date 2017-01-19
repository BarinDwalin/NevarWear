import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = []; 
    this.items.push({ title: 'Мой Блог', icon: 'build' });
    this.items.push({ title: 'Newsfeed', icon: 'paper-plane' });
    this.items.push({ title: 'Followers {0}', icon: 'beer' });
    this.items.push({ title: 'Достижения {0}', icon: 'flask' });
    this.items.push({ title: 'Сохраненные аутфиты', icon: 'wifi' });
    this.items.push({ title: 'Избранные посты', icon: 'boat' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
