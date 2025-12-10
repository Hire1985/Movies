import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { MoviesResponses } from '../interfaces/movies-list.interfaces';
import { Movies } from '../interfaces/movies.interface';
import { MoviesMapper } from '../mapper/movies.mapper';
import { ResultMovies, Search } from '../interfaces/search.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private http = inject(HttpClient);

  movies = signal<Movies[]>([]);
  moviesLoading = signal<boolean>(true);

  constructor() {
    this.loadMovies();
  }

  loadMovies() {
    this.http.get<MoviesResponses>(`${environment.moviesUrl}/movie/now_playing`, {
      params: {
        api_key: environment.apiKey,
      },
    }).subscribe((resp) => {

       const movies = MoviesMapper.mapMoviesResponseToMoviesList(resp.results);
       this.movies.set(movies);
       this.moviesLoading.set(false);
       console.log({movies});

    });
  }

  searchMovies(query: string) {
    return this.http.get<MoviesResponses>(`${environment.moviesUrl}/search/movie`, {
      params: {
        api_key: environment.apiKey,
        query: query,
      },
    }).pipe(
      map( ({results}) =>  results),
      map((items) => MoviesMapper.mapMoviesResponseToMoviesList(items)),
    );
    // }).subscribe((resp) => {
    //   const search = MoviesMapper.mapMoviesResponseToMoviesList(resp.results);
    //     console.log({search});

    // })
  }
}
