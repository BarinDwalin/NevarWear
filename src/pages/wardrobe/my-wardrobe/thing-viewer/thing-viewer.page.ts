import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AppService } from '../../../../app/app.service';

import { ShopPage } from '../../../shop/shop.page';
import { WardrobeDraftOutfitPage } from '../../wardrobe';

import { IThing } from '../../../../app/model';

@Component({
  selector: 'page-thing-viewer',
  templateUrl: 'thing-viewer.page.html',
})

export class ThingViewerPage implements OnInit {
  private thing: IThing;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appService: AppService
  ) {
    this.thing = navParams.get('thing');
  }

  public ngOnInit() {
    // TODO
  }

  private like() {
    this.thing.like = !this.thing.like;
    if (this.thing.like) {
      this.appService.likeThing(this.thing.id);
    } else {
      this.appService.dislikeThing(this.thing.id);
    }
  }

  private goToOutfit() {
    console.log('openPage DraftOutfitPage');
    this.navCtrl.push(WardrobeDraftOutfitPage);
  }
  private goToShop() {
    console.log('openPage DraftOutfitPage');
    this.navCtrl.push(ShopPage);
  }

  private camera() {
    // TODO:
  }
  private zoom() {
    // TODO:
  }

  // TODO: add change event/binding
  private changeTags(value: string) {
    this.thing.tags = value;
  }
}
