import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AppService } from './app.service';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { DressMeUpPage } from '../pages/dress-me-up/dress-me-up';
import { ProfilePage } from '../pages/profile/profile';
import { MarketPage } from '../pages/market/market';
import { ShopPage } from '../pages/shop/shop';
import { WardrobePage } from '../pages/wardrobe/wardrobe';

import { WardrobeAddonPage } from '../pages/wardrobe/addon/addon';
import { WardrobeGenerateOutfitPage } from '../pages/wardrobe/generate-outfit/generate-outfit';
import { WardrobeMyWardrobePage } from '../pages/wardrobe/my-wardrobe/my-wardrobe';
import { WardrobeSavedOutfitsPage } from '../pages/wardrobe/saved-outfits/saved-outfits';

import { WardrobeCategoryListPage } from '../pages/wardrobe/my-wardrobe/category-list/category-list';
import { WardrobeThingListPage } from '../pages/wardrobe/my-wardrobe/thing-list/thing-list';

import { TodoPage } from '../pages/todo/todo';

@NgModule({
  declarations: [
    MyApp,
    DressMeUpPage,
    ProfilePage,
    MarketPage,
    ShopPage,
    WardrobePage,

    WardrobeAddonPage,
    WardrobeGenerateOutfitPage,
    WardrobeMyWardrobePage,
    WardrobeSavedOutfitsPage,

    WardrobeCategoryListPage,
    WardrobeThingListPage,

    TodoPage,

    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Назад'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DressMeUpPage,
    ProfilePage,
    MarketPage,
    ShopPage,
    WardrobePage,

    WardrobeAddonPage,
    WardrobeGenerateOutfitPage,
    WardrobeMyWardrobePage,
    WardrobeSavedOutfitsPage,

    WardrobeCategoryListPage,

    WardrobeThingListPage,

    TodoPage,
    
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [ AppService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
