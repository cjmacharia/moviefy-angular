import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { myCustomMaterial } from '../material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { FooterComponent } from '../footer/footer.component';

describe('MoviesComponent', () => {
	let component: MoviesComponent;
	let fixture: ComponentFixture<MoviesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MoviesComponent, NgxSpinnerComponent, FooterComponent,
				DisplayComponent],
			imports: [FormsModule, myCustomMaterial, RouterTestingModule, myCustomMaterial, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MoviesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
