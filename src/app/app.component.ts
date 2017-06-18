import { Component, ViewChild } from '@angular/core';

import { MenuController, Nav, Platform } from 'ionic-angular';

import { Splashscreen, StatusBar } from 'ionic-native';

import { AppService } from './app.service';

import { DressMeUpPage,
  MarketPage,
  ProfilePage,
  ShopPage,
  WardrobePage
} from '../pages/pages';

import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) private nav: Nav;

  public isTabletOrIpad: boolean;

  // make ProfilePage the root (or first) page
  private rootPage: any = WardrobePage; // ProfilePage;
  private pages: Array<{title: string, component: any}>;

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
      { title: 'test', component: ListPage },
    ];
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  private openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
