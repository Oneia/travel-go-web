import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2CompleterModule }       from "ng2-completer";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryItemAddComponent } from './components/category-item-add/category-item-add.component';

import { CategoryItemListComponent } from './components/category-item-list/category-item-list.component';
import {MdButtonModule, MdInputModule, MdAutocompleteModule, MdListModule, MdDialogModule} from '@angular/material';
import { AppRoutingModule } from './app-route';
import { ModalMarkerInfoComponent } from './components/modal-marker-info/modal-marker-info.component';

const MATERIAL_COMPONENTS = [MdListModule, MdButtonModule, MdInputModule, MdAutocompleteModule, MdDialogModule]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    MapComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryItemComponent,
    CategoryItemAddComponent,
    CategoryItemListComponent,
    ModalMarkerInfoComponent
  ],
  entryComponents: [
    ModalMarkerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2CompleterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ...MATERIAL_COMPONENTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
