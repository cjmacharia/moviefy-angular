import { Component, OnInit } from '@angular/core';
import { MoviefyService } from '../../moviefy.service';
import { SearchComponent } from '../search/search.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { error } from 'util';
@Component({
	selector: 'app-display',
	templateUrl: './display.component.html',
	styleUrls: ['./display.component.css', '../browse/browse.component.css', '../../header/header.component.css']
})
export class DisplayComponent implements OnInit {
	movies: any;
	error: any;
	constructor(private moviefyService: MoviefyService, private spinner: NgxSpinnerService) {
		this.movies = {}
	}
	ngOnInit() {
		this.spinner.show();
		this.displaySearchedMovies();
	}

	displaySearchedMovies() {
		this.moviefyService.currentMovie.subscribe(data => {
			this.movies = data
			this.spinner.hide();
		},
			error => {
				console.log('here')
				this.spinner.hide();
				this.error = error
				console.log(this.error, '>>>>>>>>>')
			});
	}
}
