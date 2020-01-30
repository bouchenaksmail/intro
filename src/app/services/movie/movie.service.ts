import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private $http: HttpClient) {

    }

    GetData(): Observable<any> {
        //let headers = new HttpHeaders();
        //headers = headers.append('x-rapidapi-host', 'box-office-buz1.p.rapidapi.com');
        //headers = headers.append('x-rapidapi-key', 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWU2YmMxMTI5YThhN2VlNmQ5MzAzMTQ3OGM2NTM2NCIsInN1YiI6IjVlMzMxYThkYzU2ZDJkMDAxODUyZDljOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nxcE_HgsoCk-PG_KDBVbuGBMVvv-10Hkm8xx2NnlV9Q');
        //api_key=f9e6bc1129a8a7ee6d93031478c65364
        // images https://image.tmdb.org/t/p/w500/

        //https://api.themoviedb.org/3/collection/10 jedi
        //https://api.themoviedb.org/3/trending/all/day?
        return this.$http.get<any>('https://api.themoviedb.org/3/trending/all/day?api_key=f9e6bc1129a8a7ee6d93031478c65364');
    }
}