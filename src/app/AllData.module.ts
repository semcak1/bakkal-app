import { BudgetData } from './data.model';

export class AllData{
    datas:BudgetData[]= new Array<BudgetData>( new BudgetData(100,"yumurtacı"),
    new BudgetData(300,"ciro"),
    new BudgetData(500,"hal"));
    constructor(){}
}