import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MoviefyService } from './moviefy.service';
import { StoreModule } from '@ngrx/store';
import { TokenInterceptorService } from './token-interceptor.service';
import { ErrorHandlerService } from './error-handler.service';
import { MovieModule } from './movies/movie.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './users/user.module';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
	],
	imports: [
		BrowserAnimationsModule,
		MovieModule,
		SharedModule,
		UserModule,
		StoreModule.forRoot({}),
		NgxSpinnerModule,
		AppRoutingModule,
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
