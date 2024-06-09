import { NgModule } from '@angular/core';

import { SerieListComponent } from './serie-list/serie-list.component.spec';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[SerieListComponent],
  declarations: [SerieListComponent]
})
export class SeriesModule { }
