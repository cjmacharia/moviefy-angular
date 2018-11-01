import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseComponent } from './browse.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { myCustomMaterial } from '../../material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('BrowseComponent', () => {
	let component: BrowseComponent;
	let fixture: ComponentFixture<BrowseComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BrowseComponent],
			imports: [RouterTestingModule, FormsModule, myCustomMaterial, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule]

		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrowseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
