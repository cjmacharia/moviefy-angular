import { TestBed } from '@angular/core/testing';
import { MoviefyService } from './moviefy.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe ('userService', () => {
let movieService: MoviefyService
beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [MoviefyService],
    imports: [HttpClientModule]
  });
  movieService = TestBed.get(MoviefyService)
});

it ('should be created', () => {
  expect(movieService).toBeTruthy();
})
it ('should get all the tracks', () => {
  const trackdata = [{id: 245620, banner: "/images/movies/banners/102814/Spies-in-Disguise.jpg",
 poster: "https://m.media-amazon.com/images/M/MV5BMjA1MDQ4NTg1OF5BMl5BanBnXkFtZTgwODU3NDY2NjM@._V1_SX300.jpg", 
 title: "Spies in Disguise", 
 album: "Here Comes the Fuzz"
  }]

  spyOn(movieService, 'getTracks').and.returnValue(of(trackdata))
  movieService.getTracks(4).subscribe(res => {
    expect(res).toEqual(trackdata);
  })
})

it('Should browse the latest movies', () => {
  const movies = [{
    id: 4, intro: "this is the movie",  composer: 'theo'},
    {
      id: 6, intro: "watch this movie",  composer: 'cjmash'}]
  spyOn(movieService, 'BrowseTracks').and.returnValue(of(movies));
  movieService.BrowseTracks().subscribe(response => {
    expect(response).toEqual(movies)
  })
})
it('should return favorite movies', () => {
  const favorites = [{
    movies: 'the 100'
  }]

  spyOn(movieService, 'favorites').and.returnValue(of(favorites))
  movieService.favorites().subscribe(res => {
    expect(res).toEqual(favorites)
  })
})
})
