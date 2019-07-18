import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TelaCadastro } from './tela-cadastro';

@Injectable({
  providedIn: 'root'
})
export class TelaCadastroService {

  insert(cad: TelaCadastro){
    throw new Error("Metodo não implemetado.");
  }

  private cadastroSource = new BehaviorSubject({
    cad: null, key: ''
  });

  constructor() { }

  changeCadastro(cad: TelaCadastro, key: string){
    this.cadastroSource.next({cad: cad, key: key})
  }
}
