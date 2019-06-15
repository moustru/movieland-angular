import { Component, OnInit } from '@angular/core';
import { MovieList } from './shared/films.service';
import { DomSanitizer } from '@angular/platform-browser';

export interface Bar {
  title: string,
  poster_path: string,
  vote_average: number,
  popularity: number,
  release_date: string,
  overview: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private movieList: MovieList) {}
  
  relatedMovie: object = {}
  elements = {
    bar: false,
    overlay: false
  }

  ngOnInit() {
    this.movieList.getFilms()
  }

  showInfo(id: number) {
    this.relatedMovie = this.movieList.showInfo(id);
    this.elements.bar = !this.elements.bar;
    this.elements.overlay = !this.elements.overlay;
    //this.movieList.getVideo(id.toString());
  }

  hideInfo() {
    this.relatedMovie = {};
    this.elements.bar = !this.elements.bar;
    this.elements.overlay = !this.elements.overlay;    
  }
}
