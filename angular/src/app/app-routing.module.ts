import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiliereFormComponent } from './filiere-form/filiere-form.component';
import { FiliereComponent } from './filiere/filiere.component';
import { FilieresComponent } from './filieres/filieres.component';
import { HomeComponent } from './home/home.component';
import { ModuleFormComponent } from './module-form/module-form.component';
import { ModuleComponent } from './module/module.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  
  {path: 'filieres', component: FilieresComponent},
  {path: 'filieres/:id', component: FiliereComponent},
  {path: 'filiere-form', component: FiliereFormComponent},
  {path: 'filiere-form/:id', component: FiliereFormComponent},

  {path: 'modules', component: ModulesComponent},
  {path: 'modules/:id', component: ModuleComponent},
  {path: 'module-form', component: ModuleFormComponent},
  {path: 'module-form/:id', component: ModuleFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
