import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

//Rutas
import { routes } from './app.routes';

@NgModule({
  // declarations: [
  //   AppComponent,
  //   CrearProductoComponent,
  //   ListarProductosComponent
  // ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    RouterModule.forRoot(routes),
    // Importa los componentes standalone directamente aquí
    AppComponent,
    HttpClientModule,
    CrearProductoComponent,
    ListarProductosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
