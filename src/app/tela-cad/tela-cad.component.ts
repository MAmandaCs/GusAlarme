import { Component, OnInit } from '@angular/core';
import { TelaCad } from './tela-cad';
import { AngularFireDatabase } from '@angular/fire/database';
import { TelaCadDataService } from './tela-cad-data.service';
import { TelaCadService } from './tela-cad.service';


@Component({
  selector: 'app-tela-cad',
  templateUrl: './tela-cad.component.html',
  styleUrls: ['./tela-cad.component.css']
})
export class TelaCadComponent implements OnInit{

  cadastro: TelaCad;
  key: string = '';

  constructor(private db: AngularFireDatabase, 
    private cadastroDataService: TelaCadDataService,
    private cadastroService: TelaCadService) { 
    }

  insert(cad: TelaCad){
    this.db.list('cadastro').push(cad)
    .then((result: any) => {
      console.log(result.key);
    });
  }

  ngOnInit(){
    this.cadastro = new TelaCad();
  }

  onSubmit(){
    if(this.key){
      
    }else{
      this.insert(this.cadastro);
    }
    this.cadastro = new TelaCad;
  }
  
}
