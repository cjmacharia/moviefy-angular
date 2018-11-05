import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviefyService } from '../../moviefy.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { error } from 'util';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-tracks',
	templateUrl: './tracks.component.html',
	styleUrls: ['./tracks.component.css', '../browse/browse.component.css', '../../header/header.component.css']
})
export class TracksComponent implements OnInit {
	tracks: any;
	id: any;
	banner: any;
	rating: any;
	title: any;
	actors: any;
	plot: any;
	poster: any;
	trailer: any;
	constructor(private route: ActivatedRoute, private service: MoviefyService, public sanitizer: DomSanitizer, private spinner: NgxSpinnerService) {
		this.tracks = []
	}

	ngOnInit() {
		this.id = this.route.snapshot.params.id;
		this.getTracks()
	}

	safeVideoURL(trailer) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.youtube.com/embed/${trailer}`)
	}

	safeURL(trackId): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`//open.spotify.com/embed/track/${trackId}`);
	}

	safeImage(image): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`www.api.what-song.com${image}`);
	}

	getTracks() {
    this.spinner.show();
		this.service.getTracks(this.id).subscribe(data => {
			this.tracks = data;
      this.spinner.hide();
			this.poster = this.tracks.data[0].poster;
			this.rating = this.tracks.data[0].imdbratings;
			this.title = this.tracks.data[0].title;
			this.trailer = this.tracks.data[0].trailer;
			this.banner = this.tracks.data[0].banner;
			this.actors = this.tracks.data[0].actors;
			this.plot = this.tracks.data[0].plot;
		})
	}
	favorite(id) {
		console.log(id)
		this.service.favoriteTracks(id).subscribe(
			data => {
				console.log(data)
			}, error => {
				console.log(error)
			})
	}
	// connectSpotify()

}
