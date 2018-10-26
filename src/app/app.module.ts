import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { DesayunoComponent } from './desayuno/desayuno.component';
import { ComidaComponent } from './comida/comida.component';
import { OrdenesComponent } from './ordenes/ordenes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DesayunoComponent,
    ComidaComponent,
    OrdenesComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
