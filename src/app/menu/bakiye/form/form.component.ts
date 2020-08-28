import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BudgetData } from 'src/app/data.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { AddOptionComponent } from '../add-option/add-option.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() data: BudgetData=new BudgetData();

  @Output() formSubmit : EventEmitter<BudgetData>=new EventEmitter<BudgetData>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  costs:string[]=["toptancı","sigara","ciro"]

  onSubmit(form:NgForm){
    
    this.formSubmit.emit(form.value);
    console.log(form.value)
    form.reset();
  }

 
   
  

  


}
