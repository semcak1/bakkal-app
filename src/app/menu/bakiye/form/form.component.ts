import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BudgetData } from 'src/app/data.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() data: BudgetData=new BudgetData();

  @Output() formSubmit : EventEmitter<BudgetData>=new EventEmitter<BudgetData>();

  constructor() { }

  ngOnInit() {
  }

  costs:string[]=["toptancı","sigara","ciro"]

  onSubmit(form:NgForm){
    
    this.formSubmit.emit(form.value);
    console.log(form.value)
    form.reset();
  }
}
