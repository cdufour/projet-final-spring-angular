import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FilieresComponent } from './filieres/filieres.component';
import { FiliereFormComponent } from './filiere-form/filiere-form.component';
import { FormsModule } from '@angular/forms';
import { FiliereComponent } from './filiere/filiere.component';
import { HomeComponent } from './home/home.component';
import { ModuleFormComponent } from './module-form/module-form.component';
import { ModulesComponent } from './modules/modules.component';
import { ModuleComponent } from './module/module.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FilieresComponent,
    FiliereFormComponent,
    FiliereComponent,
    HomeComponent,
    ModuleFormComponent,
    ModulesComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
