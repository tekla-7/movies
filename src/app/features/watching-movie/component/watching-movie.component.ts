import { Component, OnDestroy, inject, ɵɵvalidateIframeAttribute } from '@angular/core';
import { MoviesListService } from '../../../core/service/movies-list.service';
import { Subject, takeUntil } from 'rxjs';
import { MoviesDescription } from '../../../core/interfaces/movies-description';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-watching-movie',
  templateUrl: './watching-movie.component.html',
  styleUrl: './watching-movie.component.scss'
})
export class WatchingMovieComponent implements OnDestroy{
  private _destorySubj$ = new Subject();
  private sanitizer=inject(DomSanitizer)
  error: string = '';
  a:any=''
  movieslist:MoviesDescription[]=[]
  constructor(private movieslistService:MoviesListService){
    this.movieslistService.getmovies().subscribe(
    (elements) => {
       this.movieslist = elements;
       takeUntil(this._destorySubj$);
    },
    (error) => {
      this.error = error.message;
    })
    this.a=this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/r5X-hFf6Bwo?si=dqrN0tO2bvw4jYph'
     )
  }
 
  
  ngOnDestroy(): void {
    this._destorySubj$.next(true);
    this._destorySubj$.complete();
    this._destorySubj$.unsubscribe();
  }
}
