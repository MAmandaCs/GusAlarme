import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TelaCad } from './tela-cad';

@Injectable({
  providedIn: 'root'
})
export class TelaCadService {

  insert(cad: TelaCad){
    throw new Error("Metodo não implemetado.");
  }

  private cadastroSource = new BehaviorSubject({
    cad: null, key: ''
  });

  constructor() { }

  changeCadastro(cad: TelaCad, key: string){
    this.cadastroSource.next({cad: cad, key: key})
  }
}
