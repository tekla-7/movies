import { Component } from '@angular/core';
import { MoviesListService } from '../../../core/service/movies-list.service';
import { Subject, takeUntil } from 'rxjs';
import { Series } from '../../../core/interfaces/series';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {
  private _destorySubj$ = new Subject();
  error: string = '';
  mylist :number[]=[];
  serieslist:Series[]=[];
  isActive2:boolean=false;
constructor(private movieslistService:MoviesListService){
  this.movieslistService.getanimation().subscribe(
    (elements) => {
      this.serieslist = elements;
      console.log(this.serieslist)
      takeUntil(this._destorySubj$);
   },
   (error) => {
     this.error = error.message;
   }
  )
}
call(id:number){
if(id==2){
  this.isActive2=!this.isActive2
}
}
}
