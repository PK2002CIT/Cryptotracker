import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';

const routes: Routes = [
  {path:'',redirectTo:'coinList',pathMatch:'full'},
  {path:'coinList',component:CoinListComponent},
  {path:'coinDetail/:id',component:CoinDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
