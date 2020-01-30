import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {
  movies: any[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.GetData().subscribe(result => {
      this.movies = result.results;
    }, err => { }, () => { console.log(JSON.stringify(this.movies)) })
    //console.log(JSON.stringify(this.movies))

  }

}
