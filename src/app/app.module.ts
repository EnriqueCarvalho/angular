import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomeComponent } from './view/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LoginComponent } from './view/login/login.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './controller/guards/auth.guard';
import { ClientesGuard } from './controller/guards/clientes.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalConfirmacaoComponent } from './view/modal-confirmacao/modal-confirmacao.component';
import { AuthService } from './services/auth.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ModalConfirmacaoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    [CarouselModule.forRoot(),],
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
    
  ],
 
  providers: [
    AuthService,
    AuthGuard,
    ClientesGuard,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BsDatepickerModule  
  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
