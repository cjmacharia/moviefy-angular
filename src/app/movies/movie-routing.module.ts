import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TracksComponent } from './tracks/tracks.component';
import { BrowseComponent } from './browse/browse.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MoviesComponent } from './movies.component';
const routes: Route[] = [
	{
		path: 'display',
		component: MoviesComponent
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
]
@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class MovieRoutingModule { }