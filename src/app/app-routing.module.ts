import { NgModule, Component } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TracksComponent } from './movies/tracks/tracks.component';
import { BrowseComponent } from './movies/browse/browse.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { FavoritesComponent } from './movies/favorites/favorites.component';
import { HomeComponent } from './movies/home/home.component';

const routes: Route[] = [
	{
		path: 'display',
		component: MoviesComponent
	},
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'tracks/:id',
		component: TracksComponent
	},
	{
		path: 'browse',
		component: BrowseComponent
	},
	{
		path: 'favorites',
		component: FavoritesComponent
	}

];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
