import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BakiyeComponent } from './menu/bakiye/bakiye.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';

const routes: Routes = [{path:'',redirectTo : "/home", pathMatch:"full"},
  {path: 'home',
   component : LayoutComponent,
   children: [
    {
      path: 'bakiye', // child route path
      component: BakiyeComponent, // child route component that the router renders
    },
    {path:'dashboard',
    component:DashboardComponent
    }
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
