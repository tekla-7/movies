import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesListService } from '../../../core/service/movies-list.service';
import { MoviesDescription } from '../../../core/interfaces/movies-description';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnDestroy , OnInit {
  movieslist: MoviesDescription[] = [];
  private _destorySubj$ = new Subject();
  error: string = '';
  constructor(private movieslistService: MoviesListService) {
    this.movieslistService.get().subscribe(
      (elements) => {
         this.movieslist = elements;
         takeUntil(this._destorySubj$);
      },
      (error) => {
        this.error = error.message;
      }
    );
   
  }

ngOnInit(): void {}
prevtslide(i:number){
  if(i==1){
    let obj: MoviesDescription= this.movieslist[this.movieslist.length - 1];
      this.movieslist.splice(this.movieslist.length - 1, 1);
      this.movieslist.splice(0, 0, obj);
    
  }
}
nextslider(i:number){
  if(i==1){
let obj: MoviesDescription = this.movieslist[0];
    this.movieslist.splice(0, 1);
    this.movieslist.push(obj);
  }
}

ngOnDestroy(): void {
    this._destorySubj$.next(true);
    this._destorySubj$.complete();
    this._destorySubj$.unsubscribe();
  }
}
