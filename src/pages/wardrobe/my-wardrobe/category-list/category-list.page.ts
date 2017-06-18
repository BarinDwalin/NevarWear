import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { WardrobeThingListPage } from '../my-wardrobe';

import { AppService } from '../../../../app/app.service';

import { ICategory, ICategoryInfo } from '../../../../app/model';

@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.page.html',
})

export class WardrobeCategoryListPage implements OnInit {

  private selectedCategory: ICategoryInfo;
  private categoryList: ICategoryInfo[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appService: AppService) {

    this.selectedCategory = navParams.get('category');
  }

  public ngOnInit() {
    this.appService.getCategories(this.selectedCategory.id)
      .then((categories) => {
        this.categoryList = categories;
        categories.forEach((category) => {
          if (category.countCategories === 0) {
            this.appService.getThings(category.id)
            .then((things) => category.countThings = things.length);
          }
        });
      });
  }

  private openPage(category: ICategoryInfo) {
    console.log('openPage ' + category.name);
    if (category.countCategories !== 0) {
      this.navCtrl.push(WardrobeCategoryListPage, {
        category,
      });
    } else if (category.countThings !== 0) {
      this.navCtrl.push(WardrobeThingListPage, {
        category,
      });
    }
  }
}
