import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeForm: any;
  listOfCars: any;
  searchTerm;

  constructor(private dataService: DataService  ) {
   }

  ngOnInit() {
    this.dataService.getData().subscribe(data=>
      {
        this.listOfCars = data['model'];
      }
    );
  }

  

}
