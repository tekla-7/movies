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
          let obj: MoviesDescription = {
            id:0,
            title:'',
            imdb:0,
            genre:[],
            description:'',
            video:'',
            rejissor:'',
            year:0,
            duration:0,
            country:'',
            studio:''};
          obj.id=element.id;
          obj.title=element.title;
          obj.imdb=element.imdb;
          obj.genre=[...element.genre];
          obj.description=element.description;
          obj.img=element.img;
          obj.video=element.video;
          obj.rejissor=element.rejissor
          obj.year=element.year
          obj.duration=element.duration
          obj.country=element.country
          obj.studio=element.studio
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
          obj.video=element.video;
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
          obj.video=element.video;
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
  get(name:string , id:string){
    return this.http.get<any>('http://localhost:3000/'+name+'/'+id).pipe(
      map((element) => {
        let arr: MoviesDescription[] = [];
          let obj:MoviesDescription = {
            id:0,
            title:'',
            imdb:0,
            genre:[],
            description:'',
            video:'',
            rejissor:'',
            year:0,
            duration:0,
            country:'',
            studio:''};
            obj.id=element.id;
            obj.title=element.title;
            obj.imdb=element.imdb;
            obj.genre=[...element.genre];
            obj.description=element.description;
            obj.img=element.img;
            obj.video=element.video;
            obj.rejissor=element.rejissor
            obj.year=element.year
            obj.duration=element.duration
            obj.country=element.country
            obj.studio=element.studio
            arr.push(obj)
        return arr;
      })
    );
  }
}
