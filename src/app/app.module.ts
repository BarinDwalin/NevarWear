import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { AppService } from './app.service';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { PAGES_COMPONENTS } from '../pages';

import { TodoPage } from '../pages/todo/todo';

@NgModule({
  declarations: [
    MyApp,
    PAGES_COMPONENTS,
    TodoPage,

    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '', // 'Назад'
    }),
    BrowserModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PAGES_COMPONENTS,
    TodoPage,

    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
  ],
  providers: [ AppService, {provide: ErrorHandler, useClass: IonicErrorHandler}],
})
export class AppModule {}
