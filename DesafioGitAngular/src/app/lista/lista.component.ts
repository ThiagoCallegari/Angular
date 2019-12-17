import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { User } from '../Model/user';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private servicoLista : ListService) { }

  users: User[];

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.servicoLista.getAll().subscribe((resultado: User[])=>{this.users = resultado});
  }
}
