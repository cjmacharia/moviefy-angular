import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseComponent } from './browse.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { myCustomMaterial } from '../../material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from '../../footer/footer.component';
import { AppComponent } from '../../app.component';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { HeaderComponent } from '../../header/header.component';
import { SearchComponent } from '../search/search.component';
import { LoginComponent } from '../../users/login/login.component';
import { RegisterComponent } from '../../users/register/register.component';
import { MoviefyService } from '../../moviefy.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/empty';
describe('BrowseComponent', () => {
	let component: BrowseComponent;
	let fixture: ComponentFixture<BrowseComponent>;
	let service: MoviefyService;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BrowseComponent, FooterComponent, AppComponent, NgxSpinnerComponent, LoginComponent, RegisterComponent, HeaderComponent, SearchComponent],
			imports: [RouterTestingModule, FormsModule, myCustomMaterial, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule]

		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrowseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		service = TestBed.get(MoviefyService);

	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call BrowseTracks the available movies', () => {
		const observableReturned = spyOn(service, 'BrowseTracks').and.callFake(() => {
			return Observable.empty();
		});

		component.ngOnInit()
		expect(observableReturned).toHaveBeenCalled();
	});

	it('should display the available movies', () => {
		let movie = {

		}
		const observableReturned = spyOn(service, 'BrowseTracks').and.returnValue(Observable.from([{}]));
		component.ngOnInit();
	});

});
