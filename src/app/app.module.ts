import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Para poder funcionar correctamente el sistema me ha pedido el ScrollDispatcher
import { ScrollingModule, ScrollDispatcher } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { DragComponent } from './components/drag/drag.component';
import { PaisesComponent } from './components/paises/paises.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    FormsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [ScrollDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
