import { Action } from '@ngrx/store';

export const DISPLAY_MOVIE = "[movie] display searched movie";
export const BROWSE_MOVIES = "[movie] browse to get the latest movies";

export class DisplayMovie implements Action {
	readonly type = DISPLAY_MOVIE
	constructor(public payload: any) { }
}

export class BrowseMovies implements Action {
	readonly type = BROWSE_MOVIES
	constructor(public payload: any) { }
}



export type movieActions = DisplayMovie | BrowseMovies;

