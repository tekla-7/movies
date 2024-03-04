import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MoviesDescription } from '../interfaces/movies-description';
import { Series } from '../interfaces/series';
import { ActorsActresses } from '../interfaces/actors-actresses';

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
  
  getseries() {
    return this.http.get<any>('http://localhost:3000/series').pipe(
      map((elements) => {
        let arr: Series[] = [];
        for (let element of elements) {
          let obj:Series = {};
          obj.id=element.id;
          obj.title=element.title;
          obj.imdb=element.imdb;
          obj.genre=[...element.genre];
          obj.description=element.description;
          obj.img=element.img;
          obj.season=element.season;
          arr.push(obj)
        }
        
        return arr;
      })
    );
  }
  getanimation() {
    return this.http.get<any>('http://localhost:3000/animation').pipe(
      map((elements) => {
        let arr: Series[] = [];
        for (let element of elements) {
          let obj:Series = {};
          obj.id=element.id;
          obj.title=element.title;
          obj.imdb=element.imdb;
          obj.genre=[...element.genre];
          obj.description=element.description;
          obj.img=element.img;
          obj.season=element.season;
          arr.push(obj)
        }
        
        return arr;
      })
    );
  }
  getactor() {
    return this.http.get<any>('http://localhost:3000/actors-actresses').pipe(
      map((elements) => {
        let arr: ActorsActresses[] = [];
        for (let element of elements) {
          let obj:ActorsActresses = {};
          obj.id=element.id;
          obj.name=element.name;
          obj.img=element.img;
          arr.push(obj)
        }
        
        return arr;
      })
    );
  }
}
