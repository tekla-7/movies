import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationBarComponent } from './features/top-navigation-bar/component/top-navigation-bar.component';
import { HomePageComponent } from './features/home-page/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './core/component/footer/footer.component';
import { MoviesListComponent } from './features/movies-list/component/movies-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    HomePageComponent,
    FooterComponent,
   MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule,
    SlickCarouselModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
