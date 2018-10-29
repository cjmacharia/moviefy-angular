import { Component, OnInit } from '@angular/core';
import { MoviefyService } from '../../moviefy.service';
import { SearchComponent } from '../search/search.component';
@Component({
	selector: 'app-display',
	templateUrl: './display.component.html',
	styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
	// search;
	movies: any
	constructor(private moviefyService: MoviefyService) {
		this.movies = {}
	}
	ngOnInit() {

		this.moviefyService.currentMovie.subscribe(data => {
		this.movies = data
		});
	}
}
