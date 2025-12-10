import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Movies } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-favorites-movies',
  imports: [],
  templateUrl: './favorites-movies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FavoritesMoviesComponent {

  moviesPoster = input.required<Movies[]>();
  imageBaseUrl: string = 'https://image.tmdb.org/t/p/w500';


}
