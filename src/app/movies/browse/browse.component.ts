import { Component, OnInit } from '@angular/core';
import { MoviefyService } from '../../moviefy.service';

@Component({
	selector: 'app-browse',
	templateUrl: './browse.component.html',
	styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
	movies: any
	constructor(private moviefyService: MoviefyService) {
		this.movies = [];
	}

	ngOnInit() {
		this.getBrowsedMovies()
	}

	getBrowsedMovies() {
		this.moviefyService.BrowseTracks().subscribe((data => {
			this.movies = data
		}))
	}

}
