import { Component, OnInit, Input } from '@angular/core';
import { BudgetData } from 'src/app/data.model';
import { BakiyeComponent } from '../../bakiye.component';


@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() isGelir:boolean;
  @Input() item:BudgetData=new BudgetData();

  bakiye:BakiyeComponent=new BakiyeComponent();
  
  constructor() { }

  ngOnInit() {
  }

  
  
}
