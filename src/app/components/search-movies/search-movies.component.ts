import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import FavoritesMoviesComponent from "../favorites-movies/favorites-movies.component";
import { SearchComponent } from "../search/search.component";
import { Movies } from '../../interfaces/movies.interface';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-search-movies',
  imports: [],
  templateUrl: './search-movies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchMoviesComponent {
  moviesService = inject(MoviesService);
  searchMovies = input.required<Movies[]>()
    imageBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
 }
