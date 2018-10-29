import { Component, OnInit } from '@angular/core';
import { MoviefyService } from '../../moviefy.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
	favorites: any;
	constructor(private service: MoviefyService, public sanitizer: DomSanitizer) {
		this.favorites = [];
	}
	ngOnInit() {
		this.getFavorites()
	}

	safeImage(image): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`//open.spotify.com/embed/track/${image}`);
	}

	safeURL(trackId): SafeResourceUrl {
		return this.sanitizer.bypassSecurityTrustResourceUrl(`//open.spotify.com/embed/track/${trackId}`);
	}
	getFavorites() {
		this.service.favorites().subscribe(data => {
			this.favorites = data
			console.log(this.favorites.data)
		})
	}
}
