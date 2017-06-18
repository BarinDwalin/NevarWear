import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppService } from '../../../app/app.service';

import { ICategory, ICategoryInfo } from '../../../app/model/category';

import { WardrobeCategoryListPage } from './category-list/category-list.page';

@Component({
  selector: 'page-wardrobe-my-wardrobe',
  templateUrl: 'my-wardrobe.page.html',
})

export class WardrobeMyWardrobePage implements OnInit {
  private pages: ICategoryInfo[];

  get leftPages(): ICategoryInfo[] {
    return this.pages.filter((p, i) => i % 2 === 0);
  }
  get rightPages(): ICategoryInfo[] {
    return this.pages.filter((p, i) => i % 2 !== 0);
  }
  get couplePages(): Array<{leftPage: ICategoryInfo, rightPage: ICategoryInfo}> {
  return this.leftPages.map((lp, i) => {
      return { leftPage: lp, rightPage: this.rightPages[i] };
    });
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appService: AppService) {
      this.pages = [];
  }
  public ngOnInit() {
    this.appService.getCategories(null)
    .then((categories) => this.pages = categories.slice(0, 8));
  }
  private openPage(page: ICategoryInfo) {
    console.log('openPage ' + page.name);
    this.navCtrl.push(WardrobeCategoryListPage, {
      category: page,
    });
    // this.navCtrl.setRoot(page.component);
  }
}
