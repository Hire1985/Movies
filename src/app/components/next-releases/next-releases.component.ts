import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Movies } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-next-releases',
  imports: [],
  templateUrl: './next-releases.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NextReleasesComponent {

  constructor() {
    this.moviesReleases
  }

moviesReleases = input.required<Movies[]>()
imageBaseUrl: string = 'https://image.tmdb.org/t/p/w500';

 }
