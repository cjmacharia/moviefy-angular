
// import { movieActions, DISPLAY_MOVIE, BrowseMovies, BROWSE_MOVIES } from './movie.action';
// import { createFeatureSelector, createSelector, State } from '@ngrx/store';
// import * as fromRoot from '../app.reducer';

// export interface MovieState {
// 	browseMovies;
// 	foundMovies;
// }
// export interface State extends fromRoot.State {
// 	movies: MovieState;
// }
// export const initialState: MovieState = {
// 	foundMovies: [],
// 	browseMovies: []
// }

// export function MovieReducer(state = initialState, action: movieActions) {
// 	switch (action.type) {
// 		case DISPLAY_MOVIE:
// 			return {
// 				...state,
// 				foundMovies: action.payload
// 			}
// 		case BROWSE_MOVIES:
// 			return {
// 				...state,
// 				browseMovies: action.payload
// 			}
// 	}
// }

// export const getFoundMovies = createFeatureSelector<MovieState>('movies');
// export const foundMovies = createSelector(getFoundMovies, (state: MovieState) => state.foundMovies);
// export const getBrowsedMovies = createFeatureSelector<MovieState>('movies');
// export const browsedMovies = createSelector(getBrowsedMovies, (state: MovieState) => state.browseMovies);