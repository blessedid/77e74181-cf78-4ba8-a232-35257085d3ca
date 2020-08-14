import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page/not-found/page-not-found.component';
import { ReportsComponent } from './page/reports/reports.component';
import { ObjectsComponent } from './page/objects/objects.component';
import { ContractsComponent } from './page/contracts/contracts.component';
import { FinanceComponent } from './page/finance/finance.component';
import { GraphsComponent } from './page/graphs/graphs.component';
import { ObjectViewComponent } from './page/objects/object-view/object-view.component';
import { ObjectEditComponent } from './page/objects/object-edit/object-edit.component';
import { EquipmentsComponent } from './page/equipments/equipments.component';
import { AfaComponent } from './page/afa/afa.component';
import { EntitiesComponent } from './page/entities/entities.component';
import { UsersComponent } from './page/users/users.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './page/login/login.component';
import {HomeComponent} from './page/home/home.component';
import {PanelComponent} from './components/panel/panel.component';
import {ItemInfoComponent} from './components/item-info/item-info.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { TaskStatusTemplatePossibleComponent } from "./page/task-status-template-possible/task-status-template-possible.component";
import {SearchComponent} from "./page/search/search.component";


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'panel/:id', component: PanelComponent, canActivate: [AuthGuard] },
  { path: 'item/:id', component: ItemInfoComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'template-possible', component: TaskStatusTemplatePossibleComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },

  /* Delete */
  { path: 'contracts', component: ContractsComponent, canActivate: [AuthGuard] },
  { path: 'contract/:id', component: ContractsComponent, canActivate: [AuthGuard] },
  { path: 'contract/edit/:id', component: ContractsComponent, canActivate: [AuthGuard] },
  /* Delete */
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'graphs', component: GraphsComponent, canActivate: [AuthGuard] },
  { path: 'equipment/:id', component: EquipmentsComponent, canActivate: [AuthGuard] },
  { path: 'equipment/edit/:id', component: EquipmentsComponent, canActivate: [AuthGuard] },
  { path: 'afa/edit/:id', component: AfaComponent, canActivate: [AuthGuard] },
  // Юрикр
  { path: 'entities', component: EntitiesComponent, canActivate: [AuthGuard] },
  { path: 'entities/:id', component: EntitiesComponent, canActivate: [AuthGuard] },
  { path: 'entities/edit/:id', component: EntitiesComponent, canActivate: [AuthGuard] },
  // Блок url магазинов
  { path: 'objects', component: ObjectsComponent, canActivate: [AuthGuard] },
  { path: 'object/:id', component: ObjectViewComponent, canActivate: [AuthGuard] },
  { path: 'object/edit/:id', component: ObjectEditComponent, canActivate: [AuthGuard] },
  // Пользователи
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'user/:id', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'user/edit/:id', component: UsersComponent, canActivate: [AuthGuard] },
  // Настройки, авторизация
  { path: 'settings', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
