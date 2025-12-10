import { Result } from "../interfaces/movies-list.interfaces";
import { Movies } from "../interfaces/movies.interface";


export class MoviesMapper {
  static mapMoviesListToMovies(item : Result): Movies {
    return {
      id: item.id,
      adult: item.adult,
      title: item.title,
      overview: item.overview,
      poster_path: item.poster_path,
    };
  }

  static mapMoviesResponseToMoviesList(items: Result[]): Movies[] {
    return items.map(MoviesMapper.mapMoviesListToMovies);
  }
}
