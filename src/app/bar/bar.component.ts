import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() private bar: object;

  constructor() { }

  ngOnInit() {
  }

}
