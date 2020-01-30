import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie/movie.service';
import { error } from 'protractor';




@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

  obs1: Observable<number>;


  constructor(private $ser: MovieService) {

  }

  click() {
    this.$ser.GetData().subscribe(
      s => alert('OK'),
      err => {
        alert('error');
        console.log(err);
      }
    );
  }

  clock() {
    var date = new Date();
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var clockDivs = [document.getElementById("hr"), document.getElementById("mn"), document.getElementById("sec")];

    var houre = time[1] / 2 + time[0] * 30;

    clockDivs[0].style.transform = "rotate(" + houre + "deg)";
    clockDivs[1].style.transform = "rotate(" + time[1] * 6 + "deg)";
    clockDivs[2].style.transform = "rotate(" + time[2] * 6 + "deg)";
  }


  ngOnInit() {
    this.clock();
    this.obs1 = interval(1000);
    this.obs1.subscribe(
      s => {
        this.clock()
      }
    );

  }
}


