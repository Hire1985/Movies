import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import  FavoritesMoviesComponent  from "../../components/favorites-movies/favorites-movies.component";
import { NextReleasesComponent } from "../../components/next-releases/next-releases.component";
import { MoviesService } from '../../service/movies.service';
import NavComponent from "../../components/Nav/Nav.component";



@Component({
  selector: 'app-movies',
  imports: [FavoritesMoviesComponent, NextReleasesComponent, NavComponent],
  templateUrl: './movies.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Movies {

  moviesService = inject(MoviesService);

}
