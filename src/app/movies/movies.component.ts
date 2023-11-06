import { Component } from '@angular/core';

interface Movie {
  imageUrl: string;
  title: string;
  genre: string;
  actor: string;
  director: string;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent {
  movies: Movie[] = [
    {
      imageUrl: 'assets/movie1.jpg',
      title: 'Movie 1',
      genre: 'Horror',
      actor: 'Salman',
      director: 'Director A'
    },
    {
      imageUrl: 'assets/movie1.jpg',
      title: 'Movie 2',
      genre: 'Action',
      actor: 'Actor B',
      director: 'Director B'
    },
    {
      imageUrl: 'assets/movie2.jpg',
      title: 'Movie 3',
      genre: 'Drama',
      actor: 'Actor C',
      director: 'Director C'
    },
    {
      imageUrl: 'assets/movie2.jpg',
      title: 'Movie 4',
      genre: 'Comedy',
      actor: 'Actor D',
      director: 'Director D'
    },
    {
      imageUrl: 'assets/movie2.jpg',
      title: 'Movie 4',
      genre: 'Comedy',
      actor: 'Actor D',
      director: 'Director D'
    },
    {
      imageUrl: 'assets/movie2.jpg',
      title: 'Movie 4',
      genre: 'Comedy',
      actor: 'Actor D',
      director: 'Director D'
    }
  ];
}
