import { Component } from '@angular/core';
import { MoviesListService } from '../../../core/service/movies-list.service';
import { Subject, takeUntil } from 'rxjs';
import { Series } from '../../../core/interfaces/series';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {
  private _destorySubj$ = new Subject();
  error: string = '';
  serieslist:Series[]=[];
  isActive2:boolean=false;
 activpagename:string='';
constructor(private movieslistService:MoviesListService , private activatedRoute:ActivatedRoute){
  this.activatedRoute.params.subscribe(
    (params:Params)=>{
     if(params['name']=='movies'){
      this.movieslistService.getmovies().subscribe(
        (elements) => {
          this.serieslist = elements;
          takeUntil(this._destorySubj$);
       },
       (error) => {
         this.error = error.message;
       }
      )
     }else if(params['name']=='series'){
      this.movieslistService.getseries().subscribe(
        (elements) => {
          this.serieslist = elements;
          takeUntil(this._destorySubj$);
       },
       (error) => {
         this.error = error.message;
       }
      )
     }else if(params['name']=='animation'){
      this.movieslistService.getanimation().subscribe(
        (elements) => {
          this.serieslist = elements;
          takeUntil(this._destorySubj$);
       },
       (error) => {
         this.error = error.message;
       }
      )
     }
      takeUntil(this._destorySubj$);},
      (error) => {
        this.error = error.message;
      })
 
}
call(id:number){
if(id==2){
  this.isActive2=!this.isActive2
}
}
}
