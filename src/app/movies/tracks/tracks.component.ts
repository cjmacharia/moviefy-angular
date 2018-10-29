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
	constructor(private route: ActivatedRoute, private service: MoviefyService, public sanitizer: DomSanitizer) {
		this.tracks = []
	}

	ngOnInit() {
		this.id = this.route.snapshot.params.id;
		this.getTracks()
	}

	safeURL(trackId): SafeResourceUrl {
		const mash = this.sanitizer.bypassSecurityTrustResourceUrl(`//open.spotify.com/embed/track/${trackId}`);
		console.log(mash)
		return this.sanitizer.bypassSecurityTrustResourceUrl(`//open.spotify.com/embed/track/${trackId}`);
	}

	safeImage(image): SafeResourceUrl {
		const cj = this.sanitizer.bypassSecurityTrustResourceUrl(`www.api.what-song.com${image}`);
		console.log(cj, 'LLLLLL')
		return this.sanitizer.bypassSecurityTrustResourceUrl(`www.api.what-song.com${image}`);
	}

	getTracks() {
		this.service.getTracks(this.id).subscribe(data => {
			this.tracks = data;
			console.log(this.tracks.data)
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
