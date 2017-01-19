import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { WardrobeThingListPage } from '../thing-list/thing-list';

import { AppService } from '../../../../app/app.service';

import { ICategory, ICategoryInfo }  from '../../../../app/model/category';

@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html'
})

export class WardrobeCategoryListPage implements OnInit {

  selectedCategory: ICategoryInfo;
  categoryList: ICategoryInfo[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
		private appService: AppService) {

    this.selectedCategory = navParams.get('category');
  }

	ngOnInit() { 
    this.appService.getCategories(this.selectedCategory.id)
      .then(categories => {
        this.categoryList = categories;
        categories.forEach(category =>{          
          if (category.countCategories === 0){
            this.appService.getThings(category.id)
            .then(things => category.countThings = things.length);
          }
        })
      });
  }

  openPage(category: ICategoryInfo) {
    console.log('openPage ' + category.name);
    if (category.countCategories !== 0){
      this.navCtrl.push(WardrobeCategoryListPage, {
        category: category
      });
    }
    else if (category.countThings !== 0){
      this.navCtrl.push(WardrobeThingListPage, {
        category: category
      });
    }
  }
}