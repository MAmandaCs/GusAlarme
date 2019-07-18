import { Component, OnInit } from '@angular/core';
import { TelaCadastro } from './tela-cadastro';
import { AngularFireDatabase } from '@angular/fire/database';
import { TelaCadastroDataService } from './tela-cadastro-data.service';
import { TelaCadastroService } from './tela-cadastro.service';


@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit{

  cadastro: TelaCadastro;
  key: string = '';

  constructor(private db: AngularFireDatabase, 
    private cadastroDataService: TelaCadastroDataService,
    private cadastroService: TelaCadastroService) { 
    }

  insert(cad: TelaCadastro){
    this.db.list('cadastro').push(cad)
    .then((result: any) => {
      console.log(result.key);
    });
  }

  ngOnInit(){
    this.cadastro = new TelaCadastro();
  }

  onSubmit(){
    if(this.key){
      
    }else{
      this.insert(this.cadastro);
    }
    this.cadastro = new TelaCadastro;
  }
  
}
