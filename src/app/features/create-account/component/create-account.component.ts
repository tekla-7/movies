import { Component } from '@angular/core';
import { MoviesListComponent } from '../../movies-list/component/movies-list.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  registration:boolean=false;
constructor( private activatedRoute:ActivatedRoute ){
  this.activatedRoute.params.subscribe(
    (params:Params)=>{
     if(params['registration']=="sign/-up"){
      this.registration=true;
     }else{
      this.registration=false;
     }
    })
}
show(){
this.registration=!this.registration
}
}
