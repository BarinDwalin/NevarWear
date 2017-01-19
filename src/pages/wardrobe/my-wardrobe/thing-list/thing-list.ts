import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { WardrobeAddonPage } from '../../addon/addon';

import { AppService } from '../../../../app/app.service';

import { ICategory, ICategoryInfo }  from '../../../../app/model/category';
import { IThing }  from '../../../../app/model/thing';

@Component({
  selector: 'page-thing-list',
  templateUrl: 'thing-list.html'
})

export class WardrobeThingListPage implements OnInit {
  selectedCategory: ICategoryInfo;
	things: IThing[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private appService: AppService) {
	  	this.selectedCategory = navParams.get('category');
	}
	ngOnInit() {  
    this.appService.getThings(this.selectedCategory.id)
		.then(things => {
			this.things = things;
		});
	}
	like(thing: IThing){
		console.log(thing);
		thing.like = !thing.like;
	};
	favorite(thing: IThing){
		console.log(thing);
		thing.favorite = !thing.favorite;
	};
	addon(){
		//TODO: пробрасывание категории
    console.log('openPage WardrobeAddonPage');
    this.navCtrl.push(WardrobeAddonPage);
	};
}