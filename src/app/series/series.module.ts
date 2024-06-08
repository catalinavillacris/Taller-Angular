import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './serie-list/serie-list.component.spec';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[SerieListComponent],
  declarations: [SerieListComponent]
})
export class SeriesModule { }
