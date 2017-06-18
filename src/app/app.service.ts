import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ICategory, ICategoryInfo, IThing } from './model';

import Settings from './shared/settings';
@Injectable()
export class AppService {
  private apiUrl = 'serverxxx/api';
  private texts: any[];

  constructor(private http: Http) {}

  public getUsers(): Promise<any[]> {
    const url =  `${this.apiUrl}/users`;
    return this.http.get(url)
    .toPromise()
    .then((res) => res.json());
  }

  public getCategories(categoryParentID: number): Promise<ICategoryInfo[]> {
    const url = `${this.apiUrl}/categories/${categoryParentID}`;
    return this.http.get('assets/mock/categories.json')
    // return this.http.get(url)
    .toPromise()
    .then((res) => {
      const allCategories = (res.json() as ICategory[]);
      const categories = allCategories
      .filter((p) => p.parentID === categoryParentID)
      .map((p) => {
        (p as ICategoryInfo).countCategories = allCategories
        .filter((child) => child.parentID === p.id).length;
        return p;
      });
      console.log(categories);
      return categories;
    });
  }

  public getThings(categoryID: number): Promise<IThing[]> {
    return this.http.get('assets/mock/things.json')
    // return this.http.get(url)
    .toPromise()
    .then((res) => {
      const allThings = (res.json() as IThing[]);
      const things = allThings.filter((p) => p.categoryID === categoryID);
      return things;
    });
  }

  public likeThing(thingID: number) {
    // TODO: save
  }
  public dislikeThing(thingID: number) {
    // TODO: save
  }
  public addThingToFavorite(thingID: number) {
    // TODO: save
  }
  public removeThingFromFavorite(thingID: number) {
    // TODO: save
  }
}
