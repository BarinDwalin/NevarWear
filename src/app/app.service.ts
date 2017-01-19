import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ICategory, ICategoryInfo }  from './model/category';
import { IThing }  from './model/thing';

import Settings from './shared/settings';
@Injectable()
export class AppService {
    private apiUrl = '/api';
    private texts: any[];

    constructor(private http: Http){}

    getUsers(): Promise<any[]> {
        let url =  `${this.apiUrl}/users`;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json());
    }
    
    getCategories(categoryParentID: number): Promise<ICategoryInfo[]> {
        return this.http.get('assets/mock/categories.json')
        //return this.http.get(url)
            .toPromise()
            .then(res => {
                let allCategories = (res.json() as ICategory[]);
                let categories = allCategories
                .filter(p => p.parentID === categoryParentID)                
                .map(p => { 
                    (p as ICategoryInfo).countCategories = allCategories
                    .filter(child => child.parentID === p.id).length;
                    return p;
                });
                console.log(categories);
                return categories;
            });
    }

    getThings(categoryID: number): Promise<IThing[]> {
        return this.http.get('assets/mock/things.json')
        //return this.http.get(url)
            .toPromise()
            .then(res => {
                let allThings = (res.json() as IThing[]);
                let things = allThings.filter(p => p.categoryID === categoryID);
                return things;
            });
    }
}
