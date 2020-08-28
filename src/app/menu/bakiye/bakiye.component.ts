import { Component, OnInit } from '@angular/core';
import { BudgetData } from 'src/app/data.model';
import { AddOptionComponent } from './add-option/add-option.component';
import { MatDialog } from '@angular/material';
import { AllData } from 'src/app/AllData.module';

@Component({
  selector: 'app-bakiye',
  templateUrl: './bakiye.component.html',
  styleUrls: ['./bakiye.component.scss']
})
export class BakiyeComponent implements OnInit {

 budgetItems: BudgetData[]=new Array<BudgetData>();

  constructor() { }

  ngOnInit() {
  }


  addItem(item:BudgetData){
    console.log(item)
    this.budgetItems.push(item);
    
  }

 
 
    
   

}
