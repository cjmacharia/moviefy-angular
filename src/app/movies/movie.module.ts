import { NgModule } from '@angular/core';
import { BrowseComponent } from './browse/browse.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './search/search.component';
import { TracksComponent } from './tracks/tracks.component';
import { MovieRoutingModule } from './movie-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({

	declarations: [
		BrowseComponent,
		DisplayComponent,
		FavoritesComponent,
		HomeComponent,
		MoviesComponent,
		FooterComponent,
		SearchComponent,
		TracksComponent
	],
	imports: [
		SharedModule,
		MovieRoutingModule,

	],
	exports: [
		BrowseComponent,
		DisplayComponent,
		FavoritesComponent,
		HomeComponent,
		MoviesComponent,
		FooterComponent,
		SearchComponent,
		TracksComponent
	]
})

export class MovieModule { }