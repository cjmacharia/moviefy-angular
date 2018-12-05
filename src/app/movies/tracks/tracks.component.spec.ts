import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksComponent } from './tracks.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { myCustomMaterial } from '../../material';
import { MoviefyService } from '../../moviefy.service';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { FooterComponent } from '../../footer/footer.component';

describe('TracksComponent', () => {
	let component: TracksComponent;
	let fixture: ComponentFixture<TracksComponent>;
	let service: MoviefyService;
	beforeEach(async(() => {
		service = new MoviefyService(null);
		TestBed.configureTestingModule({
			declarations: [TracksComponent, NgxSpinnerComponent, FooterComponent],
			imports: [RouterTestingModule, FormsModule, myCustomMaterial, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule]

		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TracksComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
