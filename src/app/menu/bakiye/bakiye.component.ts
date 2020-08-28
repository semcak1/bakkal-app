import { Component, OnInit } from '@angular/core';
import { BudgetData } from 'src/app/data.model';

@Component({
  selector: 'app-bakiye',
  templateUrl: './bakiye.component.html',
  styleUrls: ['./bakiye.component.scss']
})
export class BakiyeComponent implements OnInit {

  budgetDatas: BudgetData[]=new Array<BudgetData>();

  constructor() { }

  ngOnInit() {
  }

  addItem(item:BudgetData){
    this.budgetDatas.push(item);
    
  }
}
