import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SerieListComponent } from './series/serie-list/serie-list.component.spec';
import { SeriesModule } from './series/series.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    SeriesModule,
    CommonModule,
    
  ],
  providers: []
  ,
  bootstrap: []
})
export class AppModule { }
