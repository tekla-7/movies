import { Component } from '@angular/core';
import { MoviesDescription } from '../../../core/interfaces/movies-description';
import { MoviesListService } from '../../../core/service/movies-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ActorsActresses } from '../../../core/interfaces/actors-actresses';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  movielist:MoviesDescription[]=[];
  person:ActorsActresses[]=[]
constructor(private MoviesListService:MoviesListService, private activatedRoute:ActivatedRoute){
  this.activatedRoute.params.subscribe(
    (params:Params)=>{
      this.MoviesListService.getactorID(params['id']).subscribe(element=>{
        this.person=element ;
        this.getlist('movies' , this.person[0].movies)
        this.getlist('series' , this.person[0].series)
        this.getlist('animation' , this.person[0].animation)
      })
     
  })
}
getlist(name:string ,list:any){
  for(let i of list){
    this.MoviesListService.get(name , i).subscribe(element=>{
      this.movielist.push(...element);
    })
  }
}
}
