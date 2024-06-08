import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series:Array<Serie>=[];

  constructor(private serieService:SeriesService) { }

  getSeries():void{
    this.serieService.getSeries().subscribe((series)=>{this.series=series;});
  }

  ngOnInit() {
  }

}
