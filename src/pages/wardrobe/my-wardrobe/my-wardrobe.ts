import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppService } from '../../../app/app.service';

import { ICategory, ICategoryInfo }  from '../../../app/model/category';

import { WardrobeCategoryListPage } from './category-list/category-list';


@Component({
  selector: 'page-wardrobe-my-wardrobe',
  templateUrl: 'my-wardrobe.html'
})

export class WardrobeMyWardrobePage implements OnInit {
  pages: Array<ICategoryInfo>;

  get leftPages(): Array<ICategoryInfo> {
	  return this.pages.filter((p, i) => i % 2 === 0);
  }
  get rightPages(): Array<ICategoryInfo> {
	  return this.pages.filter((p, i) => i % 2 !== 0);
  }
  get couplePages(): Array<{leftPage: ICategoryInfo, rightPage: ICategoryInfo}> {
  return this.leftPages.map((lp, i) => {
      return { leftPage: lp, rightPage: this.rightPages[i]}
    })
  }
	
  constructor(public navCtrl: NavController, public navParams: NavParams,
		private appService: AppService) {
      this.pages = [];	
  }
	ngOnInit() { 
    this.appService.getCategories(null)
      .then(categories => this.pages = categories.slice(0, 8));
  }
  openPage(page: ICategoryInfo) {
    console.log('openPage ' + page.name);
    this.navCtrl.push(WardrobeCategoryListPage, {
      category: page
    });
    //this.navCtrl.setRoot(page.component);
  }
}