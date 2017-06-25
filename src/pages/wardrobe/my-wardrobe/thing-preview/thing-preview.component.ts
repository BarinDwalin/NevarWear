import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AppService } from '../../../../app/app.service';

import { ThingViewerPage } from '../../my-wardrobe';

import { ICategory, ICategoryInfo, IThing } from '../../../../app/model';

@Component({
  selector: 'thing-preview',
  templateUrl: 'thing-preview.component.html',
})
export class ThingPreviewComponent {
  @Input()
  private thing: IThing;

  @Output()
  private addFavorite = new EventEmitter<IThing>();
  @Output()
  private removeFavorite = new EventEmitter<IThing>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appService: AppService
  ) { }

  private like(thing: IThing) {
    thing.like = !thing.like;
    if (thing.like) {
      this.appService.likeThing(thing.id);
    } else {
      this.appService.dislikeThing(thing.id);
    }
  }
  private favorite(thing: IThing) {
    thing.favorite = !thing.favorite;
    if (thing.favorite) {
      console.log('emit addThingToFavorite');
      this.appService.addThingToFavorite(thing.id);
      this.addFavorite.emit(thing);
    } else {
      console.log('emit removeThingFromFavorite');
      this.appService.removeThingFromFavorite(thing.id);
      this.removeFavorite.emit(thing);
    }
  }

  private openPage() {
    console.log('openPage ' + this.thing.name);
    this.navCtrl.push(ThingViewerPage, {
      thing: this.thing,
    });
  }
}
