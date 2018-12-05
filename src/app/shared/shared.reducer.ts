import { Action } from "@ngrx/store";

export const START_LOADING = '[spinner] start loading';
export const STOP_LOADING = '[spinner] stop loading';


export class StartLoading implements Action {
	readonly type = START_LOADING;
}

export class StopLoading implements Action {
	readonly type = STOP_LOADING;
}

export type spinnerAction = StartLoading | StopLoading;