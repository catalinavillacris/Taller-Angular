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
  promedio:number=0;

  constructor(private serieService:SeriesService) { }

  getSeries():void{
    this.serieService.getSeries().subscribe((series)=>{this.series=series;this.calcularPromedio();});
  }

  calcularPromedio():void{
    if(this.series.length>0){
      const allSeasons=this.series.reduce((sum,serie)=>sum + serie.seasons,0);
      this.promedio=allSeasons/this.series.length;
    }
  }

  ngOnInit() {
    this.getSeries()
  }

}
