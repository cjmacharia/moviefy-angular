import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { myCustomMaterial } from './material';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './movies/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './movies/display/display.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MoviefyService } from './moviefy.service';
import { CommonModule } from '@angular/common';
import { TracksComponent } from './movies/tracks/tracks.component';
import { BrowseComponent } from './movies/browse/browse.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { FavoritesComponent } from './movies/favorites/favorites.component';
import { HomeComponent } from './movies/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorHandlerService } from './error-handler.service';
@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		MoviesComponent,
		LoginComponent,
		RegisterComponent,
		FooterComponent,
		HeaderComponent,
		SearchComponent,
		DisplayComponent,
		TracksComponent,
		BrowseComponent,
		FavoritesComponent,
		HomeComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		myCustomMaterial,
		CommonModule,
		NgxSpinnerModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [MoviefyService, {
		provide: HTTP_INTERCEPTORS,
		useClass: TokenInterceptorService,
		multi: true


	}, ErrorHandlerService, {
			provide: ErrorHandler, useClass: ErrorHandlerService
		}],
	bootstrap: [AppComponent]
})
export class AppModule { }
