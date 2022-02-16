import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomeComponent } from './shared/components/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { ClientesGuard } from './guards/clientes.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LoginComponent } from './shared/components/login/login.component';
import { ModalConfirmacaoComponent } from './shared/components/modal-confirmacao/modal-confirmacao.component';
import { AuthService } from './shared/service/auth.service';
import { ErrorhandlerService } from './shared/service/errorhandler.service';
import { JwtinterceptorService } from './shared/service/jwtinterceptor.service';
import { AlertsComponent } from './shared/components/alerts/alerts.component';

import { AlertModule } from 'ngx-bootstrap/alert';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ModalConfirmacaoComponent,
    AlertsComponent
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
    ModalModule.forRoot(),
    HttpClientModule,
    AlertModule.forRoot()
    
  ],
 
  providers: [
    AuthService,
    AuthGuard,
    ClientesGuard,
    FontAwesomeModule,
    BrowserAnimationsModule,
    BsDatepickerModule,
    {provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true},
    {provide: ErrorHandler, useClass: ErrorhandlerService}  
  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
