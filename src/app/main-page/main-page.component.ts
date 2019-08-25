import { Component, OnInit } from '@angular/core';
import { MovieList } from '../shared/films.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  public searchString = ''

  constructor(private movieList: MovieList, private router: Router) {}

  ngOnInit() {
    this.movieList.getFilms()
  }

  changeMovie(id: number) {
    this.movieList.relateMovie(id).then(() => {
      this.router.navigateByUrl(`film/${id}`)
    })
  }
}
