import { Component, OnInit } from '@angular/core';
// import  para utilizar o objeto de negócios tarefa
import { Tarefa } from '../model/Tarefa';
import { ListawebService } from '../service/listaweb.service'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

// criando objeto de negócios
minhaTarefa: Tarefa[];

// Injetando o serviço
  constructor(private servicoLista : ListawebService) {

   }

  ngOnInit() {
    console.log("Chamando a função que exibe as tarefas")
    this.obterTodasAsTarefas();
    console.log("Deu certo");
    console.log(this.minhaTarefa);
  }

  //Método para invocar o serviço
  public obterTodasAsTarefas(){
    this.servicoLista.obterTarefas().subscribe((resultado: Tarefa[])=>{this.minhaTarefa = resultado});
  }
}
