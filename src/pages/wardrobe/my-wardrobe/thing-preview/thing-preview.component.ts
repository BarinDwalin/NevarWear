import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AppService } from '../../../../app/app.service';

import { ICategory, ICategoryInfo }  from '../../../../app/model/category';
import { IThing }  from '../../../../app/model/thing';


@Component({
	selector: 'thing-preview',
	templateUrl: 'thing-preview.component.html'
})
export class ThingPreviewComponent {
	@Input()
	thing: IThing;

	@Output()
	addFavorite = new EventEmitter<IThing>();
	@Output()
	removeFavorite = new EventEmitter<IThing>();

	constructor(private appService: AppService) { }

	like(thing: IThing){
		thing.like = !thing.like;
		if (thing.like){
			this.appService.likeThing(thing.id);
		}
		else {
			this.appService.dislikeThing(thing.id);
		}
	};
	favorite(thing: IThing){
		thing.favorite = !thing.favorite;
		if (thing.favorite){
    		console.log('emit addThingToFavorite');
			this.appService.addThingToFavorite(thing.id);
			this.addFavorite.emit(thing);
		}
		else {
    		console.log('emit removeThingFromFavorite');
			this.appService.removeThingFromFavorite(thing.id);
			this.removeFavorite.emit(thing);
		}
	};
}