export interface Movies {
  id: number;
  title: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  date: Date;
  vote_average?: number;
}
