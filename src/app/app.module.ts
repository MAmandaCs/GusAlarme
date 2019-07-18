import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaPerfilComponent } from './tela-perfil/tela-perfil.component';
import { TelaConfigComponent } from './tela-config/tela-config.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaRecuperacaosenhaComponent } from './tela-recuperacaosenha/tela-recuperacaosenha.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { TelaCadComponent } from './tela-cad/tela-cad.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaPerfilComponent,
    TelaConfigComponent,
    TelaPrincipalComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    TelaRecuperacaosenhaComponent,
    TelaCadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
