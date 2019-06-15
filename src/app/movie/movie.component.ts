import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: object;

  constructor() { }

  ngOnInit() {
  }

}
