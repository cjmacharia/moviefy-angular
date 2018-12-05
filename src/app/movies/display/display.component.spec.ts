import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponent } from './display.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { myCustomMaterial } from '../../material';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { FooterComponent } from '../../footer/footer.component';
import { MoviefyService } from '../../moviefy.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
describe('DisplayComponent', () => {
	let component: DisplayComponent;
	let fixture: ComponentFixture<DisplayComponent>;
	let service: MoviefyService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DisplayComponent, NgxSpinnerComponent, FooterComponent],
			imports: [RouterTestingModule, FormsModule, myCustomMaterial, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DisplayComponent);
		component = fixture.componentInstance;
		service = new MoviefyService(null);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
