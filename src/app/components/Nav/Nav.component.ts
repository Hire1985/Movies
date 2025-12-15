import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from "@angular/router";
import { MoviesService } from '../../service/movies.service';
import { Movies } from '../../interfaces/movies.interface';
import SearchMoviesComponent from "../search-movies/search-movies.component";

@Component({
  selector: 'app-nav',
  imports: [RouterOutlet, RouterLink, SearchMoviesComponent],
  templateUrl: './Nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavComponent {
  moviesService = inject(MoviesService)
  movies = signal<Movies[]>([])

  onSearch(query: string) {
    this.moviesService.searchMovies(query).subscribe((resp) => {
      this.movies.set(resp);
    })
  }
}
