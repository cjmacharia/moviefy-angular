import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from './movies/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { myCustomMaterial } from './material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviefyService } from './moviefy.service';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { NgxSpinnerComponent } from 'ngx-spinner';
describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent, HeaderComponent, SearchComponent, LoginComponent, RegisterComponent, NgxSpinnerComponent
			],
			imports: [RouterTestingModule, FormsModule, myCustomMaterial, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule],
			providers: [MoviefyService]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'moviefy-angular'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('moviefy-angular');
	});

	it('should user the service', () => {
		const fixture = TestBed.createComponent(AppComponent);
		let mockService = fixture.debugElement.injector.get(MoviefyService)
	})
});
