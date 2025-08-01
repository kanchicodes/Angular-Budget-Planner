import { NgModule } from '@angular/core';
import { Login } from './login/login';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'login',component:Login}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
