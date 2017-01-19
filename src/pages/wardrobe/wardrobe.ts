import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WardrobeAddonPage } from './addon/addon';
import { WardrobeGenerateOutfitPage } from './generate-outfit/generate-outfit';
import { WardrobeMyWardrobePage } from './my-wardrobe/my-wardrobe';
import { WardrobeSavedOutfitsPage } from './saved-outfits/saved-outfits';

 
@Component({
  selector: 'page-wardrobe',
  templateUrl: 'wardrobe.html'
})
export class WardrobePage {
  pages: Array<{title: string, component: any, img: string, description?: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Мой гардероб', component: WardrobeMyWardrobePage, img: 'assets/img/wardrobe-my-wardrobe.jpg' },
      { title: 'Пополнить гардероб', component: WardrobeAddonPage, img: 'assets/img/wardrobe-addon.jpg' },
      { title: 'Сохраненные аутфиты', component: WardrobeSavedOutfitsPage, img: 'assets/img/wardrobe-saved-outfits.jpg' },
      { title: 'Подобрать аутфит', component: WardrobeGenerateOutfitPage, img: 'assets/img/wardrobe-generate-outfit.jpg', description: 'DressMeUp' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WardrobePage');
  }

  openPage(page) {
    console.log('openPage ' + page.title);
    this.navCtrl.push(page.component);
    //this.navCtrl.setRoot(page.component);
  }
}
