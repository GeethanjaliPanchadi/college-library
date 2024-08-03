import { Component } from '@angular/core';
import { FoodService } from '../Services/food.service';
import { Food } from '../Models/food';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  food:Food[]=[];
  constructor(private service:FoodService){}
  ngOnInit():void{
    this.service.onsubmit().subscribe(data => this.food=data);
  }
}
