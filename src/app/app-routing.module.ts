import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page/home-page.component';
import { MoviesListComponent } from './features/movies-list/component/movies-list.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'type/:name',component:MoviesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
