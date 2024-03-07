import { Component, OnDestroy, OnInit, inject, ɵɵvalidateIframeAttribute } from '@angular/core';
import { MoviesListService } from '../../../core/service/movies-list.service';
import { Subject, takeUntil } from 'rxjs';
import { MoviesDescription } from '../../../core/interfaces/movies-description';
import { DomSanitizer } from '@angular/platform-browser';
import { ActorsActresses } from '../../../core/interfaces/actors-actresses';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-watching-movie',
  templateUrl: './watching-movie.component.html',
  styleUrl: './watching-movie.component.scss'
})
export class WatchingMovieComponent implements OnDestroy, OnInit{
  private _destorySubj$ = new Subject();
  private sanitizer=inject(DomSanitizer)
  error: string = '';
  link:any='';
  movieslist:MoviesDescription[]=[];
  moviename:MoviesDescription[]=[];
  actorlist:ActorsActresses[]=[];
  ismovie:boolean=false;
  // type:{id:string , name:string}={id:'', name:''}
  constructor(private movieslistService:MoviesListService ,  private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(
      (params:Params)=>{
        if(params['name']=='movies'){this.ismovie=true}
      this.movieslistService.get(params['name'],params['id']).subscribe(
        (elements) => {
          
           this.moviename = elements;
           this.link=this.sanitizer.bypassSecurityTrustResourceUrl(
            this.moviename[0].video
           )
           takeUntil(this._destorySubj$);
        },
        (error) => {
          this.error = error.message;
        })
    })
    this.movieslistService.getmovies().subscribe(
    (elements) => {
       this.movieslist = elements;
       takeUntil(this._destorySubj$);
    },
    (error) => {
      this.error = error.message;
    })
    this.movieslistService.getactor().subscribe(
      (elements) => {
         this.actorlist = elements;
         takeUntil(this._destorySubj$);
      },
      (error) => {
        this.error = error.message;
      })
   
  }
 
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this._destorySubj$.next(true);
    this._destorySubj$.complete();
    this._destorySubj$.unsubscribe();
  }
}
