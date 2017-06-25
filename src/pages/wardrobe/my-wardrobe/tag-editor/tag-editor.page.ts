import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AppService } from '../../../../app/app.service';

import { IThing } from '../../../../app/model';

@Component({
  selector: 'page-tag-editor',
  templateUrl: 'tag-editor.page.html',
})

export class TagEditorPage {
  private thing: IThing;
  private tags: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appService: AppService
  ) {
    this.thing = navParams.get('thing');
    this.tags = this.thing.tags;
  }

  public save(tags: string) {
    this.thing.tags = tags;
    this.appService.saveTagsForThing(this.thing.id, this.thing.tags);
    this.navCtrl.pop();
  }
  public cancel() {
    this.navCtrl.pop();
  }
}
