import { Component, OnInit, Input } from '@angular/core';
import { BudgetData } from 'src/app/data.model';
import { AllData } from 'src/app/AllData.module';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems : BudgetData[];

  items:BudgetData[]=this.budgetItems

  
  constructor() { }

  ngOnInit() {
  }

 
  

}
