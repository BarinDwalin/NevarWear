import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native'; 

import { AppService } from './app.service';

import { DressMeUpPage } from '../pages/dress-me-up/dress-me-up';
import { ProfilePage } from '../pages/profile/profile';
import { MarketPage } from '../pages/market/market';
import { ShopPage } from '../pages/shop/shop';
import { WardrobePage } from '../pages/wardrobe/wardrobe';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public isTabletOrIpad: boolean;

  // make ProfilePage the root (or first) page
  rootPage: any = WardrobePage;//ProfilePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();
    this.isTabletOrIpad = this.platform.is('tablet') || this.platform.is('ipad');

    // set our app's pages
    this.pages = [
      { title: 'Мой профиль {0}', component: ProfilePage },
      { title: 'DressMeUp!', component: DressMeUpPage },
      { title: 'Гардероб', component: WardrobePage },
      { title: 'Магазин', component: ShopPage },
      { title: 'Маркет {0}', component: MarketPage },
      { title: 'test', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
