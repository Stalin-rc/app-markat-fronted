import { NewVentasComponent } from './components/new-ventas/new-ventas.component';
import { NewEditProductComponent } from './components/new-edit-product/new-edit-product.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPwComponent } from './components/reset-pw/reset-pw.component';
import { RecoverCodeComponent } from './components/recover-code/recover-code.component';
import { RecoverPwComponent } from './components/recover-pw/recover-pw.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { NewEditClienteComponent } from './components/new-edit-cliente/new-edit-cliente.component';

const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "recover-pw", component: RecoverPwComponent },
  { path: "recover-code", component: RecoverCodeComponent },
  { path: "reset-pw", component: ResetPwComponent },
  { path: "dashboard/:id", component: DashboardComponent },
  { path: "dashboard/:id/inventario", component: InventarioComponent },
  {
    path: "dashboard/:id/clientes", component: ClientesComponent,
    children: [
      { path: "new", component: NewEditClienteComponent }
    ]
  },
  { path: "dashboard/:id/clientes/edit/:id_cliente", component: NewEditClienteComponent },
  { path: "dashboard/:id/ventas", component: VentasComponent },
  { path: "dashboard/:id/finanzas", component: FinanzasComponent },
  { path: "dashboard/:id/inventario/new", component: NewEditProductComponent },
  { path: "dashboard/:id/inventario/edit/:id_producto", component: NewEditProductComponent },
  { path: "dashboard/:id/ventas/new", component: NewVentasComponent },

  { path: "**", component: LandingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
