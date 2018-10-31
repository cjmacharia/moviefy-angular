import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviefyService } from '../../moviefy.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { error } from 'util';

@Component({
	selector: 'app-tracks',
	templateUrl: './tracks.component.html',
	styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
	tracks: any;
	id: any;
	banner: any;
	rating: any;
	title: any;
	trailer: any;
	constructor(private route: ActivatedRoute, private service: MoviefyService, public sanitizer: DomSanitizer) {
		this.tracks = []
	}

	ngOnInit() {
		this.id = this.route.snapshot.params.id;
		this.getTracks()
	}

	safeVideoURL(trailer) {
		console.log(trailer)
		return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.youtube.com/embed/${trailer}`)
	}

	safeURL(trackId): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`//open.spotify.com/embed/track/${trackId}`);
	}

	safeImage(image): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`www.api.what-song.com${image}`);
	}

	getTracks() {
		this.service.getTracks(this.id).subscribe(data => {
			this.tracks = data;
			this.banner = this.tracks.data[0].poster;
			this.rating = this.tracks.data[0].imdbratings;
			this.title = this.tracks.data[0].title;
			this.trailer = this.tracks.data[0].trailer;


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
