import { Component, OnInit } from '@angular/core';
import { MoviefyService } from '../../moviefy.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-browse',
	templateUrl: './browse.component.html',
	styleUrls: ['./browse.component.css', '../../header/header.component.css']
})
export class BrowseComponent implements OnInit {
	movies: any
	constructor(private moviefyService: MoviefyService, private spinner: NgxSpinnerService) {
		this.movies = [];
	}

	ngOnInit() {
		this.spinner.show();
		this.getBrowsedMovies()
	}

	getBrowsedMovies() {
		this.moviefyService.BrowseTracks().subscribe((data => {
			this.movies = data
			this.spinner.hide();
		}))
	}

}
