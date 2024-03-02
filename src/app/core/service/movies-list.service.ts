import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MoviesDescription } from '../interfaces/movies-description';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {
  constructor(private http: HttpClient) {}
  getmovies() {
    return this.http.get<any>('http://localhost:3000/movies').pipe(
      map((elements) => {
        let arr: MoviesDescription[] = [];
        for (let element of elements) {
          let obj: MoviesDescription = {};
          obj.id=element.id;
          obj.title=element.title;
          obj.imdb=element.imdb;
          obj.genre=[...element.genre];
          obj.description=element.description;
          obj.img=element.img;
          arr.push(obj)
        }
        
        return arr;
      })
    );
  }

}
