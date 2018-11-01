import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksComponent } from './tracks.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { myCustomMaterial } from '../../material';

describe('TracksComponent', () => {
	let component: TracksComponent;
	let fixture: ComponentFixture<TracksComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TracksComponent],
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
