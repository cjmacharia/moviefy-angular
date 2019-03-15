import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { myCustomMaterial } from '../../material';
import { MoviefyService } from '../../moviefy.service';
import { Observable } from 'rxjs';
describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  var service: MoviefyService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
			declarations: [ FavoritesComponent ],
			imports: [RouterTestingModule, FormsModule, myCustomMaterial, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
