import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { SideNavComponent } from './side-nav/side-nav';
import { DashboardComponent } from './dashboard/dashboard';
import { IncomeComponent } from './income/income';
import { ExpenseComponent } from './expense/expense';
import { TodoComponent } from './todo/todo';
import { HistoryComponent } from './history/history';
import { ProfileComponent } from './profile/profile';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'side-nav',component:SideNavComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'income',component:IncomeComponent},
  {path:'expense',component:ExpenseComponent},
  {path:'todo',component:TodoComponent},
  {path:'history',component:HistoryComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
