import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from './movies/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { myCustomMaterial } from './material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent, HeaderComponent, SearchComponent
			],
			imports: [RouterTestingModule, FormsModule, myCustomMaterial, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule]
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
});
