import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
	providedIn: 'root'
})
export class MoviefyService {
	currentMovie = new BehaviorSubject<any>({
		title: "--",
		year: "--",
		slug: "--"
	})

	constructor(private httpClient: HttpClient) { }
	getMovies(movie) {

		return this.httpClient.post(`${API_URL}/movie`, movie);
		// return this.httpClient.post<Imovies>('http://www.api.what-song.com/search/?type=movie&field=', movie)
	}

	BrowseTracks() {
		return this.httpClient.get(`${API_URL}/browse/`);
	}

	getTracks(id) {
		return this.httpClient.get(`${API_URL}/movie/${id}`);

	}
	getspotify(id) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': 'Bearer BQD1G-TlJVO5_D7saAyDvYJJoiPjMYe7KqGfRSdmZGigw_tOwNgdUDd8xJroYwOoIdAajiTRDxiRxnoI_XU3-gtEcfd_O7Oivf0PR5ZMupA5iWpkxqHyzOsgxQ7nzZWuiyyXIXBRW6NBJ6z_B2idSemJWhgal5QcwZyo4QWen1IJWdgnAHzLn-WY_I8kpxQU9lV540qyjuoxtcESupdn9LHVtun6h2DfWZx7xnrhlli8KxWpWif4aTys6Cq0jezpWorqZxydmm08Ut6HUBz5OLSge4Ob0ywBIhbGDdM'
			})
		};
		return this.httpClient.get(`https://api.spotify.com/v1/tracks/${id}`, httpOptions);
	}

	registerUser(user) {
		return this.httpClient.post(`${API_URL}/signup`, user);
	}

	loginUser(user) {
		return this.httpClient.post(`${API_URL}/login`, user);
	}

	favoriteTracks(id) {
		const token = {
			headers: new HttpHeaders({
				'token': localStorage.getItem('token')
			})
		};
		console.log(token)
		return this.httpClient.get(`${API_URL}/favorite/${id}`, token);
	}

	favorites() {
		return this.httpClient.get(`${API_URL}/favorites`);
	}
}