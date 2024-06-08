import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';

@Component({
  selector: 'app-conference-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
 })
 export class SerieListComponent implements OnInit {
 
  series: Array<Serie> = [];
   constructor() { }
 
  ngOnInit() {
  }
 }
