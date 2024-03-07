import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page/home-page.component';
import { MoviesListComponent } from './features/movies-list/component/movies-list.component';
import { WatchingMovieComponent } from './features/watching-movie/component/watching-movie.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'type/:name',component:MoviesListComponent},
  {path:'type/:name/:id',component:WatchingMovieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
