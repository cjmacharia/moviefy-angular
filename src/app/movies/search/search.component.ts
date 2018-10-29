import { Component, OnInit, Input } from '@angular/core';
import { MoviefyService } from '../../moviefy.service';
import { FormControl, Validators } from '@angular/forms'
import { debounce, debounceTime } from 'rxjs/operators';
@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	searchMovie = new FormControl('', [Validators.required])

	constructor(private moviefyService: MoviefyService) { }

	ngOnInit() {
		this.getMovies()
	}
	public getMovies() {
		this.searchMovie.setValue(this.searchMovie.value)
		if (!this.searchMovie.invalid) {
			this.moviefyService.getMovies({ movie: this.searchMovie.value })
				.subscribe(data => this.moviefyService.currentMovie.next(data))
		}
	}
}
