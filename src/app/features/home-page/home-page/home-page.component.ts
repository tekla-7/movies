import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MoviesListService } from '../../../core/service/movies-list.service';
import { MoviesDescription } from '../../../core/interfaces/movies-description';
import { Subject, takeUntil } from 'rxjs';
import { Series } from '../../../core/interfaces/series';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination , Virtual} from 'swiper';
import { ActorsActresses } from '../../../core/interfaces/actors-actresses';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Virtual]);
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class HomePageComponent implements OnDestroy , OnInit {
  movieslist: MoviesDescription[] = [];
  private _destorySubj$ = new Subject();
  error: string = '';
  mylist :number[]=[];
  serieslist:Series[]=[];
  animationlist:Series[]=[];
  aActorsActressesList:ActorsActresses[]=[]

  constructor(private movieslistService: MoviesListService) {
    this.movieslistService.getmovies().subscribe(
      (elements) => {
         this.movieslist = elements;
         takeUntil(this._destorySubj$);
      },
      (error) => {
        this.error = error.message;
      }
    );
    this.movieslistService.getseries().subscribe(
      (elements) => {
        this.serieslist = elements;
        takeUntil(this._destorySubj$);
     },
     (error) => {
       this.error = error.message;
     }
    )
    this.movieslistService.getanimation().subscribe(
      (elements) => {
        this.animationlist = elements;
        takeUntil(this._destorySubj$);
     },
     (error) => {
       this.error = error.message;
     }
    )
    this.movieslistService.getactor().subscribe(
      (elements) => {
        this.aActorsActressesList = elements;
        takeUntil(this._destorySubj$);
     },
     (error) => {
       this.error = error.message;
     }
    )
    
  }

ngOnInit(): void {}

prevtslide(i:number){
  if(i==1){
    let obj: MoviesDescription= this.movieslist[this.movieslist.length - 1];
      this.movieslist.splice(this.movieslist.length - 1, 1);
      this.movieslist.splice(0, 0, obj);
    
  }else if(i==2){
    let obj: Series= this.serieslist[this.serieslist.length - 1];
      this.serieslist.splice(this.serieslist.length - 1, 1);
      this.serieslist.splice(0, 0, obj);
    
  }else if(i==3){
    let obj: Series= this.animationlist[this.animationlist.length - 1];
      this.animationlist.splice(this.animationlist.length - 1, 1);
      this.animationlist.splice(0, 0, obj);
    
  }else if(i==4){
    let obj: ActorsActresses= this.aActorsActressesList[this.aActorsActressesList.length - 1];
      this.aActorsActressesList.splice(this.aActorsActressesList.length - 1, 1);
      this.aActorsActressesList.splice(0, 0, obj);
    
  }
}
nextslider(i:number){
  if(i==1){
let obj: MoviesDescription = this.movieslist[0];
    this.movieslist.splice(0, 1);
    this.movieslist.push(obj);
  }else if(i==2){
    let obj: Series = this.serieslist[0];
        this.serieslist.splice(0, 1);
        this.serieslist.push(obj);
      }else if(i==3){
        let obj: Series = this.animationlist[0];
            this.animationlist.splice(0, 1);
            this.animationlist.push(obj);
          }else if(i==4){
            let obj: ActorsActresses = this.aActorsActressesList[0];
                this.aActorsActressesList.splice(0, 1);
                this.aActorsActressesList.push(obj);
              }
}

ngOnDestroy(): void {
    this._destorySubj$.next(true);
    this._destorySubj$.complete();
    this._destorySubj$.unsubscribe();
  }
}
