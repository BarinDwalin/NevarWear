import { Component, OnInit } from '@angular/core';

import { NavController, NavParams, Toast, ToastController } from 'ionic-angular';

import { WardrobeAddonPage, WardrobeDraftOutfitPage } from '../../wardrobe';

import { AppService } from '../../../../app/app.service';

import { ICategory, ICategoryInfo, IThing } from '../../../../app/model';

@Component({
  selector: 'page-thing-list',
  templateUrl: 'thing-list.page.html',
})

export class WardrobeThingListPage implements OnInit {
  private selectedCategory: ICategoryInfo;
  private things: IThing[];
  // private handMadeMode: boolean = false;
  private handMadeToast: Toast;

  get handMadeMode() {
    return this.things && this.things.some((p) => p.favorite);
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appService: AppService,
    private toastCtrl: ToastController
  ) {
    this.selectedCategory = navParams.get('category');
  }
  public ngOnInit() {
    this.appService.getThings(this.selectedCategory.id)
    .then((things) => {
      this.things = things;
    });
  }
  private addon() {
    // TODO: пробрасывание категории
    console.log('openPage WardrobeAddonPage');
    this.navCtrl.push(WardrobeAddonPage);
  }
  private goToOutfit() {
    console.log('openPage DraftOutfitPage');
    this.navCtrl.push(WardrobeDraftOutfitPage);
  }

  private addFavorite(thing: IThing) {
    console.log('addFavorite');
    this.createMessageToast('Добавлено к аутфиту');
    // Вариант режима ручной сборки через сообщения
    /*if (!this.handMadeToast){
      this.handMadeToast = this.createHandMadeToast();
      this.handMadeToast.present();
    }
    else{
      this.createMessageToast('Добавлено к аутфиту');
    }*/
  }
  private removeFavorite(thing: IThing) {
    console.log('removeFavorite');
    if (this.handMadeToast && !this.handMadeMode) {
      this.handMadeToast.dismiss();
    }
    this.createMessageToast('Удалено из аутфита');
  }

  private createMessageToast(message: string) {
    const toast = this.toastCtrl.create({
      message,
      duration: 1000,
      position: 'middle',
      cssClass: 'toast-opacity',
    });
    toast.present();
  }

  /*private createHandMadeToast(): Toast{
    let handMadeToast = this.toastCtrl.create({
      message: 'Режим ручной сборки аутфита',
      position: 'top',
      cssClass: 'toast-opacity',
      dismissOnPageChange: true
    });
    handMadeToast.onDidDismiss(() => {
      console.log('Dismissed handMadeToast');
      this.handMadeToast = null;
    });
    return handMadeToast;
  }*/
}
