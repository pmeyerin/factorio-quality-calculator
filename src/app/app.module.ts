import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FccRootComponent } from './fcc-root/fcc-root.component';
import { FactoryDesignerComponent } from './factory-designer/factory-designer.component';
import { RecyclerDesignerComponent } from './recycler-designer/recycler-designer.component';
import {MatSelectModule} from "@angular/material/select";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    FccRootComponent,
    FactoryDesignerComponent,
    RecyclerDesignerComponent,
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
