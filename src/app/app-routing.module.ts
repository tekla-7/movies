import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page/home-page.component';
import { MoviesListComponent } from './features/movies-list/component/movies-list.component';
import { WatchingMovieComponent } from './features/watching-movie/component/watching-movie.component';
import { CreateAccountComponent } from './features/create-account/component/create-account.component';
import { PersonComponent } from './features/person/component/person.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'type/:name',component:MoviesListComponent},
  {path:'type/:name/:id',component:WatchingMovieComponent},
  {path:'sign',component:CreateAccountComponent},
  {path:'person/:id',component:PersonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
