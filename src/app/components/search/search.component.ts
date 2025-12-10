import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { Movies } from '../../interfaces/movies.interface';
import FavoritesMoviesComponent from "../favorites-movies/favorites-movies.component";
import SearchMoviesComponent from "../search-movies/search-movies.component";

@Component({
  selector: 'app-search',
  imports: [SearchMoviesComponent],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  moviesService = inject(MoviesService)
  movies = signal<Movies[]>([])

  onSearch(query:string) {
   this.moviesService.searchMovies(query).subscribe((resp)=> {
    this.movies.set(resp);
   })

  }

 }
