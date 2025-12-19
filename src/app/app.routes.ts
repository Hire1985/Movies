import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'nav',
    loadComponent: () => import('./components/Nav/Nav.component'),
    children: [
      {
        path: 'search',
        loadComponent: () => import('./components/search-movies/search-movies.component'),
      }
    ],
  },
  {
    path: 'movies',
    loadComponent: () => import('./pages/movies/movies'),
  },
  {
    path: '**',
    redirectTo: 'movies',
  },
];
