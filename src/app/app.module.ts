import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {routing, appRoutingProviders} from './app-routing.module';

import { AppComponent } from './app.component';
import { SemestreComponent } from './components/semestre/semestre.component';
import { EditSemestreComponent } from './components/edit-semestre/edit-semestre.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { FooterComponent } from './templates/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SemestreComponent,
    EditSemestreComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
